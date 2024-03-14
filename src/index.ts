import express from "express";
import { userRouter } from "./router/users";

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    version: "1.0.0",
    author: "gabrielalberini",
  });
});

app.use("/api/users/", userRouter);

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
