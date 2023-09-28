import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OrderInput } from "./dto/state.types";
import { Order } from "./model/order.schema";
import { State } from "@shared/utils/enums/state-enum";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<Order>,
  ) {}

  async createOrder(order: OrderInput) {
    const createdOrder = new this.orderModel(order);
    return createdOrder.save();
  }

  async updateOrderState(orderId: string, userId: string, state: State) {
    const input = { state: state };
    if (state === State.CANCELLED) {
      input["canceledBy"] = userId;
    }

    return this.orderModel.findByIdAndUpdate(orderId, input, { new: true });
  }

  async fetchOrders() {
    return this.orderModel.find();
  }

  async findOrderById(orderId: string) {
    return this.orderModel.findById(orderId);
  }

  //TODO: ADD QUERY TO GET THE ORDERS BASED ON THE MEDIC ID, ADD QUERY TO GET ORDERS BASED ON RIDER ID
}
