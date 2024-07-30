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
exports.CompanyProfile = void 0;
const typeorm_1 = require("typeorm");
const CompanyRecord_1 = require("./CompanyRecord");
const CompanyUser_1 = require("./CompanyUser");
let CompanyProfile = class CompanyProfile extends typeorm_1.BaseEntity {
};
exports.CompanyProfile = CompanyProfile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CompanyProfile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CompanyProfile.prototype, "companyRecordId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyRecord_1.CompanyRecord, (cr) => cr.companyProfile),
    (0, typeorm_1.JoinColumn)({ name: "companyRecordId" }),
    __metadata("design:type", CompanyRecord_1.CompanyRecord)
], CompanyProfile.prototype, "companyRecord", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyUser_1.CompanyUser, (companyUser) => companyUser.companyProfile),
    __metadata("design:type", Array)
], CompanyProfile.prototype, "companyUsers", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyProfile.prototype, "companyCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyProfile.prototype, "companyPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyProfile.prototype, "taxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyProfile.prototype, "taxAdministration", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyProfile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyProfile.prototype, "updatedAt", void 0);
exports.CompanyProfile = CompanyProfile = __decorate([
    (0, typeorm_1.Entity)()
], CompanyProfile);
//# sourceMappingURL=CompanyProfile.js.map