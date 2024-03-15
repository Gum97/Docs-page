---
sidebar_position: 2
---

# Tạo một Tài liệu

Tài liệu là **nhóm các trang** được kết nối thông qua:

- một **thanh bên**
- **điều hướng trước/sau**
- **phiên bản**

## Tạo Tài liệu Đầu tiên của Bạn

Tạo một tệp Markdown tại `docs/hello.md`:

```md title="docs/hello.md"
# Xin chào

Đây là **tài liệu Docusaurus đầu tiên** của tôi!
```

Một tài liệu mới giờ đây có sẵn tại [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Cấu hình Thanh bên

Docusaurus tự động **tạo một thanh bên** từ thư mục `docs`.

Thêm metadata để tùy chỉnh nhãn và vị trí của thanh bên:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Xin chào!'
sidebar_position: 3
---

# Xin chào

Đây là **tài liệu Docusaurus đầu tiên** của tôi!
```

Cũng có thể tạo thanh bên của bạn một cách rõ ràng trong `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Hướng dẫn',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
