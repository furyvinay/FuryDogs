import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favouriteDogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "dogs"}]
});

export const UserModel = mongoose.model("users", UserSchema);