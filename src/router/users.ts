import { Router } from "express";
import { UserController } from "../controllers/users";
import { validator } from "../middlewares/auth";

const userRouter = Router();

userRouter.get("/", validator, UserController.getAll);
userRouter.get("/:username", validator, UserController.getByUsername);

userRouter.post("/login", UserController.login);

userRouter.delete("/logout", validator, UserController.logout);

export { userRouter };
