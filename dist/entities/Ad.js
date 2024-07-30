"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ad = void 0;
const typeorm_1 = require("typeorm");
const CompanyUser_1 = require("./CompanyUser");
const CompanyLoad_1 = require("./CompanyLoad");
const CompanyTrailer_1 = require("./CompanyTrailer");
const Company_1 = require("./Company");
const CompanyTrucks_1 = require("./CompanyTrucks");
let Ad = class Ad extends typeorm_1.BaseEntity {
};
exports.Ad = Ad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ad.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ad.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Ad.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], Ad.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Ad.prototype, "prioty", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Ad.prototype, "doubleDirection", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Ad.prototype, "truck", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Ad.prototype, "trailer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], Ad.prototype, "driverPointFilter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ad.prototype, "tonage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ad.prototype, "documents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Ad.prototype, "published", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Ad.prototype, "approved", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ad.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company_1.Company, (company) => company.ads),
    (0, typeorm_1.JoinColumn)({ name: "companyId" }),
    __metadata("design:type", typeof (_a = typeof Company_1.Company !== "undefined" && Company_1.Company) === "function" ? _a : Object)
], Ad.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ad.prototype, "createdCompanyUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (cu) => cu.createdAds),
    (0, typeorm_1.JoinColumn)({ name: "createdCompanyUserId" }),
    __metadata("design:type", CompanyUser_1.CompanyUser)
], Ad.prototype, "createdCompanyUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], Ad.prototype, "publishedCompanyUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (cu) => cu.publishAds),
    (0, typeorm_1.JoinColumn)({ name: "publishedCompanyUserId" }),
    __metadata("design:type", CompanyUser_1.CompanyUser)
], Ad.prototype, "publishedCompanyUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Object)
], Ad.prototype, "approvedCompanyUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (cu) => cu.approvedAds),
    (0, typeorm_1.JoinColumn)({ name: "approvedCompanyUserId" }),
    __metadata("design:type", CompanyUser_1.CompanyUser)
], Ad.prototype, "approvedCompanyUser", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyLoad_1.CompanyLoad, (companyLoad) => companyLoad.ad),
    __metadata("design:type", typeof (_b = typeof CompanyLoad_1.CompanyLoad !== "undefined" && CompanyLoad_1.CompanyLoad) === "function" ? _b : Object)
], Ad.prototype, "companyLoad", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyTrailer_1.CompanyTrailer, (companyTrailer) => companyTrailer.ad),
    __metadata("design:type", typeof (_c = typeof CompanyTrailer_1.CompanyTrailer !== "undefined" && CompanyTrailer_1.CompanyTrailer) === "function" ? _c : Object)
], Ad.prototype, "companyTrailer", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyTrucks_1.CompanyTruck, (companyTruck) => companyTruck.ad),
    __metadata("design:type", typeof (_d = typeof CompanyTrucks_1.CompanyTruck !== "undefined" && CompanyTrucks_1.CompanyTruck) === "function" ? _d : Object)
], Ad.prototype, "companyTruck", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Ad.prototype, "departureDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Ad.prototype, "arrivalDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Ad.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Ad.prototype, "updatedAt", void 0);
exports.Ad = Ad = __decorate([
    (0, typeorm_1.Entity)()
], Ad);
//# sourceMappingURL=Ad.js.map