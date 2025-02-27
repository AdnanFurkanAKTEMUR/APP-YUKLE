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
exports.Country = void 0;
const typeorm_1 = require("typeorm");
const City_1 = require("./City");
const Address_1 = require("./Address");
const Company_1 = require("./Company");
let Country = class Country extends typeorm_1.BaseEntity {
};
exports.Country = Country;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Country.prototype, "countryName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Country.prototype, "plateCode", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => City_1.City, (city) => city.country, { nullable: true }),
    __metadata("design:type", Object)
], Country.prototype, "cities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Address_1.Address, (address) => address.country, { nullable: true }),
    __metadata("design:type", Object)
], Country.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Company_1.Company, (company) => company.country, { nullable: true }),
    __metadata("design:type", Object)
], Country.prototype, "companies", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Country.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Country.prototype, "updatedAt", void 0);
exports.Country = Country = __decorate([
    (0, typeorm_1.Entity)()
], Country);
//# sourceMappingURL=Country.js.map