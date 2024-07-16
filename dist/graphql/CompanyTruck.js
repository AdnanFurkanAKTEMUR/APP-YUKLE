"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTruckType = void 0;
const nexus_1 = require("nexus");
const Ad_1 = require("../entities/Ad");
const Company_1 = require("../entities/Company");
exports.CompanyTruckType = (0, nexus_1.objectType)({
    name: "CompanyTruck",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.int("companyId");
        t.field("company", {
            type: "Company",
            resolve: async (parent) => {
                return await Company_1.Company.findOne(parent.companyId);
            },
        });
        t.field("ad", {
            type: "Ad",
            resolve: async (parent) => {
                return await Ad_1.Ad.findOne({ where: { companyTruck: parent.id } });
            },
        });
        t.nonNull.string("createdAt");
        t.nonNull.string("updatedAt");
    },
});
//# sourceMappingURL=CompanyTruck.js.map