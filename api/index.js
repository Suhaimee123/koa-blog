// api/index.js (หรือจะตั้งเป็น `koa.js` ก็ได้ แต่ต้อง map ใน vercel.json)
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import authRoutes from '../routes/authRoutes.js';
import postRoutes from '../routes/postRoutes.js';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(authRoutes.routes());
app.use(postRoutes.routes());

// ❌ อย่าใช้ app.listen()
// ✅ ต้อง export callback สำหรับ Vercel
export default app.callback();
