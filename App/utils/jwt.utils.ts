import { sign, SignOptions } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";

// interface PrivateKey {
//     key: string;
//     passphrase: string;
// }

export function generateToken(username: string, id: number) {
  const payload = {
    username: username,
    id: id,
  };

  const privateKey = {
    key: fs.readFileSync(path.join(__dirname, "../../../private.pem"), "utf-8"),
    passphrase: process.env.PASSPHRASE,
  };

  const signInOptions: SignOptions = {
    algorithm: "RS256",
    expiresIn: "1h",
  };

  return sign(payload, privateKey, signInOptions);
}
