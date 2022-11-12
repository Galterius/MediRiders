"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiderModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const riders_schema_1 = require("./model/riders.schema");
const riders_resolver_1 = require("./riders.resolver");
const riders_service_1 = require("./riders.service");
let RiderModule = class RiderModule {
};
RiderModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: riders_schema_1.Rider.name, schema: riders_schema_1.RiderSchema }])],
        providers: [riders_resolver_1.RiderResolver, riders_service_1.RiderService],
    })
], RiderModule);
exports.RiderModule = RiderModule;
//# sourceMappingURL=riders.module.js.map