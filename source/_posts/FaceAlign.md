---
title: FaceAlign
toc: true
date: 2021-01-20 22:03:54
---

# 1. 实现
```python
import numpy as np
import dlib
import cv2 as cv

# 1. 制作标准脸
TEMPLATE = np.float32(
    [[0.        , 0.17856914],
    [0.00412831, 0.31259227],
    [0.0196793 , 0.44770938],
    [0.04809872, 0.5800727 ],
    [0.10028344, 0.70349526],
    [0.17999782, 0.81208664],
    [0.27627307, 0.90467805],
    [0.38463727, 0.98006284],
    [0.5073561 , 1.        ],
    [0.63014114, 0.9761118 ],
    [0.7386777 , 0.89921385],
    [0.8354747 , 0.80513287],
    [0.91434467, 0.6945623 ],
    [0.9643504 , 0.56826204],
    [0.9887058 , 0.432444  ],
    [0.9993123 , 0.29529294],
    [1.        , 0.15909716],
    [0.09485531, 0.07603313],
    [0.15534875, 0.02492465],
    [0.2377474 , 0.01139098],
    [0.32313403, 0.02415778],
    [0.4036699 , 0.05780071],
    [0.56864655, 0.0521157 ],
    [0.65128165, 0.01543965],
    [0.7379608 , 0.        ],
    [0.82290924, 0.01191543],
    [0.88739765, 0.06025707],
    [0.48893312, 0.15513189],
    [0.48991537, 0.24343018],
    [0.49092147, 0.33176517],
    [0.49209353, 0.422107  ],
    [0.397399  , 0.48004663],
    [0.4442625 , 0.49906778],
    [0.4949509 , 0.5144414 ],
    [0.54558265, 0.49682876],
    [0.59175086, 0.47722608],
    [0.194157  , 0.16926692],
    [0.24600308, 0.13693026],
    [0.31000495, 0.13735634],
    [0.36378494, 0.17794687],
    [0.3063696 , 0.19082251],
    [0.24390514, 0.19138186],
    [0.6189632 , 0.17277813],
    [0.67249435, 0.12988105],
    [0.7362857 , 0.1279085 ],
    [0.7888591 , 0.15817115],
    [0.74115133, 0.18155812],
    [0.6791372 , 0.18370388],
    [0.30711025, 0.6418497 ],
    [0.3759703 , 0.6109595 ],
    [0.44670257, 0.5970508 ],
    [0.49721557, 0.60872644],
    [0.5500201 , 0.5954327 ],
    [0.6233016 , 0.6070911 ],
    [0.69541407, 0.6341429 ],
    [0.628068  , 0.70906836],
    [0.5573954 , 0.7434471 ],
    [0.50020397, 0.7505844 ],
    [0.44528747, 0.74580276],
    [0.37508208, 0.7145425 ],
    [0.3372878 , 0.64616466],
    [0.44701463, 0.64064664],
    [0.49795204, 0.6449633 ],
    [0.5513943 , 0.6385937 ],
    [0.6650228 , 0.63955915],
    [0.5530556 , 0.67647934],
    [0.4986481 , 0.68417645],
    [0.44657204, 0.6786047 ]])

# 2. 放射变换时用到的点(仿射变换需要用到3个点)
INNER_EYES_AND_BOTTOM_LIP = [39, 42, 57]
OUTER_EYES_AND_NOSE = [36, 45, 33]
AffinePoint = OUTER_EYES_AND_NOSE

# 3. 制作并展示标准脸(放射变换三个点黑色, 其他红色)
image_template = np.zeros((500,500,3), np.uint8)
image_template[:] = [255, 255, 255]
for i, point in enumerate(TEMPLATE):
    if i in AffinePoint:
        cv.circle(image_template, (int(point[0] * 500), int(point[1] * 500)), 4, (0, 0, 0), -1)
    else:
        cv.circle(image_template, (int(point[0]*500),int(point[1]*500)), 2, (0, 0, 255), -1)
cv.imshow('image_template', image_template)

# 4.1 读取图片, 并展示
image = cv.imread('waitou.png')
image2 = image.copy()
cv.imshow('image', image)

# 4.2 定位人脸
face_detector = dlib.get_frontal_face_detector()
face_locations = face_detector(image, 1)
# 4.3 获取定人人脸标志
predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
landmark = predictor(image, face_locations[0])
points = [(p.x, p.y) for p in landmark.parts()]
for i, point in enumerate(points):
    if i in AffinePoint:
        cv.circle(image, (int(point[0]), int(point[1])), 4, (0, 0, 0), -1)
    else:
        cv.circle(image, (int(point[0]),int(point[1])), 2, (0, 0, 255), -1)
cv.imshow('image_landmark', image)

# 5. 制作并展示当前图片的脸
image_template2 = np.zeros((500,500,3), np.uint8)
image_template2[:] = [255, 255, 255]
for i, point in enumerate(points):
    if i in AffinePoint:
        cv.circle(image_template2, (int(point[0]), int(point[1])), 4, (0, 0, 0), -1)
    else:
        cv.circle(image_template2, (int(point[0]),int(point[1])), 2, (0, 0, 255), -1)
cv.imshow('image_template2', image_template2)

# 6. 展示放射变换之后的脸
npLandmarks = np.float32(points)
npLandmarkIndices = np.array(AffinePoint)
imgDim = 500
H = cv.getAffineTransform(npLandmarks[npLandmarkIndices],
                           imgDim * TEMPLATE[npLandmarkIndices])
thumbnail = cv.warpAffine(image2, H, (imgDim, imgDim))
cv.imshow('thumbnail_source', thumbnail)

# 7. 展示放射变换之后带标志的脸
for i, point in enumerate(TEMPLATE):
    if i in AffinePoint:
        cv.circle(thumbnail, (int(point[0] * 500), int(point[1] * 500)), 4, (0, 0, 0), -1)
    else:
        cv.circle(thumbnail, (int(point[0]*500),int(point[1]*500)), 2, (0, 0, 255), -1)
cv.imshow('thumbnail', thumbnail)
cv.waitKey(0)
cv.destroyAllWindows()
```

