import { sign, SignOptions } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";
import { resolve } from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: resolve(__dirname, "../../../.env") });

// interface PrivateKey {
//   key: string;
//   passphrase: undefined | string;
// }

export function generateToken(username: string, id: number) {
  const payload = {
    username: username,
    id: id,
  };

  const privateKey = {
    key: fs.readFileSync(path.join(__dirname, "../../../private.pem"), "utf8"),
    passphrase: process.env.PASSPHRASE,
  };

  const signInOptions: SignOptions = {
    algorithm: "RS256",
    expiresIn: "1h",
  };

  return sign(payload, privateKey, signInOptions);
}
