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
exports.CompanyRecord = void 0;
const typeorm_1 = require("typeorm");
const CompanyProfile_1 = require("./CompanyProfile");
let CompanyRecord = class CompanyRecord extends typeorm_1.BaseEntity {
};
exports.CompanyRecord = CompanyRecord;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CompanyRecord.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "officialsName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "companyPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "companyMail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], CompanyRecord.prototype, "membershipNote", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "taxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "companySector", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "dailyTrip", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "truckType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "int" }),
    __metadata("design:type", Number)
], CompanyRecord.prototype, "companyProfileId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CompanyProfile_1.CompanyProfile, (companyProfile) => companyProfile.companyRecord),
    (0, typeorm_1.JoinColumn)({ name: "companyProfileId" }),
    __metadata("design:type", CompanyProfile_1.CompanyProfile)
], CompanyRecord.prototype, "companyProfile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], CompanyRecord.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], CompanyRecord.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], CompanyRecord.prototype, "districtId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyRecord.prototype, "addressDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], CompanyRecord.prototype, "messageConfirm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], CompanyRecord.prototype, "kvkkConfirm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
    __metadata("design:type", Boolean)
], CompanyRecord.prototype, "otpVerification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
    __metadata("design:type", Boolean)
], CompanyRecord.prototype, "mailVerification", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyRecord.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyRecord.prototype, "updatedAt", void 0);
exports.CompanyRecord = CompanyRecord = __decorate([
    (0, typeorm_1.Entity)()
], CompanyRecord);
//# sourceMappingURL=CompanyRecord.js.map