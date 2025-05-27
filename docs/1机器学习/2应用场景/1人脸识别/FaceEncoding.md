# orient



```python
import dlib
import cv2 as cv

## 1. 读取图片
face_image = cv.imread('zhourui.png')

## 2. 人脸检测
face_detector = dlib.get_frontal_face_detector()
face_locations = face_detector(face_image, 1)

## 3. 计算landmarks
pose_predictor_68_point = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
landmarks = pose_predictor_68_point(face_image, face_locations[0])


## 4. 人脸编码
face_encoder = dlib.face_recognition_model_v1("dlib_face_recognition_resnet_model_v1.dat")
res = face_encoder.compute_face_descriptor(face_image, landmarks, 1)
res
```



http://dlib.net/files/
http://dlib.net/python/index.html