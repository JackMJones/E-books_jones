export const PORT = process.env.PORT || 5001;
export const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore';
export const ALLOWED_ADDRESS = "http://localhost:5173";
export const tokenExpiration = '12h';