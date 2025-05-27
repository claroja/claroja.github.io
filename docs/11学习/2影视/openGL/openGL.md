# 离散_期望



## 设置窗口


## 点


所有的电脑图像都是2维的.
最基础的是画点(points or pixels), 设置大小(size)和颜色(color)

```python
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *

def init():
    glClearColor(0.0, 0.0, 0.0, 1.0)  # 背景设置为黑色 (red, green, blue, alpha)
    gluOrtho2D(-1.0, 1.0, -1.0, 1.0)  # 设置坐标(x-left, x-right, y-bottom, y-top)


def plotpoints():
    glClear(GL_COLOR_BUFFER_BIT)  # 清除当前屏幕, 使用init()中设置的背景
    glColor3f(1.0, 0.0, 0.0)  # 给笔着色(red, green, blue)

    glBegin(GL_POINTS)  # 开始画, 并指定绘制点(point), 还可以指定其他, 比如 GL_LINES
    glVertex2f(0.0, 0.0)  # 坐标(x,y)
    glEnd() # 结束作画
    glFlush() # 发送到屏幕

def main():
    glutInit()
    glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB)
    glutInitWindowSize(500,500)
    glutInitWindowPosition(50,50)
    glutCreateWindow("Plot Points")
    glutDisplayFunc(plotpoints)

    init()
    glutMainLoop()


    
main()
```



### Plotting 2D Functions

做一个二次函数

```python
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
from numpy import *



def init():
    glClearColor(1.0, 1.0, 1.0, 1.0)
    gluOrtho2D(-5.0, 5.0, -5.0, 5.0)


def plotfunc():
    glClear(GL_COLOR_BUFFER_BIT)
    glColor3f(0.0, 0.0, 0.0)
    glPointSize(3.0)

    # 画出x轴和y轴
    glBegin(GL_LINES)  # 指定绘制的是线
    glVertex2f(-5.0, 0.0)
    glVertex2f(5.0, 0.0)
    glVertex2f(0.0, 5.0)
    glVertex2f(0.0, -5.0)
    glEnd()

    for x in arange(-5.0, 5.0, 0.1):
        y = x*x
        # 每次画点 都是这三个步骤
        glBegin(GL_POINTS)  # GL_POINTS是指定绘制的是点
        glVertex2f(x, y)
        glEnd()
        # 每次都推送到屏幕上
        glFlush()


def main():
    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_SINGLE|GLUT_RGB)
    glutInitWindowPosition(50,50)
    glutInitWindowSize(400,400)
    glutCreateWindow("Function Plotter")
    glutDisplayFunc(plotfunc)

    init()
    glutMainLoop()

main() 

```


### Parametric Equations
通过`y=sing(t)`和`y=cos(t)`来做一个圆
```python
def plotfunc():
    glClear(GL_COLOR_BUFFER_BIT)
    glColor3f(0.0, 0.0, 0.0)
    glPointSize(1.0)

    # Plot the coordinate axes
    glBegin(GL_LINES)
    glVertex2f(-2.0, 0.0)
    glVertex2f(2.0, 0.0)
    glVertex2f(0.0, 2.0)
    glVertex2f(0.0, -2.0)
    glEnd()
    # Plot the parametric equations
    for t in arange(0.0,6.28, 0.001):
        x = sin(t)
        y = cos(t)
        glBegin(GL_POINTS)
        glVertex2f(x, y)
        glEnd()
        glFlush()

```


### An Example from Physics


### Section 5.5 Polar Coordinates 
在代数中我们使用直角坐标系(Cartesian rectangular coordinate system), 另外还有极坐标系(polar coordinates), 利用$r$(半径)和$\theta$(角度)来确定点的位置.

绘制极坐标图像, 需要先将极坐标的点转换为笛卡尔坐标点.
$$
x = r \cdot cos(\theta)
y = r \cdot sin(\theta)
$$


