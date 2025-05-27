# test





## what

Manual Testing(exploratory testing):
Did you check the features and experiment using them? That’s known as exploratory testing and is a form of manual
To have a complete set of manual tests, all you need to do is make a list of all the features your application has, the different types of input it can accept, and the expected results.

automated testing:
Automated testing is the execution of your test by a script instead of a human.



You have just seen two types of tests:

1. An integration test checks that components in your application operate with each other.

2. A unit test checks a small component in your application.


For example, here’s how you check that the `sum()` of the numbers (1, 2, 3) equals 6:
```python
assert sum([1, 2, 3]) == 6, "Should be 6"
```
This will not output anything on the REPL because the values are correct.

```python
assert sum([1, 1, 1]) == 6, "Should be 6"
## Traceback (most recent call last):
##   File "<stdin>", line 1, in <module>
## AssertionError: Should be 6
```

Instead of testing on the REPL, you’ll want to put this into a new Python file called test_sum.py and execute it again:
```python
def test_sum():
    assert sum([1, 2, 3]) == 6, "Should be 6"

if __name__ == "__main__":
    test_sum()
    print("Everything passed")
```
Now you have written a `test case`, an assertion, and an entry point (the command line). 

Writing tests in this way is okay for a simple check, but what if more than one fails? This is where `test runners` come in. 



## test runners

```python
## test_file.py
## Our code to be tested
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
 
    def get_area(self):
        return self.width * self.height
 
    def set_width(self, width):
        self.width = width
 
    def set_height(self, height):
        self.height = height
 
## The test function to be executed by PyTest
def test_normal_case():
    rectangle = Rectangle(2, 3)
    assert rectangle.get_area() == 6, "incorrect area"
```
the we can run:
```sh
python -m pytest test_file.py
```
`PyTest’s` test discovery procedure will be able to find your tests functions with names prefixed with `test`. And some IDE will provide run button at the line of `test` function.

refs:
https://realpython.com/python-testing/
https://machinelearningmastery.com/a-gentle-introduction-to-unit-testing-in-python/