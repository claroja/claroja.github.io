# 贝塞尔曲线

贝塞尔曲线由控制点定义。这些点可能有 2、3、4 个或更多。例如，
1. 两点曲线：

    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="187" viewBox="0 0 149 187"><g id="animation" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="bezier2.svg"><path id="Path-6" stroke="#A7333A" stroke-width="2" d="M24.17 143.348l100.144-99.843"/><circle id="Oval-1" cx="24" cy="144" r="4" fill="#FFF" stroke="#DBAF88"/><text id="1" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="20" y="165">1</tspan></text><circle id="Oval-2" cx="124" cy="44" r="4" fill="#FFF" stroke="#DBAF88"/><text id="2" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="120.101" y="65">2</tspan></text></g></g></svg>


2. 三点曲线:

    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="187" viewBox="0 0 149 187"><g id="animation" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="bezier3.svg"><path id="Path-4" stroke="#A7333A" stroke-width="2" d="M24.279 143.124c50.221-100.184 89.93-17.718 99.822.521"/><circle id="Oval-1" cx="24" cy="144" r="4" fill="#FFF" stroke="#DBAF88"/><text id="1" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="20" y="165">1</tspan></text><circle id="Oval-2" cx="124" cy="144" r="4" fill="#FFF" stroke="#DBAF88"/><text id="3" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="120" y="165">3</tspan></text><circle id="Oval-3" cx="74" cy="44" r="4" fill="#FFF" stroke="#DBAF88"/><text id="2" fill="#AF6E24" font-family="PTMono-Regular, PT Mono" font-size="14" font-weight="normal"><tspan x="69.99" y="32">2</tspan></text></g></g></svg>


3. 四点曲线


    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="187" viewBox="0 0 149 187"><g id="animation" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="bezier4.svg"><path id="Path-1" stroke="#A7333A" stroke-width="2" d="M23.688 143.905c50.015 0 50.703-100.414 100.467-100.414"/><circle id="Oval-1" cx="24" cy="144" r="4" fill="#FFF" stroke="#DBAF88"/><circle id="Oval-2" cx="124" cy="43" r="4" fill="#FFF" stroke="#DBAF88"/><circle id="Oval-3" cx="73" cy="43" r="4" fill="#FFF" stroke="#DBAF88"/><circle id="Oval-4" cx="73" cy="143" r="4" fill="#FFF" stroke="#DBAF88"/><text id="1" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="20" y="165">1</tspan></text><text id="2" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="69" y="165">2</tspan></text><text id="3" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="69" y="35">3</tspan></text><text id="4" fill="#AF6E24" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold"><tspan x="121" y="35">4</tspan></text></g></g></svg>


他们共同特点是:

1. 控制点不总是在曲线上这是非常正常的
2. 曲线的阶次等于控制点的数量减一。 对于两个点我们能得到一条线性曲线（直线），三个点 — 一条二阶曲线，四个点 — 一条三阶曲线
3. 曲线总是在控制点的凸包内部：
4. 曲线延控制点连接的曲线延伸

由于最后一个属性，在计算机图形学中，可以优化相交测试。如果凸包不相交，则曲线也不相交。因此，首先检查凸包的交叉点可以非常快地给出“无交叉”结果。检查交叉区域或凸包更容易，因为它们是矩形，三角形等（见上图），比曲线简单的多。


## 参考
1. https://zh.javascript.info/bezier-curve