```python

from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
from numpy import *
import sys 

## 设置窗口的大小以及极坐标的范围
global width
global height
global axrng

width = 400
height = 400
axrng = 7.0 

def init():
    glClearColor(1.0, 1.0, 1.0, 1.0)

def plotpolar():

    glClear(GL_COLOR_BUFFER_BIT)

    # Plot axis lines for reference
    glColor3f(0.0, 0.0, 0.0)
    glBegin(GL_LINES)
    glVertex2f(-axrng,0)
    glVertex2f(axrng,0)
    glVertex2f(0,axrng)
    glVertex2f(0,-axrng)
    glEnd()

    # Plot polar equation for a Limacon
    glPointSize(2.0)
    for theta in arange(0.0, 6.28, 0.001):
        r = 4*cos(theta) + 2
        x = r*cos(theta)
        y = r*sin(theta)
        glBegin(GL_POINTS)
        glVertex2f(x,y)
        glEnd()
        glFlush()

def reshape(w, h):  # 每次改变窗口时被调用, (w,h)是调用时窗口的宽度和高度
    # To insure we don't have a zero window height
    if h==0:
        h = 1
    # Fill the entire graphics window!
    glViewport(0, 0, w, h)
    # Set the projection matrix... our "view"
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()
    # Set the aspect ratio of the plot so that it
    # Always looks "OK" and never distorted.
    if w <= h:
        gluOrtho2D(-axrng, axrng, -axrng*h/w, axrng*h/w)
    else:
        gluOrtho2D(-axrng*w/h, axrng*w/h, -axrng, axrng)
    # Set the matrix for the object we are drawing
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()

def keyboard(key, x, y):
    # Allows us to quit by pressing 'Esc' or 'q'
    if key == chr(27):
        sys.exit()
    if key == "q":
        sys.exit()


def main():
    global width
    global height

    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_RGB|GLUT_SINGLE)
    glutInitWindowPosition(10,10)
    glutInitWindowSize(width,height)
    glutCreateWindow("Polar Equations")
    glutReshapeFunc(reshape)  # 设置窗口的大小, 每次窗口改变大小, 都会调用reshape文件
    glutDisplayFunc(plotpolar)
    glutKeyboardFunc(keyboard)
    init()
    glutMainLoop()

main()
```



## Patterns and Chaos in 2 Dimensions

下面的程序, 根据你的电脑配置可能会需要几秒或几分钟的时间才能渲染完毕. 慢的原因是我们是一个点一个点来计算的.
```python
## PyMathArt.py
## PyMathArt.py
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
from numpy import *
import sys
## Set the global width, height, and axis ranges of the window
global width
global height
global axrng
## Initial values
width = 500
height = 500
axrng = 10.0


def init():
    glClearColor(1.0, 1.0, 1.0, 1.0)

def plotmathart():
    glClear(GL_COLOR_BUFFER_BIT)

    # 为什么步长是0.04
    # 因为窗口宽度和高度是500, 坐标系x和y轴都是(-10,10), 所以20个单位点必须分布在500像素(pixel)中 20/500=0.04
    for x in arange(-axrng, axrng, 0.04):
        for y in arange(-axrng, axrng, 0.04):
            r = cos(x) + sin(y)
            glColor3f(cos(y*r), cos(x*y*r), sin(r*x))
            glBegin(GL_POINTS)
            glVertex2f(x,y)
            glEnd()
            # glFlush()

def reshape( w, h):
    # To insure we don't have a zero height
    if h==0:
        h = 1

    # Fill the entire graphics window!
    glViewport(0, 0, w, h)

    # Set the projection matrix... our "view"
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()

    # Set the aspect ratio of the plot so that it 
    # Always looks "OK" and never distorted.
    if w <= h:
        gluOrtho2D(-axrng, axrng, -axrng*h/w, axrng*h/w)
    else:
        gluOrtho2D(-axrng*w/h, axrng*w/h, -axrng, axrng)

    # Set the matrix for the object we are drawing
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()

def keyboard(key, x, y):
    # Allows us to quit by pressing 'Esc' or 'q'
    if key == chr(27):
        sys.exit()
    if key == "q":
        sys.exit() 


def main():
    global width
    global height

    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_RGB|GLUT_SINGLE)
    glutInitWindowPosition(100,100)
    glutInitWindowSize(width,height)
    glutCreateWindow("Math Art Patterns")
    glutReshapeFunc(reshape)
    glutDisplayFunc(plotmathart)
    glutKeyboardFunc(keyboard)

    init()
    glutMainLoop()


main() 
```


### 谢尔宾斯基三角形(Sierpinski Gasket)

