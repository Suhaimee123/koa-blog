// Import necessary libraries
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_secret_key';


export function jwtMiddleware(ctx, next) {
    try {
        const token = ctx.headers.authorization?.split(' ')[1];
        if (!token) {
            ctx.status = 401;
            ctx.body = { error: 'No token provided' };
            return;
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        ctx.state.user = decoded; // ตรวจสอบให้แน่ใจว่าส่วนนี้ทำงานถูกต้อง
        return next();
    } catch (error) {
        ctx.status = 401;
        ctx.body = { error: 'Unauthorized: Invalid token' };
    }
}