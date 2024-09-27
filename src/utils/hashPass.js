import bcrypt from 'bcrypt';

export async function hashPassword(password) {
  const saltRounds = 10; // Adjust the salt rounds as needed
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}