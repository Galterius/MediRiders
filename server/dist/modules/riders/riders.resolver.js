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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rider_dto_1 = require("./dto/rider.dto");
const rider_input_1 = require("./dto/rider.input");
const riders_service_1 = require("./riders.service");
let RiderResolver = class RiderResolver {
    constructor(riderService) {
        this.riderService = riderService;
    }
    async getRider(email) {
        return this.riderService.getRider(email);
    }
    async createRider(rider) {
        return this.riderService.create(rider);
    }
};
__decorate([
    (0, graphql_1.Query)(() => String),
    __param(0, (0, graphql_1.Args)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RiderResolver.prototype, "getRider", null);
__decorate([
    (0, graphql_1.Mutation)(() => rider_dto_1.RiderDTO),
    __param(0, (0, graphql_1.Args)("rider")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rider_input_1.RiderInput]),
    __metadata("design:returntype", Promise)
], RiderResolver.prototype, "createRider", null);
RiderResolver = __decorate([
    (0, graphql_1.Resolver)(() => rider_dto_1.RiderDTO),
    __metadata("design:paramtypes", [riders_service_1.RiderService])
], RiderResolver);
exports.RiderResolver = RiderResolver;
//# sourceMappingURL=riders.resolver.js.map