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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const CompanyBankAccount_1 = require("./CompanyBankAccount");
const CompanyUser_1 = require("./CompanyUser");
const CompanyTrailer_1 = require("./CompanyTrailer");
const CompanyTrucks_1 = require("./CompanyTrucks");
const Ad_1 = require("./Ad");
const CompanyLoad_1 = require("./CompanyLoad");
let Company = class Company extends typeorm_1.BaseEntity {
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "vkn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], Company.prototype, "point", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyBankAccount_1.CompanyBankAccount, (cba) => cba.company),
    __metadata("design:type", Array)
], Company.prototype, "bankAccounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyUser_1.CompanyUser, (c_u) => c_u.company),
    __metadata("design:type", Array)
], Company.prototype, "companyUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyTrailer_1.CompanyTrailer, (c_t) => c_t.company),
    __metadata("design:type", Array)
], Company.prototype, "companyTrailers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyTrucks_1.CompanyTruck, (c_t) => c_t.company),
    __metadata("design:type", Array)
], Company.prototype, "companyTrucks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyLoad_1.CompanyLoad, (c_t) => c_t.company),
    __metadata("design:type", Array)
], Company.prototype, "companyLoads", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Ad_1.Ad, (ad) => ad.company),
    __metadata("design:type", Array)
], Company.prototype, "ads", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
//# sourceMappingURL=Company.js.map