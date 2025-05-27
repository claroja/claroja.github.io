
# keyboard

## 最佳实践



映射jkhl与方向键
```python
import keyboard
keyboard.remap_hotkey('alt+j', 'down')
keyboard.remap_hotkey('alt+k', 'up')
keyboard.remap_hotkey('alt+h', 'left')
keyboard.remap_hotkey('alt+l', 'right')
keyboard.wait()

```
```powershell
Start-Process -FilePath "python" -ArgumentList "./hotkey.py" -NoNewWindow
```


## 入门案例
```python
import keyboard
keyboard.press_and_release('shift+s, space')  # 按下并释放了组合键Shift+S，然后按下并释放了空格键。
keyboard.write('The quick brown fox jumps over the lazy dog.')  # 将字符串The quick brown fox jumps over the lazy dog.写入当前焦点的应用程序。相当于模拟了键盘的按键输入。
keyboard.add_hotkey('ctrl+shift+a', print, args=('triggered', 'hotkey'))  # 注册了一个热键Ctrl+Shift+A，当用户按下该组合键时，回调函数print将被调用，并将参数('triggered', 'hotkey')传递给该回调函数
keyboard.add_hotkey('page up, page down', lambda: keyboard.write('foobar'))  # 注册了一个热键Page Up, Page Down，当用户按下该组合键时，将调用一个匿名函数，该匿名函数会将字符串foobar写入当前焦点的应用程序。
keyboard.wait('esc')  # 阻塞程序，直到用户按下Esc键为止
recorded = keyboard.record(until='esc')  # 记录键盘事件，直到用户按下Esc键为止
keyboard.play(recorded, speed_factor=3)  # 录的键盘事件以三倍的速度回放
keyboard.add_abbreviation('@@', 'my.long.email@example.com')  # 注册了一个缩写，当用户输入@@并按下空格键时，会自动替换为my.long.email@example.com
keyboard.wait()  # 将程序无限阻塞，类似于while True的效果，直到用户终止程序
```



## API

### 模拟输出
1. `keyboard.send(hotkey, do_press=True, do_release=True)`: 发送操作系统的事件

    1. `hotkey`: 可以是`scan code (e.g. 57 for space)`, `single key (e.g. 'space')` or `multi-key, multi-step hotkey (e.g. 'alt+F4, enter')`
    2. `do_press`: if true then press events are sent. Defaults to True.
    3. `do_release`: if true then release events are sent. Defaults to True.

    ```python
    send(57)
    send('ctrl+alt+del')
    send('alt+F4, enter')
    ```
2. `keyboard.press(hotkey)`: 按下一个`hotkey`
3. `keyboard.release(hotkey)`: 释放一个`hotkey`
4. `keyboard.is_pressed(hotkey)`: `hotkey`是否被按下
5. `keyboard.write(text, delay=0, restore_state_after=True, exact=None)`: 模拟键盘输入


### 监听输入(钩子)

#### 键位监听(钩子)
1. `keyboard.hook(callback, suppress=False, on_remove=<lambda>)`: 在全局添加一个钩子, 任何键位按下或者抬起都会触发该函数. 该函数的参数是`KeyboardEvent`

    ```python
    def hook_func(event):
        print(event.to_json())
    keyboard.hook(hook_func)
    ```
2. `keyboard.on_press(callback, suppress=False)`: 按下键位, 触发钩子
3. `keyboard.on_release(callback, suppress=False)`: 抬起键位, 触发钩子
4. `keyboard.hook_key(key, callback, suppress=False)`: 为单独的键位抬起和按下, 设置钩子
5. `keyboard.on_press_key(key, callback, suppress=False)`: 
6. `keyboard.on_release_key(key, callback, suppress=False)`:
7. `keyboard.unhook(remove)`: 删除指定钩子, 参数是方法名或者`hook`对象
8. `keyboard.unhook_all()`: 删除所有钩子
9. `class keyboard.KeyboardEvent`
    1. `KeyboardEvent.device`
    2. `KeyboardEvent.event_type`
    3. `KeyboardEvent.is_keypad`
    4. `KeyboardEvent.modifiers`
    5. `KeyboardEvent.name`
    6. `KeyboardEvent.scan_code`
    7. `KeyboardEvent.time`
    8. `KeyboardEvent.to_json(self, ensure_ascii=False)`

