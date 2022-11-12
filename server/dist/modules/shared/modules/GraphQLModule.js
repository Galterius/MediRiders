"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLModule = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
let GraphQLModule = class GraphQLModule {
};
GraphQLModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                installSubscriptionHandlers: true,
                subscriptions: {
                    "graphql-ws": true,
                },
                autoSchemaFile: (0, path_1.join)(process.cwd(), "schema.gql"),
                formatError: (error) => {
                    var _a, _b;
                    const exception = error.extensions.exception;
                    return {
                        message: ((_a = exception === null || exception === void 0 ? void 0 : exception.response) === null || _a === void 0 ? void 0 : _a.message) || error.message,
                        code: ((_b = exception === null || exception === void 0 ? void 0 : exception.response) === null || _b === void 0 ? void 0 : _b.code) || 500,
                    };
                },
            }),
        ],
    })
], GraphQLModule);
exports.GraphQLModule = GraphQLModule;
//# sourceMappingURL=GraphQLModule.js.map