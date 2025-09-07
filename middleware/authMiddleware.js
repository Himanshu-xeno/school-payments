import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  // Expect token in header → Authorization: Bearer <token>
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // get token

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded.id; // attach user id to req object
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