# 2. 直接调用 face_aligner.align
```python
import dlib
import cv2 as cv
import openface

image = cv.imread('zhourui.png')
face_detector = dlib.get_frontal_face_detector()
detected_faces = face_detector(image, 1)


face_pose_predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
face_aligner = openface.AlignDlib("shape_predictor_68_face_landmarks.dat")

for face_rect in detected_faces:
    x0,y0,x1,y1 =  face_rect.left(), face_rect.top(), face_rect.right(), face_rect.bottom()
    cv.rectangle(image, (x0, y0), (x1, y1), (255, 255, 255), 1)
    landmarks = face_pose_predictor(image, face_rect)
    for pt in landmarks.parts():
        pt_pos = (pt.x, pt.y)
        cv.circle(image, pt_pos, 2, (0, 0, 255), -1)  # img, center, radius, color, thickness
        alignedFace = face_aligner.align(534, image, face_rect, landmarkIndices=openface.AlignDlib.OUTER_EYES_AND_NOSE)

# show the image
a = cv.imshow('face detection', image)
b = cv.imshow('face detection2', alignedFace)
# keep the window open until we press a key
cv.waitKey(0)
# close the window
cv.destroyAllWindows()
```


## 2.1 标准化脸制作
```python
import numpy as np
import cv2 as cv
# 1. 初始化一张标准landmark脸
TEMPLATE = np.float32([
    (0.0792396913815, 0.339223741112), (0.0829219487236, 0.456955367943),
    (0.0967927109165, 0.575648016728), (0.122141515615, 0.691921601066),
    (0.168687863544, 0.800341263616), (0.239789390707, 0.895732504778),
    (0.325662452515, 0.977068762493), (0.422318282013, 1.04329000149),
    (0.531777802068, 1.06080371126), (0.641296298053, 1.03981924107),
    (0.738105872266, 0.972268833998), (0.824444363295, 0.889624082279),
    (0.894792677532, 0.792494155836), (0.939395486253, 0.681546643421),
    (0.96111933829, 0.562238253072), (0.970579841181, 0.441758925744),
    (0.971193274221, 0.322118743967), (0.163846223133, 0.249151738053),
    (0.21780354657, 0.204255863861), (0.291299351124, 0.192367318323),
    (0.367460241458, 0.203582210627), (0.4392945113, 0.233135599851),
    (0.586445962425, 0.228141644834), (0.660152671635, 0.195923841854),
    (0.737466449096, 0.182360984545), (0.813236546239, 0.192828009114),
    (0.8707571886, 0.235293377042), (0.51534533827, 0.31863546193),
    (0.516221448289, 0.396200446263), (0.517118861835, 0.473797687758),
    (0.51816430343, 0.553157797772), (0.433701156035, 0.604054457668),
    (0.475501237769, 0.62076344024), (0.520712933176, 0.634268222208),
    (0.565874114041, 0.618796581487), (0.607054002672, 0.60157671656),
    (0.252418718401, 0.331052263829), (0.298663015648, 0.302646354002),
    (0.355749724218, 0.303020650651), (0.403718978315, 0.33867711083),
    (0.352507175597, 0.349987615384), (0.296791759886, 0.350478978225),
    (0.631326076346, 0.334136672344), (0.679073381078, 0.29645404267),
    (0.73597236153, 0.294721285802), (0.782865376271, 0.321305281656),
    (0.740312274764, 0.341849376713), (0.68499850091, 0.343734332172),
    (0.353167761422, 0.746189164237), (0.414587777921, 0.719053835073),
    (0.477677654595, 0.706835892494), (0.522732900812, 0.717092275768),
    (0.569832064287, 0.705414478982), (0.635195811927, 0.71565572516),
    (0.69951672331, 0.739419187253), (0.639447159575, 0.805236879972),
    (0.576410514055, 0.835436670169), (0.525398405766, 0.841706377792),
    (0.47641545769, 0.837505914975), (0.41379548902, 0.810045601727),
    (0.380084785646, 0.749979603086), (0.477955996282, 0.74513234612),
    (0.523389793327, 0.748924302636), (0.571057789237, 0.74332894691),
    (0.672409137852, 0.744177032192), (0.572539621444, 0.776609286626),
    (0.5240106503, 0.783370783245), (0.477561227414, 0.778476346951)])

TPL_MIN, TPL_MAX = np.min(TEMPLATE, axis=0), np.max(TEMPLATE, axis=0)
#2. 进行标准化
MINMAX_TEMPLATE = (TEMPLATE - TPL_MIN) / (TPL_MAX - TPL_MIN)
# 3. 画出这些点
image = np.zeros((500,500,3), np.uint8)
image[:] = [255, 255, 255]
for point in MINMAX_TEMPLATE:
    cv.circle(image, (int(point[0]*500),int(point[1]*500)), 2, (0, 0, 255), -1)
# show the image
cv.imshow('face detection', image)
# keep the window open until we press a key
cv.waitKey(0)
# close the window
cv.destroyAllWindows()
```






https://openface-api.readthedocs.io/en/latest/openface.html
https://www.pyimagesearch.com/2017/04/03/facial-landmarks-dlib-opencv-python/
https://blog.csdn.net/qq_39507748/article/details/104448700



参考:
https://gist.github.com/ageitgey/82d0ea0fdb56dc93cb9b716e7ceb364b
https://www.dazhuanlan.com/tsing_95/topics/1664887
https://medium.com/@ageitgey/machine-learning-is-fun-part-4-modern-face-recognition-with-deep-learning-c3cffc121d78