---
sidebar_position: 3
---

# Tạo Bài Đăng Blog

Docusaurus tạo **một trang cho mỗi bài đăng blog**, nhưng cũng có **một trang chỉ mục blog**, **hệ thống thẻ**, **nguồn cấp dữ liệu RSS**...

## Tạo Bài Đăng Đầu Tiên Của Bạn

Tạo một tệp tại `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: loi-chao
title: Lời Chào!
authors:
  - name: Joel Marcey
    title: Đồng sáng lập Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Người duy trì Docusaurus
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [loi-chao]
---

Xin chúc mừng, bạn đã tạo bài đăng đầu tiên của mình!

Cảm thấy tự do để chơi xung quanh và chỉnh sửa bài đăng này nhiều như bạn muốn.
```

Bài đăng blog mới giờ đây có sẵn tại [http://localhost:3000/blog/loi-chao](http://localhost:3000/blog/loi-chao).
