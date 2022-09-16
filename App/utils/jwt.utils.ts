import { sign, SignOptions } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

export function generateToken() {
  const payload = {};

  const privateKey = fs.readFileSync(
    path.join(__dirname, "../../../private.key")
  );

  const signInOptions: SignOptions = {
    algorithm: "RS256",
    expiresIn: "1h",
  };

  return sign(payload, privateKey, signInOptions);
}
