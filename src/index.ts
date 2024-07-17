// npm install @apollo/server express graphql cors
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import schema from "./graphql/schema";
import typeormConfig from "./typeorm.config";
import { auth } from "./middlewares/auth";

async function startServer() {
  const SqlConnection = await typeormConfig.initialize();
  const app = express();
  const httpServer = http.createServer(app);
  const corsOptions = {
    origin: true,
    credentials: true,
  };
  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    "/",
    cors(corsOptions),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        const token = req?.headers?.authorization ? auth(req.headers.authorization) : null;
        return {
          user_id: token?.user_id,
          req,
          res,
          SqlConnection,
        };
      },
    })
  );

  await new Promise<void>((resolve, reject) => {
    httpServer.listen(4000, (err?: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
  console.log(`🚀 Server ready at http://localhost:4000`);
}
startServer();