#### 字符串监听
`keyboard.add_word_listener(word, callback, triggers=['space'], match_suffix=False, timeout=2)`: 监听字符串输入, 触发回调
`keyboard.remove_word_listener(word_or_handler)`: 删除字符串监听



### 快捷键
#### 热键
1. `keyboard.block_key(key)`: 禁用指定的键位
2. `keyboard.remap_key(src, dst)`: 重新映射键位
3. `keyboard.remap_hotkey(src, dst, suppress=True, trigger_on_release=False)`: `remap('alt+w', 'ctrl+up')`: 重新映射键位
4. `keyboard.add_hotkey(hotkey, callback, args=(), suppress=False, timeout=1, trigger_on_release=False)`: 添加热键

    ```python
    # 三种键位的输入方法
    add_hotkey(' ', print, args=['space was pressed'])
    add_hotkey(57, print, args=['space was pressed'])
    add_hotkey('Space', print, args=['space was pressed'])
    # 单个行为
    add_hotkey('ctrl+q', quit)
    # 多个行为
    add_hotkey('ctrl+alt+enter, space', some_callback)
    ```
5. `keyboard.remove_hotkey(hotkey_or_callback)`: 删除热键
6. `keyboard.unhook_all_hotkeys()`: 删除所有的hotkey, 包含`abbreviations`, `word listeners`, `recorders` and `waits`
7. `keyboard.get_hotkey_name(names=None)`: 获得键位名

    ```python
    get_hotkey_name(['+', 'left ctrl', 'shift'])
    # "ctrl+shift+plus"
    ```
#### 热串
`keyboard.add_abbreviation(source_text, replacement_text, match_suffix=False, timeout=2)`: 添加字符串缩写


### 阻塞

1. `keyboard.wait(hotkey=None, suppress=False, trigger_on_release=False)`: 阻塞, 直到指定键位按下
2. `keyboard.read_event(suppress=False)`: 阻塞, 直到有事件发生
3. `keyboard.read_key(suppress=False)`: 阻塞, 直到有键位按下
4. `keyboard.read_hotkey(suppress=True)`: 阻塞, 直到有热键按下


### 录制

`keyboard.get_typed_strings(events, allow_backspace=True)`: 获得输入的字符串
`keyboard.start_recording(recorded_events_queue=None)`: 开始录制
`keyboard.stop_recording()`: 结束录制
`keyboard.record(until='escape', suppress=False, trigger_on_release=False)`: 录制, 直到指定热键按下
`keyboard.play(events, speed_factor=1.0)`: 播放事件


### 基础信息
1. `keyboard.all_modifiers`: `{'alt', 'alt gr', 'ctrl', 'left alt', 'left ctrl', 'left shift', 'left windows', 'right alt', 'right ctrl', 'right shift', 'right windows', 'shift', 'windows'}`
2. `keyboard.sided_modifiers`: `{'alt', 'ctrl', 'shift', 'windows'}`
3. `keyboard.normalize_name(name)`: 标准化快捷键名称
4. `keyboard.parse_hotkey("alt+shift+a, alt+b, c")`: 
(((56, 57400), (42, 54), (30,)), ((56, 57400), (48, 57392)), ((46, 57390),))
((alt_codes, shift_codes, a_codes), (alt_codes, b_codes), (c_codes,))


### 其他

`keyboard.call_later(fn, args=(), delay=0.001)`: 新线程添加一个方法稍后调用
`keyboard.stash_state()`: 当前按下的所有`scan codes`
`keyboard.restore_state(scan_codes)`: 保存`scan codes`
`keyboard.restore_modifiers(scan_codes)`: 仅保存装饰按键





## 参考
- https://github.com/boppreh/keyboard
- https://blog.csdn.net/weixin_45081575/article/details/131170164
- https://blog.csdn.net/coco56/article/details/107847467