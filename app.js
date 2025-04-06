import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import cors from '@koa/cors';


const app = new Koa();

app.use(bodyParser());
app.use(cors()); // ต้องอยู่ก่อน router.use()
app.use(authRoutes.routes());
app.use(postRoutes.routes());

app.listen(8080, () => {
  console.log('🚀 Server running on http://localhost:8080');
});
