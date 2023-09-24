import convict from "convict";
import * as yaml from "js-yaml";
import * as fs from "fs";
import { Logger } from "@nestjs/common";

interface Environment {
  env: string;
  server: {
    port: number;
  };
  db: {
    connection_string: string;
  };
  access_token: {
    duration: string;
    secret: string;
  };
}

const environment = convict<Environment>({
  env: {
    doc: "Specifies the environment of the running server.",
    format: ["production", "development", "local"],
    default: "development",
    env: "NODE_ENV",
  },
  server: {
    port: {
      doc: "The port to bind",
      format: "port",
      default: 8000,
      env: "SERVER_PORT",
    },
  },
  db: {
    connection_string: {
      doc: "MongoDB connection string",
      format: "String",
      default: "mongodb://localhost:27017/MediRiders",
      env: "MONGO_CONNECTION_URI",
      sensitive: true,
    },
  },
  access_token: {
    duration: {
      doc: "The lifespan of the access token in seconds",
      format: "String",
      default: "3600s",
      env: "DURATION",
    },
    secret: {
      doc: "The secret to encrypt the jwt with",
      format: "String",
      default: "default_secret",
      env: "SECRET",
      sensitive: true,
    },
  },
});

convict.addParser({ extension: ["yml", "yaml"], parse: yaml.load });

const envFilePath = "./.env.yml";
if (fs.existsSync(envFilePath)) {
  environment.loadFile(envFilePath);
}

environment.validate({ allowed: "strict" });

const logger = new Logger("Environment");
logger.log(`Successfully loaded environment: ${JSON.stringify(JSON.parse(environment.toString()))}`);

export default environment;
