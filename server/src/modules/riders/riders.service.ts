import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RiderInput } from "./dto/rider.input";
import { Rider, RiderDocument } from "./model/riders.schema";

@Injectable()
export class RiderService {
  constructor(
    @InjectModel(Rider.name)
    private riderModel: Model<RiderDocument>,
  ) {}

  async create(createCatDto: RiderInput): Promise<Rider> {
    const createdRider = new this.riderModel(createCatDto);
    return createdRider.save();
  }

  async getRider(email: string) {
    return (await this.riderModel.findOne({ email: email })).email;
  }
}
