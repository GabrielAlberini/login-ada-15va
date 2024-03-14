import { Request, Response, NextFunction } from "express";
import users from "../database/users.json";

const validator = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;

  const exists = users.find((u) => u.token === token);

  if (!exists) return res.json({ error: "Permissions are missing" });
  next();
};

export { validator };
