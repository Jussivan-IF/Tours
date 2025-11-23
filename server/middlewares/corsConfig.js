import cors from 'cors';

const corsOptions = {
  origin: '*', // Permite todas as origens (ideal para desenvolvimento mobile)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
