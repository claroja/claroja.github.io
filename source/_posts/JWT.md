---
title: JWT
toc: true
date: 2021-06-26 11:17:34
tags:
categories:
    - [语言, Java]
---
JWTs既可以是签名(JWS,Signature),也可以是加密(JWE,Encryption)
jwt有三个部分, 使用`.`来隔开, 每个部分使用 Base64URL进行编码.
1. 第一部分: header 记录该lwt使用什么进行签名
2. 第二部分: body(claims) 要传输的内容
3. 第三部分: signature, 将第一部分header和第二部分加合并进行签名.
<!--more-->

# 安装
```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.2</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.2</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId> <!-- or jjwt-gson if Gson is preferred -->
    <version>0.11.2</version>
    <scope>runtime</scope>
</dependency>
```
# 入门案例
```java
package com;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
public class test {
    public static void main(String[] args) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String jws = Jwts.builder().setSubject("Joe").signWith(key).compact();
        String subject = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jws).getBody().getSubject();
        System.out.println(subject);
    }
}

```

# jwt原理
jwt保证:
- authenticity, 保证我们知道创建jwt的人(不能伪造创建者)
- integrity, 保证jwt不能被修改(不能伪造信息)
jwt通过以下步骤实现了这两点:
1. 创建jwt的信息
```java
String header = '{"alg":"HS256"}'
String claims = '{"sub":"Joe"}'
```
2. 使用base64转码
```java
String encodedHeader = base64URLEncode( header.getBytes("UTF-8") )
String encodedClaims = base64URLEncode( claims.getBytes("UTF-8") )
```
3. 拼贴header和claims
```java
String concatenated = encodedHeader + '.' + encodedClaims
```
4. 进行签名
```java
Key key = getMySecretKey()
byte[] signature = hmacSha256( concatenated, key )
```
5. 追加签名信息
```java
String jws = concatenated + '.' + base64URLEncode( signature )
```

# 签名key

## key简介
jwt包含了12个签名算法:3个秘钥算法和9个不对称加密算法.
- HS256: HMAC using SHA-256
- HS384: HMAC using SHA-384
- HS512: HMAC using SHA-512
- ES256: ECDSA using P-256 and SHA-256
- ES384: ECDSA using P-384 and SHA-384
- ES512: ECDSA using P-521 and SHA-512
- RS256: RSASSA-PKCS-v1_5 using SHA-256
- RS384: RSASSA-PKCS-v1_5 using SHA-384
- RS512: RSASSA-PKCS-v1_5 using SHA-512
- PS256: RSASSA-PSS using SHA-256 and MGF1 with SHA-256
- PS384: RSASSA-PSS using SHA-384 and MGF1 with SHA-384
- PS512: RSASSA-PSS using SHA-512 and MGF1 with SHA-512
1. HMAC-SHA
HS256: HMAC-SHA-256, 长度最少: 256 bits (32 bytes)
HS384: HMAC-SHA-384, 长度最少: 384 bits (48 bytes)
HS512: HMAC-SHA-512, 长度最少: 512 bits (64 bytes)
2. Elliptic
ES256: 256 bits (32 bytes)
ES384: 384 bits (48 bytes)
ES512: 512 bits (64 bytes)
3. RSA
RS256 and PS256: 建议长度最少2048 bit
RS384 and PS384: 建议长度最少3072 bit
RS512 and PS512: 建议长度最少4096 bit

## 生成安全key
1. 生成secret key
如果不想自己写key(考虑上面要求的长度, 很烦躁), 可以使用`io.jsonwebtoken.security.Keys`来生成.
为`HS256`加密算法生成`符合要求`的`随机`的key
```java
SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
```
使用BASE64来保存key
```java
String secretString = Encoders.BASE64.encode(key.getEncoded());
```

2. Asymmetric Keys
```java
KeyPair keyPair = Keys.keyPairFor(SignatureAlgorithm.RS256);
keyPair.getPrivate() //私钥用来创建jws
keyPair.getPublic()//公钥用来解析和认证jws
```


# 创建jws
## 一般过程
1. `Jwts.builder()`创建`JwtBuilder`实例
2. 使用`JwtBuilder`来添加`header`和`claim`
3. 指定`SecretKey`或者`PrivateKey`来对jwt进行签名
4. 调用`compact()`来"挤压"生成结果

```java
String jws = Jwts.builder() // (1)
    .setSubject("Bob")      // (2) 
    .signWith(key)          // (3)
    .compact();             // (4)
```
## 设置head
注意不需要设置`alg`或`zip`, jwt会自动设置
```java
String jws = Jwts.builder()
    .setHeaderParam("kid", "myKeyId")
```
## 设置claims
- `JwtBuilder`提供了快捷方法来设置, 标准的claims的key
    ```java
    String jws = Jwts.builder()

        .setIssuer("me")
        .setSubject("Bob")
        .setAudience("you")
        .setExpiration(expiration) //a java.util.Date
        .setNotBefore(notBefore) //a java.util.Date 
        .setIssuedAt(new Date()) // for example, now
        .setId(UUID.randomUUID()) //just an example id
    ```
- 也可以自定义
    ```java
    String jws = Jwts.builder()
        .claim("hello", "world")
    ```

## 设置签名
```java
String jws = Jwts.builder()
   // ... etc ...
   .signWith(key) // <---
```
获得key的方法
- An encoded byte array
```java
SecretKey key = Keys.hmacShaKeyFor(encodedKeyBytes);
```
- Base64-encoded string:
```java
SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretString));
```
- A Base64URL-encoded string:
```java
SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(secretString));
```
- A raw (non-encoded) string (e.g. a password String):
```java
SecretKey key = Keys.hmacShaKeyFor(secretString.getBytes(StandardCharsets.UTF_8));
```

# 读取jws
## 一般步骤
1. `Jwts.parserBuilder()`创建`JwtParserBuilder`实例
2. 指定`SecretKey`或`PublicKey`来验证JWS的签名
3. 调用`build()`创建`JwtParser`
4. 调用`parseClaimsJws(String)`

```java
    jws = Jwts.parserBuilder()  // (1)
    .setSigningKey(key)         // (2)
    .build()                    // (3)
    .parseClaimsJws(jwsString); // (4)
```

## key
- 如果签名使用`SecretKey`, 则需要提供相同的key
    ```java
    Jwts.parserBuilder()
    .setSigningKey(secretKey) // <----
    .build()
    .parseClaimsJws(jwsString);
    ```
- 如果签名使用`PrivateKey`, 则需要提供对应的`PublicKey`(PrivateKey,虽然也能解密,但是提供出来被人窃取会伪造JWS)
```java
Jwts.parserBuilder()
  .setSigningKey(publicKey) // <---- publicKey, not privateKey
  .build()
  .parseClaimsJws(jwsString);
```

参考:
https://github.com/jwtk/jjwt
