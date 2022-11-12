import { join } from "path";
import { Module } from "@nestjs/common";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLError } from "graphql";
import { GraphQLModule as BaseGraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    BaseGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      subscriptions: {
        "graphql-ws": true,
      },
      autoSchemaFile: join(process.cwd(), "schema.gql"),
      formatError: (error: GraphQLError) => {
        const exception: any = error.extensions.exception;

        return {
          message: exception?.response?.message || error.message,
          code: exception?.response?.code || 500,
        };
      },
    }),
  ],
})
export class GraphQLModule {}
