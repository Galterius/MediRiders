import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { OrderDTO, StateInput } from "./dto/state.types";
import { OrderService } from "./order.service";

@Resolver()
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Mutation(() => OrderDTO)
  async createOrder(@Args("order") order) {
    return this.orderService.createOrder(order);
  }

  @Mutation(() => OrderDTO)
  async updateOrderState(
    @Args("orderId")
    orderId: string,

    @Args("userId")
    userId: string,

    @Args("state")
    states: StateInput,
  ) {
    return this.orderService.updateOrderState(orderId, userId, states.state);
  }

  @Query(() => OrderDTO)
  async getAllOrders() {
    return this.orderService.fetchOrders();
  }

  @Query(() => OrderDTO)
  async getOrderById(orderId: string) {
    return this.orderService.findOrderById(orderId);
  }
}
