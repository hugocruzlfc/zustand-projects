import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response) => {
  // req.body = {email: 'asad@asad', password: 'ehfiowehehe2123'}
  //validation: express-validator, joi, zod
  //store in db
  //generate token

  const token = jwt.sign(
    {
      test: "test",
    },
    "secret",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  return res.json({ token });
};

export const meHandler = (req: Request, res: Response) => {
  return res.json({
    me: req.user,
    message: "You are authorized",
  });
};
