import { registerNewUser, loginUser } from "../services/user.js";

const registerCtrl = async (req, res) => {
  const responseUser = await registerNewUser(req.body);
  res.send(responseUser);
};

const loginCtrl = async (req, res) => {
  const { email, password } = req.body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { loginCtrl, registerCtrl };
