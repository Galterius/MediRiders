import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserInput } from "./dto/user.input";
import { User } from "./model/user.schema";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(userInput: UserInput): Promise<User> {
    const createdUser = new this.userModel(userInput);
    return createdUser.save();
  }

  async getUser(email: string): Promise<User> {
    return this.userModel.findOne({ email: email }).exec();
  }

  async findUserById(userId: string) {
    return this.userModel.findById(userId);
  }
}
