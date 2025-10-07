# zookeeper_shell



## 新增节点


1. 创建持久化节点并写入数据：`create /hadoop "123456"`
2. 创建持久化有序节点，此时创建的节点名为指定节点名 + 自增序号: `create -s /a "aaa"`

    ```sh
    create -s /a "aaa" # Created /a0000000000
    create -s /b "bbb" # Created /b0000000001
    create -s /c "ccc" # Created /c0000000002
    ```

3. 创建临时节点，临时节点会在会话过期后被删除：`create -e /tmp "tmp"`
4. 创建临时有序节点，临时节点会在会话过期后被删除：

    ```sh
    create -s -e /aa 'aaa' # Created /aa0000000004
    create -s -e /bb 'bbb' # Created /bb0000000005
    create -s -e /cc 'ccc' # Created /cc0000000006
    ```

## 更新节点

1. 更新节点: `set /hadoop "345"`
2. 更新节点, 乐观锁机制, 当你传入的数据版本号 (dataVersion) 和当前节点的数据版本号不符合时，zookeeper 会拒绝本次修改. 

    ```sh
    set /hadoop "3456" 1 # version No is not valid : /hadoop
    ```


## 删除节点

1. 删除节点: 

    ```sh
    delete /hadoop 0 # version No is not valid : /hadoop
    ```
2. 递归删除: 要想删除某个节点及其所有后代节点，可以使用递归删除，命令为`rmr path`

## 查看节点

1. 查看节点: `get path`


## 查看节点列表

1. 查看指定路径下所有节点: `ls /`




## 监听器


1. 监听节点内容

    使用 `get path [watch]` 注册的监听器能够在节点内容发生改变的时候，向客户端发出通知。需要注意的是 zookeeper 的触发器是一次性的 (One-time trigger)，即触发一次后就会立即失效。

    ```sh
    get /hadoop  watch
    set /hadoop 45678

    # WATCHER::WatchedEvent state:SyncConnected type:NodeDataChanged path:/hadoop  #节点值改变

    ```

2. 监听节点状态

    使用`stat path [watch]`注册的监听器能够在节点状态发生改变的时候，向客户端发出通知


    ```sh
    stat /hadoop watch
    set /hadoop 112233

    # WATCHER::WatchedEvent state:SyncConnected type:NodeDataChanged path:/hadoop  #节点值改变
    ```

3. 监听树结构

    使用`ls path [watch]`或`ls2 path [watch]`注册的监听器能够监听该节点下所有子节点的增加和删除操作。


    ```sh

    ls /hadoop watch
    create  /hadoop/yarn "aaa"

    # WATCHER::WatchedEvent state:SyncConnected type:NodeChildrenChanged path:/hadoop
    ```




