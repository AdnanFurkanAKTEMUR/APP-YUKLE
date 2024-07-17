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
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ad.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company_1.Company, (company) => company.ads),
    __metadata("design:type", Company_1.Company)
], Ad.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (cu) => cu.createdAds),
    __metadata("design:type", CompanyUser_1.CompanyUser)
], Ad.prototype, "createdUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (cu) => cu.publishAds),
    __metadata("design:type", CompanyUser_1.CompanyUser)
], Ad.prototype, "publishUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (cu) => cu.approvedAds),
    __metadata("design:type", CompanyUser_1.CompanyUser)
], Ad.prototype, "approvedUser", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyLoad_1.CompanyLoad, (companyLoad) => companyLoad.ad),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", CompanyLoad_1.CompanyLoad)
], Ad.prototype, "companyLoad", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyTrailer_1.CompanyTrailer, (companyTrailer) => companyTrailer.ad),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", CompanyTrailer_1.CompanyTrailer)
], Ad.prototype, "companyTrailer", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyTrucks_1.CompanyTruck, (companyTruck) => companyTruck.ad),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", CompanyTrucks_1.CompanyTruck)
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