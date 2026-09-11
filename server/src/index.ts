import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

// The "postgresql-adjacent-16876" database connection is read from
// process.env.DATABASE_URL (see prisma/schema.prisma -> datasource db.url).
export const prisma = new PrismaClient();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// ---------------------------------------------------------------------------
// CORS — whitelist the Heroku app domain and the custom production domain.
// ---------------------------------------------------------------------------
const allowedOrigins = [
  'https://mm-mysalesforcedemo-0b5460d1be06.herokuapp.com',
  'https://mm.mysalesforcedemo.com',
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser tools (curl, server-to-server) with no Origin header,
      // and same-origin requests where the browser omits Origin.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  })
);

app.use(express.json());

// ---------------------------------------------------------------------------
// API routes
// ---------------------------------------------------------------------------
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/users', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// ---------------------------------------------------------------------------
// Static client — serve the built React app from ./public in production.
// The client build is copied here by the "heroku-postbuild" script.
// ---------------------------------------------------------------------------
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// SPA fallback: send index.html for any non-API GET route.
app.get(/^(?!\/api).*/, (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// ---------------------------------------------------------------------------
// Error handler
// ---------------------------------------------------------------------------
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  const status = err.message?.includes('CORS') ? 403 : 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
