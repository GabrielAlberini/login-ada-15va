import { Request, Response } from "express";
import { UserModel } from "../model/users";

abstract class UserController {
  static getAll = (req: Request, res: Response) => {
    const users = UserModel.getAll();
    res.json(users);
  };

  static getByUsername = (req: Request, res: Response) => {
    const { username } = req.params;
    const user = UserModel.getByUsername(username);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  };

  static login = (req: Request, res: Response) => {
    const { username, password } = req.body;
    const response = UserModel.login({ username, password });

    if (response === 404)
      return res.status(404).json({ error: "Not found user" });
    if (response === 400) return res.status(400).json({ error: "Bad request" });

    res.json(response);
  };

  static logout = (req: Request, res: Response) => {
    const { username } = req.body;
    const response = UserModel.logout(username);

    if (response === 404)
      return res.status(404).json({ error: "Not found user" });

    res.json(response);
  };
}

export { UserController };