```python
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
from random import *
import sys

## Set the global width, height, and axis ranges of the window
global width
global height
global axrng

## Initial values
width = 500
height = 500
axrng = 2.0

def init():
    # White background
    glClearColor(1.0, 1.0, 1.0, 0.0)

    # Black Plot
    glColor3f(0.0, 0.0, 0.0)



def plotfunc():
    # Store the triangle vertices in an array
    verts = [[0.0,2.0],[-2.0,-2.0],[2.0,-2.0]]

    # Choose an initial point... any point
    x = -1.5
    y = 0.75

    glClear(GL_COLOR_BUFFER_BIT)

    for n in range(0,10000):
        v = randint(0,2)
        x = (x + verts[v][0])/2
        y = (y + verts[v][1])/2

        if n > 30:
            glBegin(GL_POINTS)
            glVertex2f(x,y)
            glEnd()
            glFlush()

def reshape( w, h):

    # To insure we don't have a zero height
    if h==0:
        h = 1

    # Fill the entire graphics window!
    glViewport(0, 0, w, h)

    # Set the projection matrix... our "view"
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()

    # Set the aspect ratio of the plot so that it
    # Always looks "OK" and never distorted.
    if w <= h:
        gluOrtho2D(-axrng, axrng, -axrng*h/w, axrng*h/w)
    else:
        gluOrtho2D(-axrng*w/h, axrng*w/h, -axrng, axrng)

    # Set the matrix for the object we are drawing
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()

def keyboard(key, x, y):
    # Allows us to quit by pressing 'Esc' or 'q'
    if key == chr(27):
        sys.exit()
    if key == "q":
        sys.exit()

def main():
    global width
    global height

    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_RGB|GLUT_SINGLE)
    glutInitWindowPosition(100,100)
    glutInitWindowSize(width,height)
    glutCreateWindow("The Chaos Game")
    glutReshapeFunc(reshape)
    glutDisplayFunc(plotfunc)
    glutKeyboardFunc(keyboard)

    init()
    glutMainLoop()

main()


```


### The Barnsley Fern


```python
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
import random
from numpy import *
import sys

## Globals for window width and height
global width
global height

## Initial values of width and height
width = 600
height = 600

def init():
    # White background
    glClearColor(1.0, 1.0, 1.0, 0.0)

    # Green Plot… it IS a Fern
    glColor3f(0.3, 0.6, 0.2)

    # Set the projection matrix... our "view"
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()

    # Set the plot window range
    gluOrtho2D(-3.0, 3.0, 0.0, 10.5)

    # Set the matrix for the object we are drawing
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()


def plotfunc():

    # Choose an initial point... any point
    # You can randomize this if you wish
    x = -1.5
    y = 0.75

    glClear(GL_COLOR_BUFFER_BIT)

    # Plot 100000 points. This number is very large.
    # Feel free to experiment with smaller values.

    for n in range(0,100000):

        # n allows us to reject the first few points
        # to give the attractor a chance to do its “thing”
        # Choose a random value between 0 and 1 and
        # then select a set of parameters based on this value.
        # v = random()
        v= random.random()

        if v >= 0 and v <= 0.8000:
            a = 0
            b = 1.6
            c = -2.5*pi/180
            d = -2.5*pi/180
            e = 0.85
            f = 0.85
            #glColor3f(1.0, 0.0, 0.0)

        elif v > 0.8000 and v <= 0.8050:
            a = 0
            b = 0
            c = 0*pi/180
            d = 0*pi/180
            e = 0
            f = 0.16
            #glColor3f(0.0, 1.0, 0.0)

        elif v > 0.8050 and v <= 0.9025:
            a = 0
            b = 1.6
            c = 49*pi/180
            d = 49*pi/180
            e = 0.3
            f = 0.34
            #glColor3f(0.0, 0.0, 1.0)

        elif v > 0.9025 and v <= 1.0:
            a = 0
            b = 0.44
            c = 120*pi/180
            d = -50*pi/180
            e = 0.3
            f = 0.37
            #glColor3f(1.0, 0.0, 1.0)


        # Save the old values of x and y so we can iterate
        # those values according to the chosen parameters
        # and rules.
        xx = x
        yy = y
        # Apply the parameters to the rule equations
        x = e * xx * cos(c) - f * yy * sin(d) + a
        y = e * xx * sin(c) + f * yy * cos(d) + b

        # Start plotting after the 10th point
        if n > 10:
            glBegin(GL_POINTS)
            glVertex2f(x,y)
            glEnd()
            glFlush()

def keyboard(key, x, y):
    # Allows us to quit by pressing 'Esc' or 'q'
    if key == chr(27):
        sys.exit()
    if key == "q":
        sys.exit() 
def main():
    global width
    global height

    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_RGB|GLUT_SINGLE)
    glutInitWindowPosition(100,100)
    glutInitWindowSize(width,height)
    glutCreateWindow("The Chaos Game... Fern!")
    glutDisplayFunc(plotfunc)
    glutKeyboardFunc(keyboard)

    init()
    glutMainLoop()


main()

```


### Chaos and the Logistic Map 

## 7

