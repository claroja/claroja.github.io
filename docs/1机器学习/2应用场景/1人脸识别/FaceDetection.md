# 离散_负二项分布


人脸检测是计算机视觉一个问题：如何在图片中定位人脸。
传统算法已经很好的解决了这个问题，比如Opencv中提供的Cascade Classifier算法与Dlib提供的HOG算法。在深度学习领域，最先进的算法是MTCNN(Multi-task Cascade Convolutional Neural Network)，Dlib也提供了深度学习的模型，不过速度很慢。


## opencv
### 传统方法
基于特征的（Feature-based）人脸检测算法是快速和有效的，在过去的几十年应用比较多。最成功的的算法就是[Rapid object detection using a boosted cascade of simple features](https://ieeexplore.ieee.org/document/990517)，在Opencv的(python库)[https://pypi.org/project/opencv-python/]中实现了[Cascading classifiers](https://en.wikipedia.org/wiki/Cascading_classifiers)。


安装opencv-python：
```python
pip install opencv-python
```

Opencv中的[CascadeClassifier class](https://docs.opencv.org/3.4.3/d1/de5/classcv_1_1CascadeClassifier.html)进行人脸检测。在进行人脸检测之前需要首先进行模型载入的初始化。模型可以到[OpenCV GitHub project](https://github.com/opencv/opencv/tree/master/data/haarcascades)下载。这里使用前脸(frontalaface)检测。
```python
import cv2 as cv
classifier = cv.CascadeClassifier('haarcascade_frontalface_default.xml')
```

检测输入图片中的人脸
```python
pixels = cv.imread('weihai.png')
bboxes = classifier.detectMultiScale(pixels)
print(bboxes)
```
`detectMultiScale`方法会返回一组人脸的盒型边界(bounding boxes), 每个盒子包含了人脸左下角的坐标(x,y), 以及人脸的宽度和高度(width,height). 我们可以使用opencv的`rectangle()`方法绘制出盒子边界.
参数`scaleFactor`该值越高能检测到的人脸越少, 默认为1.1
参数`minNeighbors`该值越搞能检测到的人脸越少, 默认为 3
一个调整的策略是先降低`scaleFactor`直到所有的人脸都被检测出来, 然后增加`minNeighbors`直到所有的FP(False Positive)人脸消失.



```python
def drawBB(bboxes, img):
    for bbox in bboxes:
        x0, y0, width, height = bbox
        x1, y1 = x0 + width, y0 + height
        cv.rectangle(img, (x0, y0), (x1, y1), (0, 0, 255), 1)
    return img
```

```python
img = drawBB(bboxes, pixels)
## show the image
cv.imshow('face detection', img)
## keep the window open until we press a key
cv.waitKey(0)
## close the window
cv.destroyAllWindows()
```




### 深度学习方法
目前最前沿的技术是[Joint Face Detection and Alignment Using Multitask Cascaded Convolutional Networks](https://arxiv.org/abs/1604.02878). 级联结构(cascade structure)神经网络包含三个部分:
1. Proposal Network or P-Net: 建议候选的人脸区域
2. Refine Network or R-Net: 过滤边界盒子
3. Output Network or O-Net: 输出人脸标志(facial landmarks)

当然在输入网络首先要进行图片的缩放(image pyramid).
[1.png](1.png)

之所以叫做多任务网络(multi-task network), 是因为每个模型对应了不同的任务:
1. P-Net -> 人脸分类(face classification)
2. R-Net -> 边界盒子退化(bounding box regression)
3. O-Net -> 人脸标志定位(facial landmark localization)

这三个模型不是直接相连, 而是前一个的输出, 作为后一个输入. 模型可以在[官方下载](https://github.com/kpzhang93/MTCNN_face_detection_alignment), 这里面就是论文里面用到的代码和模型. python中也有[实现](https://github.com/ipazc/mtcnn)

MTCNN返回的一个字典,包含:
'box': 人脸左下角的坐标(x,y), 以及宽和高, 既(x,y,width,height)
'confidence': 置信度
'keypoints': 人脸标志(landmark), 包含了:‘left_eye‘, ‘right_eye‘, ‘nose‘, ‘mouth_left‘, and ‘mouth_right‘


```python
import cv2 as cv

def drawBound(bboxes, img):
    for bbox in bboxes:
        x0, y0, width, height = bbox
        x1, y1 = x0 + width, y0 + height
        cv.rectangle(img, (x0, y0), (x1, y1), (0, 0, 255), 1)
    return img

from mtcnn.mtcnn import MTCNN
pixels = cv.imread('weihai.png')
detector = MTCNN()

faces = detector.detect_faces(pixels)
bboxes = [x["box"] for x in faces]
img = drawBound(bboxes, pixels)

cv.imshow('face detection', pixels)
cv.waitKey(0)
cv.destroyAllWindows()
```


## Dlib
### 传统方法HOG
```python
import dlib
import cv2 as cv

image = cv.imread('weihai.png')
## Create a HOG face detector using the built-in dlib class
face_detector = dlib.get_frontal_face_detector()

## The result will be the bounding boxes of the faces in our image.
detected_faces = face_detector(image, 1)

for face_rect in detected_faces:
    x0,y0,x1,y1 =  face_rect.left(), face_rect.top(), face_rect.right(), face_rect.bottom()
    cv.rectangle(image, (x0, y0), (x1, y1), (0, 0, 255), 1)

## show the image
cv.imshow('face detection', image)
## keep the window open until we press a key
cv.waitKey(0)
## close the window
cv.destroyAllWindows()
```

### 深度学习方法
```python
import dlib
import cv2 as cv

img = cv.imread('weihai.png')


## face_detector = dlib.get_frontal_face_detector()
## detected_faces = face_detector(img, 1)

## 参考http://dlib.net/cnn_face_detector.py.html
cnn_face_detector = dlib.cnn_face_detection_model_v1("mmod_human_face_detector.dat")
detected_faces = cnn_face_detector(img, 1)

for face_rect in detected_faces:
    face_rect = face_rect.rect
    x0,y0,x1,y1 = face_rect.left(), face_rect.top(), face_rect.right(), face_rect.bottom()
    cv.rectangle(img, (x0, y0), (x1, y1), (0, 0, 255), 1)

## show the image
cv.imshow('face detection', img)
## keep the window open until we press a key
cv.waitKey(0)
## close the window
cv.destroyAllWindows()

```



参考:
https://machinelearningmastery.com/how-to-perform-face-detection-with-classical-and-deep-learning-methods-in-python-with-keras/
https://medium.com/@ageitgey/machine-learning-is-fun-part-4-modern-face-recognition-with-deep-learning-c3cffc121d78

中英翻译对照：
人脸检测(face detection)
基于特征的(Feature-based)
边界盒子(bounding boxes)
级联结构(cascade structure)
人脸标志(facial landmarks)
多任务网络(multi-task network)