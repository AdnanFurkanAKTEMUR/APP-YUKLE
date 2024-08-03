"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const graphql_shield_1 = require("graphql-shield");
const isAdmin = (0, graphql_shield_1.rule)()((_parent, _args, context) => {
    var _a;
    return ((_a = context.user) === null || _a === void 0 ? void 0 : _a.type) === 0;
});
const isCompanyUser = (0, graphql_shield_1.rule)()((_parent, _args, context) => {
    var _a;
    return ((_a = context.user) === null || _a === void 0 ? void 0 : _a.type) === 1;
});
const isAuthenticated = (0, graphql_shield_1.rule)()((_parent, _args, context) => {
    return context.user !== null;
});
exports.permissions = (0, graphql_shield_1.shield)({
    Query: {
        getCompanyRecord: (0, graphql_shield_1.or)(isAdmin, isCompanyUser, (0, graphql_shield_1.not)(isAuthenticated))
    },
    Mutation: {},
});
//# sourceMappingURL=graphqlShield.js.map