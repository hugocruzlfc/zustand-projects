import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    jwt.verify(token, "secret", (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default requireAuth;
