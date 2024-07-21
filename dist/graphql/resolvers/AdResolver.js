"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ad_1 = require("@entities/Ad");
const AdResolver = {
    Query: {
        getAllAd: async (_parent, _args, _context, _info) => {
            const ad = await Ad_1.Ad.find();
            return ad;
        },
    },
};
exports.default = AdResolver;
//# sourceMappingURL=AdResolver.js.map