import { sign, SignOptions } from "jsonwebtoken";
import * as fs from "fs";
import * as path from "path";
import { resolve } from "path";
import { passphrase } from "../configuration/config";

interface PrivateKey {
  key: string;
  passphrase: string;
}

export function generateToken(username: string, id: number) {
  const payload = {
    username: username,
    id: id,
  };

  const privateKey: PrivateKey = {
    key: fs.readFileSync(path.join(__dirname, "../../../private.pem"), "utf8"),
    passphrase: passphrase,
  };

  const signInOptions: SignOptions = {
    algorithm: "RS256",
    expiresIn: "1h",
  };

  return sign(payload, privateKey, signInOptions);
}
