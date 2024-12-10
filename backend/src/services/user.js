import UserModel from "../models/user.js";
import { encrypt, verified } from "../utils/bcrypt.handle.js";
import { generateToken } from "../utils/jwt.handle.js";


export const registerNewUser = async ({ name, email, password, description }) => {
  const userExists = await UserModel.findOne({ email });
  if (userExists) return "ALREADY_USER";

 
  const hashedPassword = await encrypt(password);

 
  const newUser = await UserModel.create({
    name,
    email,
    password: hashedPassword,
    description: description || "Soy la descripcion",
  });

  return newUser;
};

export const loginUser = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "NOT_FOUND_USER";


  const isPasswordCorrect = await verified(password, user.password);
  if (!isPasswordCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(user.id);

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      description: user.description,
    },
  };
};
