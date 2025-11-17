


auto-animation只能使指定的元素有效果, 如果元素内部嵌套其他元素则对该元素也没有效果.


```htm
<div class="reveal">
    <div class="slides">
        <section data-auto-animate>
            <div data-id="container" style="position: absolute;left: 1%;top: 10%;">
                1. haha1<br>2. haha2<br>3. haha3
            </div>
        </section>
        <section data-auto-animate>
            <div data-id="container" style="position: absolute;left: 50%;top: 50%;">
                2. haha1<br>2. haha2<br>3. haha3
            </div>
        </section>
    </div>
</div>
```

如果内部嵌套`ul`和`li`则动画效果会被破坏

```htm
<div class="reveal">
    <div class="slides">
        <section data-auto-animate>
            <div data-id="container" style="position: absolute;left: 1%;top: 10%;">
                1. haha1<br>2. haha2<br>3. haha3
            </div>
        </section>
        <section data-auto-animate>
            <div data-id="container" style="position: absolute;left: 50%;top: 50%;">
                1. haha1<br>2. haha2<br>3. haha3
            </div>
        </section>
    </div>
</div>
```


reveal对transform的支持不好, 尽量使用其他实现方式.

```htm
<div class="reveal">
    <div class="slides">
        <section data-auto-animate>
            <div data-id="container1" style="position: absolute;left: 1%;top: 10%;height: 400px;background-color:brown;overflow: hidden;">
                <p data-id="container2">1. haha1<br>2. haha2<br>3. haha3<br>4. haha4</p>
                
            </div>
        </section>
        <section data-auto-animate>
            <div data-id="container1" style="position: absolute;left: 1%;top: 10%;height: 400px;background-color:brown;overflow: hidden;">
                <p data-id="container2" style="position: relative;top: 100px;">1. haha1<br>2. haha2<br>3. haha3<br>4. haha4</p>
            </div>
        </section>
    </div>
</div>
```

```htm
<div class="reveal">
    <div class="slides">
        <section data-auto-animate>
            <div data-id="container1" style="position: absolute;left: 1%;top: 10%;width: 100px;height: 400px;background-color:brown;overflow: hidden;">
                <p data-id="container2">1. haha1<br>2. haha2<br>3. haha3<br>4. haha4</p>
            </div>
        </section>
        <section data-auto-animate>
            <div data-id="container1" style="position: absolute;left: 1%;top: 10%;width: 100px;height: 400px;background-color:brown;overflow: hidden;">
                <p data-id="container2" style="transform: translateY(-100px);">1. haha1<br>2. haha2<br>3. haha3<br>4. haha4</p>
            </div>
        </section>
    </div>
</div>
```















