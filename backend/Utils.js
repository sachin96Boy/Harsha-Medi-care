import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign({
    _id: user._id,
    username: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
};
