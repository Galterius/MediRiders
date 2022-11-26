import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { OrderDTO, OrderInput, States } from "./dto/state.types";
import { OrderService } from "./order.service";

@Resolver()
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Mutation(() => OrderDTO)
  async createOrder(@Args("order") order: OrderInput) {
    return this.orderService.createOrder(order);
  }

  @Mutation(() => OrderDTO)
  async updateOrderState(
    @Args("orderId")
    orderId: string,

    @Args("state")
    states: States,

    @Args({ nullable: true, name: "userId" })
    userId?: string | null,
  ) {
    return this.orderService.updateOrderState(orderId, userId, states);
  }

  @Query(() => [OrderDTO])
  async getAllOrders() {
    return this.orderService.fetchOrders();
  }

  @Query(() => OrderDTO)
  async getOrderById(orderId: string) {
    return this.orderService.findOrderById(orderId);
  }
}
