import bcrypt from 'bcrypt';

export async function hashPassword(password) {
  const saltRounds = 10; 
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}