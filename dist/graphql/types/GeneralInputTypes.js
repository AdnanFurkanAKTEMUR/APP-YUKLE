"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const GeneralInputTypes = (0, graphql_tag_1.default) `
  input getId {
    id: Int!
  }

  type successMsg {
    success: Boolean
    msg: String
  }
`;
exports.default = GeneralInputTypes;
//# sourceMappingURL=GeneralInputTypes.js.map