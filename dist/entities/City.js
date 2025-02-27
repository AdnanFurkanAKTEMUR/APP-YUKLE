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
exports.City = void 0;
const typeorm_1 = require("typeorm");
const District_1 = require("./District");
const Country_1 = require("./Country");
const Address_1 = require("./Address");
const Company_1 = require("./Company");
let City = class City extends typeorm_1.BaseEntity {
};
exports.City = City;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], City.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], City.prototype, "cityName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], City.prototype, "plateCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Country_1.Country, (country) => country.cities, { nullable: true }),
    __metadata("design:type", Object)
], City.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => District_1.District, (district) => district.city, { nullable: true }),
    __metadata("design:type", Object)
], City.prototype, "districts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Address_1.Address, (address) => address.city, { nullable: true }),
    __metadata("design:type", Object)
], City.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Company_1.Company, (company) => company.city, { nullable: true }),
    __metadata("design:type", Object)
], City.prototype, "companies", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], City.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], City.prototype, "updatedAt", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)()
], City);
//# sourceMappingURL=City.js.map