import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { States } from "./dto/state.types";
import { Order } from "./model/order.schema";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<Order>,
  ) {}

  async createOrder(order: Order) {
    const createdOrder = new this.orderModel(order);
    return createdOrder.save();
  }

  async updateOrderState(orderId: string, userId: string, state: States) {
    return this.orderModel.findByIdAndUpdate(orderId, { state: state, canceledBy: userId });
  }

  async fetchOrders() {
    return this.orderModel.find();
  }

  async findOrderById(orderId: string) {
    return this.orderModel.findById(orderId);
  }
}