## 8 2D Animation
如何让一些东西动起来?可能我们需要先问, 我们如何知道一个东西动了起来. 为了确定运动是否产生, 我们首先要选择一个`参考系`(stationary). 比如地球, 虽然地球每时每刻都在运动, 但是我们相对于地球却是静止的. 如果我们移动参考系, 就会让大脑觉得其他物品在动的错觉. 比如在卡通动画中, 我们可以将机场作为一个参考系, 但我们移动机场时, 我们就会觉得飞机在运动, 很多老的游戏都是利用了这个错觉, 比如超级玛丽.
另一个动画的方法是现在一个特定的地方画出物品, 在下一帧擦除, 再重新画. 我们用的就是第二种方法:

```python
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
import sys

## uncomment these lines later
## to see if there is any difference
## in the speed of the ball
## import psyco
## psyco.full()

## globals for animation, ball position
## and direction of motion
global anim, x, y ,dx, dy  # 要比单独的声明效率更高, 

## xy是球的中心点
x = -0.67
y = 0.34
## dx和dy是移动的方向, 改变符号可以改变方向
dx = dy = 1
## Window dimensions
width = height = 500

axrng = 1.0

## No animation to start
anim = 0

def init():
    glClearColor(0.0, 0.0, 0.0, 1.0)
    glColor3ub(255, 0, 0)

    # Dimensions of the screen
    # Make axrng larger and see what happens!
    gluOrtho2D(-axrng, axrng, -axrng, axrng)

def idle():
    # We animate only if anim == 1, 此时将不再相应鼠标和键盘的输入
    # otherwise the ball doesn't move
    if anim == 1:
        glutPostRedisplay()  # 渲染动画


def bounce():
    global x, y, dx, dy
    glClear(GL_COLOR_BUFFER_BIT)  # 擦除上一帧动画
    # changes x and y, 如果我们将dx和dy改成-1, 则会改变方向
    x += 0.001*dx
    y += 0.001*dy

    # Keep the motion mathematics
    # Safe from harm and then
    # Move the ball location based on x and y
    glPushMatrix()  # 和glPopMatrix对应, 用来固定中心点
    glTranslate(x,y,0)  # 移动点
    glutSolidSphere(0.1, 50, 50)  # 设置球的半径, 还有质地
    glPopMatrix()

    # Collision detection!
    # What happens here and why does this work?
    if x >= axrng or x <= -axrng:
        dx = -1*dx
    if y >= axrng or y <= -axrng:
        dy = -1*dy 
    glFlush()  # 改成glutSwapBuffers()动画会更顺滑

def keyboard(key, x, y):
    # Allows us to quit by pressing 'Esc' or 'q'
    # We can animate by "a" and stop by "s"
    global anim
    print(key)
    if key == b'\x1b':  # ESC
        sys.exit()
    if key == b"a":
    # Notice we are making anim = 1
    # What does this mean? Look at the idle function
        anim = 1
    if key == b"s":
    # STOP the ball!
        anim = 0
    if key == b"q":
        sys.exit()

def main():
    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_RGB|GLUT_SINGLE)  # 改成glutInitDisplayMode(GLUT_RGB|GLUT_DOUBLE) 动画会更顺滑
    glutInitWindowPosition(100,100)
    glutInitWindowSize(width,height)
    glutCreateWindow("PyBounce")
    glutDisplayFunc(bounce)
    glutKeyboardFunc(keyboard)
    glutIdleFunc(idle)

    init()
    glutMainLoop()

main()
```


## Chapter 9 3D and 3D Animation 


