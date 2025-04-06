import jwt from 'jsonwebtoken';
const JWT_SECRET = 'your_secret_key';
let users = []; // จัดเก็บข้อมูลผู้ใช้

import bcrypt from 'bcrypt';

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

const validatePassword = (password) => {
  return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);
}

export async function signup(ctx) {
  const { username, email, password } = ctx.request.body;
  if (!validateEmail(email)) {
    ctx.status = 400;
    ctx.body = { error: 'Invalid email format' };
    return;
  }
  if (!validatePassword(password)) {
    ctx.status = 400;
    ctx.body = { error: 'Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.' };
    return;
  }
  if (users.some(u => u.username === username)) {
    ctx.status = 409;
    ctx.body = { error: 'Username already exists' };
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, email, password: hashedPassword });
  ctx.body = { message: 'User created successfully' };
}

export async function login(ctx) {
  const { username, password } = ctx.request.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    ctx.status = 401;
    ctx.body = { error: 'Invalid username or password' };
    return;
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1D' });
  ctx.body = { token, user: { username: user.username, email: user.email } };
}