import * as jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key'; // Replace with a secure secret key

export function generateToken(user) {
  console.log(user);
  const payload = {
    userId: user._id, // Assuming user._id is the unique identifier
    email: user.email,
    // Add other user data if needed
  };

  const options = { expiresIn: '1h' }; // Set token expiration time

  const token = jwt.sign(payload, secretKey, options);
  return token;
}
