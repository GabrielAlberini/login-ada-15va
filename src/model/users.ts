import users from "../database/users.json";
import { randomUUID } from "node:crypto";
import { writeFile } from "jsonfile";

abstract class UserModel {
  static getAll = () => {
    return users;
  };

  static getByUsername = (username: string) => {
    const user = users.find((u) => u.username === username);
    if (!user) return 404;
    return user;
  };

  static login = (objUser: any) => {
    const { username, password } = objUser;

    const user = users.find((u) => u.username === username);

    if (!user) return 404;

    if (user.password !== password) return 400;

    const token = randomUUID();

    user.token = token;

    writeFile("./src/database/users.json", users);

    return { message: "Logged User", token: token };
  };

  static logout = (username: any) => {
    const user = users.find((u) => u.username === username);

    if (!user) return 404;

    user.token = "";

    writeFile("./src/database/users.json", users);

    return { message: "Log out User" };
  };
}

export { UserModel };
