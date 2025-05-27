# DesiredCapabilities


```python
import dlib
import cv2 as cv
def landmark_as_tuples(landmark):
    points = [(p.x, p.y) for p in landmark.parts()]
    return {
        "all": points,
        "chin": points[0:17],
        "left_eyebrow": points[17:22],
        "right_eyebrow": points[22:27],
        "nose_bridge": points[27:31],
        "nose_tip": points[31:36],
        "left_eye": points[36:42],
        "right_eye": points[42:48],
        "top_lip": points[48:55] + [points[64]] + [points[63]] + [points[62]] + [points[61]] + [points[60]],
        "bottom_lip": points[54:60] + [points[48]] + [points[60]] + [points[67]] + [points[66]] + [points[65]] + [
            points[64]]
    }

def drawLM(landmark_tuple, img):
    for point in landmark_tuple:
        cv.circle(img, point, 2, (0, 0, 255), -1)


## 1. 读取图片
image = cv.imread('zhourui.png')

## 2. 定位人脸
face_detector = dlib.get_frontal_face_detector()
face_locations = face_detector(image, 1)

## 3. 定人人脸标志
face_pose_predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")

for face_location in face_locations:
    x0, y0, x1, y1 = face_location.left(), face_location.top(), face_location.right(), face_location.bottom()
    cv.rectangle(image, (x0, y0), (x1, y1), (255, 255, 255), 1)
    landmark = face_pose_predictor(image, face_location)
    landmark_tuple = landmark_as_tuples(landmark)
    drawLM(landmark_tuple["bottom_lip"], image)

## show the image
cv.imshow('face detection', image)
## keep the window open until we press a key
cv.waitKey(0)
## close the window
cv.destroyAllWindows()

```


```python
{
	IdxRange jaw;       // [0 , 16]
	IdxRange rightBrow; // [17, 21]
	IdxRange leftBrow;  // [22, 26]
	IdxRange nose;      // [27, 35]
	IdxRange rightEye;  // [36, 41]
	IdxRange leftEye;   // [42, 47]
	IdxRange mouth;     // [48, 59]
	IdxRange mouth2;    // [60, 67]
}
```


参考:
https://www.cnblogs.com/as3asddd/p/7257820.html
https://ibug.doc.ic.ac.uk/resources/facial-point-annotations/