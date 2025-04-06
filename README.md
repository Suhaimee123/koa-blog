# 📝 koa-blog

Back-End API สำหรับระบบ Blog ที่พัฒนาโดยใช้ [Koa.js](https://koajs.com/)

## ✨ Features

- 🧑‍💻 สมัคร / ล็อกอินผู้ใช้ (JWT Auth)
- ✍️ สร้าง / แก้ไข / ลบโพสต์
- 📖 ดูโพสต์ทั้งหมดได้แบบ Public
- 🔐 ควบคุมสิทธิ์การเข้าถึงด้วย JWT
- 🧠 Validation input ก่อนบันทึก
- 🌐 รองรับ CORS พร้อมใช้งานกับ Frontend (เช่น React)

---

## 🛠 Stack ที่ใช้

- [Koa.js](https://koajs.com/)
- `koa-router`, `koa-bodyparser`, `jsonwebtoken`, `bcrypt`, `@koa/cors`
- In-Memory Data (ไม่มีฐานข้อมูล)
- Vercel (Deploy แบบ Serverless)

---

## 🚀 วิธีใช้งาน (Local Dev)

### 1. ติดตั้ง dependency

```bash
npm install
```


### 2. เริ่มเซิร์ฟเวอร์
```bash
nodemon app
```

## เซิร์ฟเวอร์จะรันที่: http://localhost:8080

# 📦 Endpoints
- Method	Path	Auth	Description
- POST	/auth/signup	❌	สมัครสมาชิก
- POST	/auth/login	❌	ล็อกอิน รับ JWT
- GET	/posts	❌	ดูโพสต์ทั้งหมด
- POST	/posts	✅	สร้างโพสต์
- PUT	/posts/:id	✅	แก้ไขโพสต์
- DELETE	/posts/:id	✅	ลบโพสต์


### 📚 ตัวอย่าง Frontend
ใช้ร่วมกับ React หรือ Next.js ได้เลย
Frontend ตัวอย่าง: https://blog-frontend-gamma-lovat.vercel.app/
