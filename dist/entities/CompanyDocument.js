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
exports.CompanyDocument = void 0;
const typeorm_1 = require("typeorm");
const CompanyUser_1 = require("./CompanyUser");
const Company_1 = require("./Company");
let CompanyDocument = class CompanyDocument extends typeorm_1.BaseEntity {
};
exports.CompanyDocument = CompanyDocument;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CompanyDocument.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyDocument.prototype, "documentTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyDocument.prototype, "documentType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyDocument.prototype, "documentFolder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company_1.Company, (company) => company.companyDocuments),
    __metadata("design:type", Company_1.Company)
], CompanyDocument.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (companyUser) => companyUser.createdCompanyDocuments, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyDocument.prototype, "createdCompanyUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (companyUser) => companyUser.updatedCompanyDocuments, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyDocument.prototype, "updatedCompanyUser", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyDocument.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyDocument.prototype, "updatedAt", void 0);
exports.CompanyDocument = CompanyDocument = __decorate([
    (0, typeorm_1.Entity)()
], CompanyDocument);
//# sourceMappingURL=CompanyDocument.js.map