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
exports.Address = void 0;
const typeorm_1 = require("typeorm");
const CompanyProfile_1 = require("./CompanyProfile");
const CompanyUser_1 = require("./CompanyUser");
const Country_1 = require("./Country");
const City_1 = require("./City");
const District_1 = require("./District");
const Offer_1 = require("./Offer");
let Address = class Address extends typeorm_1.BaseEntity {
};
exports.Address = Address;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyProfile_1.CompanyProfile, (companyProfile) => companyProfile.addresses),
    __metadata("design:type", CompanyProfile_1.CompanyProfile)
], Address.prototype, "companyProfile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Address.prototype, "addressName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Address.prototype, "addressTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Address.prototype, "addressDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Address.prototype, "addressType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Country_1.Country, (country) => country.addresses),
    __metadata("design:type", Country_1.Country)
], Address.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => City_1.City, (city) => city.addresses),
    __metadata("design:type", City_1.City)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => District_1.District, (district) => district.addresses),
    __metadata("design:type", District_1.District)
], Address.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Offer_1.Offer, (offer) => offer.address),
    __metadata("design:type", Array)
], Address.prototype, "offersAddress", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (companyUser) => companyUser.createdAddresses),
    __metadata("design:type", CompanyUser_1.CompanyUser)
], Address.prototype, "createdCompanyUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (companyUser) => companyUser.updatedAddresses, { nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "updatedCompanyUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompanyUser_1.CompanyUser, (companyUser) => companyUser.deletedAddresses, { nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "deletedCompanyUser", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Address.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Address.prototype, "updatedAt", void 0);
exports.Address = Address = __decorate([
    (0, typeorm_1.Entity)()
], Address);
//# sourceMappingURL=Address.js.map