export interface Config {
  client: string;
  connection: string;
  pool: {
    min: number;
    max: number;
  };
}
