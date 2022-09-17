import { sign, SignOptions } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

export function generateToken(username: string, user_id: number) {
  const payload = {
    username: username,
    user_id: user_id,
  };

  const privateKey = fs.readFileSync(
    path.join(__dirname, "../../../private.key")
  );

  const signInOptions: SignOptions = {
    algorithm: "RS256",
    expiresIn: "1h",
  };

  return sign(payload, privateKey, signInOptions);
}
