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
exports.CompanyLoad = void 0;
const typeorm_1 = require("typeorm");
const Company_1 = require("./Company");
const Ad_1 = require("./Ad");
let CompanyLoad = class CompanyLoad extends typeorm_1.BaseEntity {
};
exports.CompanyLoad = CompanyLoad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CompanyLoad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyLoad.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CompanyLoad.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company_1.Company, (company) => company.companyLoads),
    (0, typeorm_1.JoinColumn)({ name: "companyId" }),
    __metadata("design:type", Company_1.Company)
], CompanyLoad.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CompanyLoad.prototype, "adId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Ad_1.Ad, (ad) => ad.companyLoad),
    (0, typeorm_1.JoinColumn)({ name: "adId" }),
    __metadata("design:type", Ad_1.Ad)
], CompanyLoad.prototype, "ad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyLoad.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyLoad.prototype, "updatedAt", void 0);
exports.CompanyLoad = CompanyLoad = __decorate([
    (0, typeorm_1.Entity)()
], CompanyLoad);
//# sourceMappingURL=CompanyLoad.js.map