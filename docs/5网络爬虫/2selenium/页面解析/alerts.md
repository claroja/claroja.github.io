# alerts


## Alerts
仅有一个按键的alert
```python
## Click the link to activate the alert
driver.find_element(By.LINK_TEXT, "See an example alert").click()

## Wait for the alert to be displayed and store it in a variable
alert = wait.until(expected_conditions.alert_is_present())

## Store the alert text in a variable
text = alert.text

## Press the OK button
alert.accept()
  
```
## Confirm
有确认和取消两个按键的alert
```python
## Click the link to activate the alert
driver.find_element(By.LINK_TEXT, "See a sample confirm").click()

## Wait for the alert to be displayed
wait.until(expected_conditions.alert_is_present())

## Store the alert in a variable for reuse
alert = driver.switch_to.alert

## Store the alert text in a variable
text = alert.text

## Press the Cancel button
alert.dismiss()
```
## Prompt
可以输入文本的alert

```python
## Click the link to activate the alert
driver.find_element(By.LINK_TEXT, "See a sample prompt").click()

## Wait for the alert to be displayed
wait.until(expected_conditions.alert_is_present())

## Store the alert in a variable for reuse
alert = Alert(driver)

## Type your message
alert.send_keys("Selenium")

## Press the OK button
alert.accept()
  
```