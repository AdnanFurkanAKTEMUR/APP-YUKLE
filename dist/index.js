"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const schema_1 = require("./schema");
const typeorm_config_1 = __importDefault(require("./typeorm.config"));
const auth_1 = require("./middlewares/auth");
async function startServer() {
    const SqlConnection = await typeorm_config_1.default.initialize();
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const corsOptions = {
        origin: true,
        credentials: true,
    };
    const server = new server_1.ApolloServer({
        schema: schema_1.schema,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    await server.start();
    app.use("/", (0, cors_1.default)(corsOptions), express_1.default.json(), (0, express4_1.expressMiddleware)(server, {
        context: async ({ req, res }) => {
            var _a;
            const token = ((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization)
                ? (0, auth_1.auth)(req.headers.authorization)
                : null;
            return {
                user_id: token === null || token === void 0 ? void 0 : token.user_id,
                req,
                res,
                SqlConnection,
            };
        },
    }));
    await new Promise((resolve, reject) => {
        httpServer.listen(4000, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
    console.log(`🚀 Server ready at http://localhost:4000`);
}
startServer();
//# sourceMappingURL=index.js.map