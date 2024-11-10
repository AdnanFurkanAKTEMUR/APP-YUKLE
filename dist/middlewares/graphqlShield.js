"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const graphql_shield_1 = require("graphql-shield");
exports.permissions = (0, graphql_shield_1.shield)({
    Query: {},
    Mutation: {},
}, {
    fallbackError: new Error("Erişim izni reddedildi!"),
    allowExternalErrors: true,
});
//# sourceMappingURL=graphqlShield.js.map