```python
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
import sys

## import psyco
## psyco.full() 

## Set the width and height of the window
global width
global height
## Global variables for rotation angles
global xrot
global yrot
xrot = 0.0
yrot = 0.0
## the usual screen dimension variables and lighting
width = 600
height = 600
## Generic Lighting values and coordinates
global ambientLight
global diffuseLight
global specular
global specref 

ambientLight = (0.35, 0.35, 0.35, 1.0)
diffuseLight = ( 0.75, 0.75, 0.75, 0.7)
specular = (1.0, 1.0, 1.0, 1.0)
specref = (1.0, 1.0, 1.0, 1.0)
## Shape variables
global glutshape
global solid
## start with wireframe
solid = "w"
## start with a sphere
glutshape = 1 


def renderscene():
    global xrot
    global yrot

    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)

    # isolate the rotation by using glPushMatrix()
    # this keeps the whole scene from rotating!

    glPushMatrix()
    # rotate the GLUT object!
    glRotatef(xrot, 1.0, 0.0, 0.0)
    glRotatef(yrot, 0.0, 1.0, 0.0)

    # choose either wireframe (w) or solid (s) and which
    # GLUT shape you want to view

    if solid == "w":
        if glutshape == 1:
            glutWireSphere(1.0, 25, 25)
        elif glutshape == 2:
            glutWireCube(1.0)
        elif glutshape == 3:
            glutWireCone(0.3, 1.1, 20, 20)
        elif glutshape == 4:
            glutWireTorus(0.3, 1.0, 10, 25)
        elif glutshape == 5:
            glutWireDodecahedron()
        elif glutshape == 6:
            glutWireOctahedron()
        elif glutshape == 7:
            glutWireTetrahedron()
        elif glutshape == 8:
            glutWireIcosahedron()
        elif glutshape == 9:
            glutWireTeapot(1.0)
    elif solid == "s":
        if glutshape == 1:
            glutSolidSphere(1.0, 25, 25)
        elif glutshape == 2:
            glutSolidCube(1.0)
        elif glutshape == 3:
            glutSolidCone(0.3, 1.1, 20, 20)
        elif glutshape == 4:
            glutSolidTorus(0.3, 1.0, 10, 25)
        elif glutshape == 5:
            glutSolidDodecahedron()
        elif glutshape == 6:
            glutSolidOctahedron()
        elif glutshape == 7:
            glutSolidTetrahedron()
        elif glutshape == 8:
            glutSolidIcosahedron()
        elif glutshape == 9:
            glutSolidTeapot(1.0)
    # end the glPushMatrix() command by “popping” the rotation
    # matrix back into place for real-time animation
    glPopMatrix()
    # swap the screen buffers for smooth animation
    glutSwapBuffers()

def init():
    global width
    global height
    glClearColor(0.0, 0.0, 0.0, 1.0)

    # Enable depth testing
    glEnable(GL_DEPTH_TEST)

    glEnable(GL_LIGHTING)
    glLightfv(GL_LIGHT0, GL_AMBIENT, ambientLight)
    glLightfv(GL_LIGHT0, GL_DIFFUSE, diffuseLight)
    glLightfv(GL_LIGHT0, GL_SPECULAR, specular)
    glEnable(GL_LIGHT0)
    glEnable(GL_COLOR_MATERIAL)
    glColorMaterial(GL_FRONT, GL_AMBIENT_AND_DIFFUSE)
    glMaterialfv(GL_FRONT, GL_SPECULAR, specref)
    glMateriali(GL_FRONT, GL_SHININESS, 128)

    glColor3ub(230,100,100)


def specialkeys( key, x, y):
    global xrot
    global yrot

    if key == GLUT_KEY_UP:
        xrot -= 2.0
    if key == GLUT_KEY_DOWN:
        xrot += 2.0
    if key == GLUT_KEY_LEFT:
        yrot -= 2.0
    if key == GLUT_KEY_RIGHT:
        yrot += 2.0

    glutPostRedisplay()

def reshape( w, h):
    lightPos = (-50.0, 50.0, 100.0, 1.0)
    nRange = 2.0

    if h==0:
        h = 1

    glViewport(0, 0, w, h)

    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()

    # this section allows for window reshaping while
    # maintaining a “normal” GLUT shape
    if w <= h:
        glOrtho(-nRange, nRange, -nRange*h/w, nRange*h/w, -nRange, nRange)
    else:
        glOrtho(-nRange*w/h, nRange*w/h, -nRange, nRange, -nRange, nRange)
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()

    glLightfv(GL_LIGHT0, GL_POSITION, lightPos)


def keyboard(key, x, y):
    global glutshape, solid
    if key == chr(27) or key == "q":
        sys.exit()
    try:
        if int(key) < 10:
            glutshape = int(key)
    except:
        pass

    if key == "w" or key == "s":
        solid = key

    glutPostRedisplay()

def main():

    global width
    global height

    # Setup for double-buffered display and depth testing
    glutInitDisplayMode(GLUT_RGB|GLUT_DOUBLE|GLUT_DEPTH)
    glutInitWindowPosition(100,100)
    glutInitWindowSize(width,height)
    glutInit(sys.argv)
    glutCreateWindow("GLUT Shapes... Rotations")

    init()
    glutReshapeFunc(reshape)
    glutDisplayFunc(renderscene)
    glutKeyboardFunc(keyboard)
    glutSpecialFunc(specialkeys)
    glutMainLoop()
main()
```


参考:
http://new.math.uiuc.edu/public198/ipython/stanblank/PyOpenGL.pdf