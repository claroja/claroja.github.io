# UEFI和BIOS

## UEFI和BIOS的概念


UEFI(Unified Extensible Firmware Interface,  i.e. UEFI BIOS), UEFI的启动顺序是:
1. UEFI
2. GPT(EFI Boot Loader)
3. Kernel
4. Operating System

BIOS(Basic Input-Output System, i.e. Legacy BIOS or traditional BIOS), 
BIOS的启动顺序是:
1. BIOS
2. MBR(Master Boot Record)
3. Boot Loader
4. Kernel
5. Operating System


UEFI将所有的启动信息都保存在`.efi`文件中, 并放在EFI专有的系统分区`ESP`. `ESP`中还包含了引导加载程序(boot loader programs). 正是因为有单独的分区, 所以EFI才会有更快的引导速度.



## UEFI和BIOS的区别


--|BIOS|UEFI
--|--|--
Release Date|1975.|2002.
Operating Mode|16-bit.|32-bit/64-bit.
User Interface|Basic UI navigation using the keyboard.|Provides a user-friendly graphical UI with mouse support.
Partition Support|Up to four physical partitions.|Up to 128 physical partitions.
Partition Size Limit|2 TB.|18 exabytes (~18.8 million terabytes).
Performance|Performs best on older 16-bit systems.|Faster boot time and better performance compared to BIOS.
Storage|System initialization information stored in a dedicated chip on the motherboard.|System initialization information stored in a .efi file on the hard drive.
Security|Password protection.|Secure Boot feature.
Developed By|Intel|IBM
User Interface|Offers a graphical user interface (GUI), with icons and clickable buttons|Uses a text-based interface, which can feel like using a command line
Bootloader|Supports a bootloader|Doesn’t support a bootloader
Booting Speed|Boots up faster than BIOS due to the bootloader, its modular design, and its pre-boot environment.|Slower boot time than UEFI
Partitioning and Capacity|Supports the GPT partitioning scheme, which allows for larger disk sizes and more partitions|Uses the MBR partitioning scheme, and has a limited number of partitions
Security|Offers better security features, such as support for cryptographic authentication|Less secure since it lacks support for such features as cryptographic authentication
Driver Support|Great driver support|Limited driver support
Network Booting|Supports network booting through the PXE standard|Has no network booting support
Compatibility|16-bit systems|32-bit/64-bit systems
Customization|Offers plenty of customization options|Not easily customizable


## UEFI 和 BIOS之间的转换
1. 确认磁盘的分区形式(Partition style)

    MBR + BIOS 和 GPT + UEFI是配对出现的, BIOS不能引导GPT, UEFI不能引导MBR. 具体操作:
    
    1. Win + R 输入`diskmgmt.msc`, 进入磁盘管理(Disk Management)
    2. 右键查看系统盘的属性(properties)
    3. 切换到卷(Volumes), 查看磁盘分区形式


2. MBR和GPT的相互转化

    如果想使用UEFI但是磁盘是MBR, 或者想使用BIOS但磁盘是GPT, 就需要进行MBR和GPT的转换, 这里推荐使用[MiniTool Partition Wizard](https://cdn2.minitool.com/?p=pw&e=pw-demo)工具.

    1. 点击`Bootable Media`
    2. 左侧边栏`Convert MBR Disk to GPT Disk `

3. 更改UEFI/BIOS引导模式

    1. 接通电源后连续点击F2(或者F1, F3, F10, F12, ESC, Delete)
    2. 进入`BIOS`界面后, 选择`Boot`栏
    3. 更改`UEFI/BIOS Boot Mode`为`Legacy`或`UEFI`
    4. 保存更改并重新启动

4. UEFI或BIOS的单模式设置
    1. 如果只想使用UEFI模式, 则可以删除 `bootmgr`文件
    2. 如果只想使用BIOS模式, 则可以删除`efi`文件



翻译:
- primary partitions(基础分区)
- motherboard firmware(母版固件)
- boot loader programs(启动加载程序)
- disk 磁盘
- partition 分区
- Disk Management 磁盘管理
- properties 属性
- Volumes 卷
- Partition style 磁盘分区形式

参考:
- [uefi-vs-bios](https://www.easeus.com/partition-manager-software/uefi-vs-bios.html)
- [uefi-vs-bios](https://www.partitionwizard.com/partitionmagic/uefi-vs-bios.html)
- [uefi-vs-bios](https://phoenixnap.com/kb/uefi-vs-bios)
- [uefi-vs-bios](https://history-computer.com/uefi-vs-bios/)
- [MBR与GPT](https://zhuanlan.zhihu.com/p/26098509)