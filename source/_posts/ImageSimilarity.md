---
title: ImageSimilarity
toc: true
date: 2021-01-20 22:03:54
---

# 传统方法

```python
from skimage.measure import compare_ssim as ssim 
s = ssim(img1,img2, multichannel = True)  
#Set multichannel False if black and white image. 
```

参考:
https://www.quora.com/What-is-the-best-method-to-measure-similarity-between-two-images-using-OpenCV
https://towardsdatascience.com/measuring-similarity-in-two-images-using-python-b72233eb53c6

# 深度学习方法 faceencoder
参考FaceEncoding.md



https://medium.com/@ageitgey/machine-learning-is-fun-part-4-modern-face-recognition-with-deep-learning-c3cffc121d78