---
title: python___subclass__
toc: true
date: 2021-01-20 22:03:54
---

```python
class parent(object):
    pass
class A(parent):
    pass
class B(parent):
    pass
class C(parent):
    pass

print(parent.__subclasses__())  # [<class '__main__.A'>, <class '__main__.B'>, <class '__main__.C'>]
print([cls.__name__ for cls in parent.__subclasses__()])  # ['A', 'B', 'C']
```