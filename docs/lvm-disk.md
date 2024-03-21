---
id: lvm-disk
title: Chia LVM
hide_title: false
hide_table_of_contents: false
sidebar_label: Chia LVM
sidebar_position: 1
description: Hướng dẫn chia LVM đơn giản.
keywords:
  - linux
  - linux tips
  - linux tips tricks
  - opensource
  - quản trị linux
  - gparted
  - lvm
  - disk
---
#Hướng dẫn chia LVM
## Tăng ổ đĩa rescan để nhận
```
echo 1>/sys/class/block/sda/device/rescan
```
## Chia ổ đĩa

### Bước 1: Kiểm tra thông tin ổ cứng

Sử dụng lệnh `lsblk` để kiểm tra thông tin về các ổ cứng và phân vùng:

`lsblk` 

### Bước 2: Thay đổi kích thước phân vùng

Sử dụng `growpart` để thay đổi kích thước của phân vùng. Trong ví dụ này, chúng ta mở rộng phân vùng trên `/dev/sdb`:

`sudo growpart /dev/sdb 1` 

### Bước 3: Cập nhật Physical Volume (PV)

Chạy `pvresize` để cập nhật Physical Volume:

`sudo pvresize /dev/sdb1` 

### Bước 4: Kiểm tra dung lượng Volume Group (VG)

Kiểm tra dung lượng được cấu hình cho Volume Group (VG):

`sudo vgs` 


### Bước 5: Thay đổi Logical Volume (LV)
Xem đường dẫn lvm
`df -Th`

Thực hiện thay đổi kích thước Logical Volume (LV). Sử dụng `lvextend` và tăng 100% dung lượng trống:

`sudo lvextend -l +100%FREE /dev/mapper/vg_minio_storage-vol_minio` 

### Bước 6: Cập nhật hệ thống tệp

Cập nhật hệ thống tệp để thực hiện thay đổi kích thước. Sử dụng `resize2fs` nếu bạn đang sử dụng hệ thống tệp ext4:

`sudo resize2fs /dev/mapper/vg_minio_storage-vol_minio` 

Hoặc nếu bạn đang sử dụng hệ thống tệp xfs, sử dụng `xfs_growfs`:

`sudo xfs_growfs /`