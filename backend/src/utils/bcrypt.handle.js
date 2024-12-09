import pkg from 'bcryptjs';
const { hash,compare } = pkg;

export const encrypt = async (pass) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

export const verified = async (pass, passHash) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};
