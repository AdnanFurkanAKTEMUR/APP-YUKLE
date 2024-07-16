"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdType = void 0;
const nexus_1 = require("nexus");
const Company_1 = require("../entities/Company");
const CompanyLoad_1 = require("../entities/CompanyLoad");
const CompanyTrailer_1 = require("../entities/CompanyTrailer");
const CompanyTrucks_1 = require("../entities/CompanyTrucks");
const CompanyUser_1 = require("../entities/CompanyUser");
exports.AdType = (0, nexus_1.objectType)({
    name: "Ad",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("title");
        t.nonNull.string("description");
        t.nonNull.boolean("active");
        t.nonNull.float("price");
        t.nonNull.boolean("prioty");
        t.nonNull.boolean("doubleDirection");
        t.nonNull.boolean("truck");
        t.nonNull.boolean("trailer");
        t.nonNull.float("driverPointFilter");
        t.nonNull.string("tonage");
        t.nonNull.string("documents");
        t.nonNull.int("companyId");
        t.field("company", {
            type: "Company",
            resolve: async (parent) => {
                return await Company_1.Company.findOne(parent.companyId);
            },
        });
        t.field("createdUser", {
            type: "CompanyUser",
            resolve: async (parent) => {
                return await CompanyUser_1.CompanyUser.findOne(parent.createdUserId);
            },
        });
        t.field("publishUser", {
            type: "CompanyUser",
            resolve: async (parent) => {
                return await CompanyUser_1.CompanyUser.findOne(parent.publishUserId);
            },
        });
        t.field("approvedUser", {
            type: "CompanyUser",
            resolve: async (parent) => {
                return await CompanyUser_1.CompanyUser.findOne(parent.approvedUserId);
            },
        });
        t.field("companyLoad", {
            type: "CompanyLoad",
            resolve: async (parent) => {
                return await CompanyLoad_1.CompanyLoad.findOne({ where: { ad: parent.id } });
            },
        });
        t.field("companyTrailer", {
            type: "CompanyTrailer",
            resolve: async (parent) => {
                return await CompanyTrailer_1.CompanyTrailer.findOne({ where: { ad: parent.id } });
            },
        });
        t.field("companyTruck", {
            type: "CompanyTruck",
            resolve: async (parent) => {
                return await CompanyTrucks_1.CompanyTruck.findOne({ where: { ad: parent.id } });
            },
        });
        t.nonNull.field("departureDate", {
            type: "DateTime",
        });
        t.nonNull.field("arrivalDate", {
            type: "DateTime",
        });
        t.nonNull.field("createdAt", {
            type: "DateTime",
        });
        t.nonNull.field("updatedAt", {
            type: "DateTime",
        });
    },
});
//# sourceMappingURL=Ads.js.map