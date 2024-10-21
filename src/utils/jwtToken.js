import * as jwt from "jsonwebtoken";

const secretKey = "your-secret-key";

export function generateToken(user) {
  console.log(user);
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const options = { expiresIn: "1h" };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}
