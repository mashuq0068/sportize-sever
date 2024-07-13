import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  port: process.env.PORT,
  database_url : process.env.DATABASE_URL,
  node_env:process.env.NODE_ENV,
  node_mailer_pass : process.env.NODE_MAILER_PASS
};
