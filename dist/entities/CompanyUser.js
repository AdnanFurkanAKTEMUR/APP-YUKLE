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
exports.CompanyUser = void 0;
const typeorm_1 = require("typeorm");
const CompanyProfile_1 = require("./CompanyProfile");
const Offer_1 = require("./Offer");
const Address_1 = require("./Address");
const CompanyDocument_1 = require("./CompanyDocument");
let CompanyUser = class CompanyUser extends typeorm_1.BaseEntity {
};
exports.CompanyUser = CompanyUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CompanyUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyUser.prototype, "userFirstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 1, readonly: true }),
    __metadata("design:type", Number)
], CompanyUser.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyUser.prototype, "userLastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], CompanyUser.prototype, "userEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "regular" }),
    __metadata("design:type", String)
], CompanyUser.prototype, "userRole", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CompanyUser.prototype, "userPassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], CompanyUser.prototype, "userStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], CompanyUser.prototype, "userPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], CompanyUser.prototype, "userImage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CompanyUser.prototype, "companyProfileId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyProfile_1.CompanyProfile, (company) => company.companyUsers),
    (0, typeorm_1.JoinColumn)({ name: "companyProfileId" }),
    __metadata("design:type", CompanyProfile_1.CompanyProfile)
], CompanyUser.prototype, "companyProfile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Offer_1.Offer, (offer) => offer.companyUser),
    __metadata("design:type", Array)
], CompanyUser.prototype, "offers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Address_1.Address, (address) => address.createdCompanyUser, { nullable: true }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "createdAddresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Address_1.Address, (address) => address.updatedCompanyUser, { nullable: true }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "updatedAddresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Address_1.Address, (address) => address.deletedCompanyUser, { nullable: true }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "deletedAddresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyDocument_1.CompanyDocument, (companyDocument) => companyDocument.createdCompanyUser, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "createdCompanyDocuments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyDocument_1.CompanyDocument, (companyDocument) => companyDocument.updatedCompanyUser, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "updatedCompanyDocuments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyDocument_1.CompanyDocument, (companyDocument) => companyDocument.deletedCompanyUser, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "deletedCompanyDocuments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyProfile_1.CompanyProfile, (companyProfile) => companyProfile.createdCompanyUser, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "createdCompanyProfiles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyProfile_1.CompanyProfile, (companyProfile) => companyProfile.updatedCompanyUser, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "updatedCompanyProfiles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CompanyProfile_1.CompanyProfile, (companyProfile) => companyProfile.deletedCompanyUser, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], CompanyUser.prototype, "deletedCompanyProfiles", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CompanyUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CompanyUser.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CompanyUser.prototype, "deletedAt", void 0);
exports.CompanyUser = CompanyUser = __decorate([
    (0, typeorm_1.Entity)()
], CompanyUser);
//# sourceMappingURL=CompanyUser.js.map