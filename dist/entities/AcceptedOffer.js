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
exports.AcceptedOffer = void 0;
const typeorm_1 = require("typeorm");
let AcceptedOffer = class AcceptedOffer extends typeorm_1.BaseEntity {
};
exports.AcceptedOffer = AcceptedOffer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AcceptedOffer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AcceptedOffer.prototype, "offerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AcceptedOffer.prototype, "truckerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AcceptedOffer.prototype, "acceptedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bool", default: true }),
    __metadata("design:type", Boolean)
], AcceptedOffer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AcceptedOffer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AcceptedOffer.prototype, "updatedAt", void 0);
exports.AcceptedOffer = AcceptedOffer = __decorate([
    (0, typeorm_1.Entity)()
], AcceptedOffer);
//# sourceMappingURL=AcceptedOffer.js.map