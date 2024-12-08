import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

export const generateToken = (id) => {
  const token = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return token;
};

export const verifyToken = (token) => {
  const isOk = verify(token, JWT_SECRET);
  return isOk;
};