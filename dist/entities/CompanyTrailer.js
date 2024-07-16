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
exports.CompanyTrailer = void 0;
const typeorm_1 = require("typeorm");
const Company_1 = require("./Company");
const Ad_1 = require("./Ad");
let CompanyTrailer = class CompanyTrailer extends typeorm_1.BaseEntity {
};
exports.CompanyTrailer = CompanyTrailer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CompanyTrailer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyTrailer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CompanyTrailer.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company_1.Company, (company) => company.companyTrailers),
    __metadata("design:type", Company_1.Company)
], CompanyTrailer.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Ad_1.Ad, (ad) => ad.companyTrailer),
    __metadata("design:type", Ad_1.Ad)
], CompanyTrailer.prototype, "ad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyTrailer.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyTrailer.prototype, "updated_at", void 0);
exports.CompanyTrailer = CompanyTrailer = __decorate([
    (0, typeorm_1.Entity)()
], CompanyTrailer);
//# sourceMappingURL=CompanyTrailer.js.map