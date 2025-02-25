import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as d,a as s}from"./app-nD1Z-e8V.js";const o={},c=s(`<h1 id="centos7" tabindex="-1"><a class="header-anchor" href="#centos7" aria-hidden="true">#</a> centos7</h1><h2 id="清空之前的安装" tabindex="-1"><a class="header-anchor" href="#清空之前的安装" aria-hidden="true">#</a> 清空之前的安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 卸载包
rpm -qa | grep -i mysql
rpm -e –nodeps 包名
## 卸载文件
find / -name mysql
rm -rf /var/lib/mysql
## 卸载配置文件
/etc/my.cnf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>1.添加yum源 <code>https://dev.mysql.com/downloads/repo/yum/</code> 选择合适的rmp包,用来添加源 <code>sudo yum localinstall mysql80-community-release-el7-3.noarch.rpm</code> 添加yum源 <code>yum repolist enabled | grep &quot;mysql.*-community.*&quot;</code> 查看是否添加成功</p><p>2.安装mysql服务端 <code>sudo yum install mysql-community-server</code></p><p>3.启动服务 如果报错,可能要重启,安装两次才成功 <code>systemctl start mysqld.service</code><code>systemctl stop mysqld.service</code> 关闭服务</p><p><code>service mysqld start</code><code>service mysqld stop</code></p><p>4.更改密码 <code>grep &#39;temporary password&#39; /var/log/mysqld.log</code> 通过日志,查看默认密码 <code>cat /root/.mysql_secret</code> 默认密码保存位置 <code>mysql -uroot -p</code> 登录 <code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;MyNewPass4!&#39;;</code>通过表,修改密码</p><p>默认的密码策略是Medium,最好不要更改.</p><table><thead><tr><th>Policy</th><th>Tests Performed</th></tr></thead><tbody><tr><td>0 or LOW</td><td>默认长度为8</td></tr><tr><td>1 or MEDIUM</td><td>Length; numeric, lowercase/uppercase, and special characters,8位数字,大小写,特殊字符</td></tr><tr><td>2 or STRONG</td><td>Length; numeric, lowercase/uppercase, and special characters; dictionary file,8位数字,大小写,特殊字符,字典文件</td></tr></tbody></table><p>5.开放公网连接</p><p><code>use mysql</code> # 切换mysql数据库 <code>update user set host=&#39;%&#39; where user =&#39;root&#39;;</code> # 允许外部访问 <code>FLUSH PRIVILEGES;</code>将更改加载的内存 <code>GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39;WITH GRANT OPTION;</code> 授权</p><p>参考: https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html#yum-repo-installing-mysql https://blog.csdn.net/qq_39564555/article/details/98473590 https://www.cnblogs.com/hrvyzou/p/11061521.html</p>`,14),r=[c];function a(l,n){return t(),d("div",null,r)}const p=e(o,[["render",a],["__file","centos7.html.vue"]]);export{p as default};
