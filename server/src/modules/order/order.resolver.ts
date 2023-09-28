import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { EveryRole, MedicRole } from "src/shared/utils/decorators";
import { OrderDTO, OrderInput } from "./dto/state.types";
import { OrderService } from "./order.service";
import { State } from "@shared/utils/enums/state-enum";

@Resolver()
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Mutation(() => OrderDTO)
  @MedicRole()
  async createOrder(@Args("order") order: OrderInput) {
    return this.orderService.createOrder(order);
  }

  @Mutation(() => OrderDTO)
  async updateOrderState(
    @Args("orderId")
    orderId: string,

    @Args("state", { type: () => State })
    states: State,

    @Args({ nullable: true, name: "userId" })
    userId?: string | null,
  ) {
    return this.orderService.updateOrderState(orderId, userId, states);
  }

  @Query(() => [OrderDTO])
  @EveryRole()
  async getAllOrders() {
    return this.orderService.fetchOrders();
  }

  @Query(() => OrderDTO)
  async getOrderById(orderId: string) {
    return this.orderService.findOrderById(orderId);
  }
}
