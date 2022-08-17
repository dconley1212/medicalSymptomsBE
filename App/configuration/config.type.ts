export type Environment = "local";

export interface Config {
  environment: Environment;
}

export interface ProcessVariables {
  ENV?: Environment;
}
