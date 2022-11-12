import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RiderInformationInput } from "./dto/rider-information.input";
import { RiderInformation, RiderInformationDocument } from "./model/riders-information.schema";

@Injectable()
export class RiderInformationService {
  constructor(
    @InjectModel(RiderInformation.name)
    private riderInformationModel: Model<RiderInformationDocument>,
  ) {}

  async create(riderInformationDto: RiderInformationInput): Promise<RiderInformation> {
    const createdRider = new this.riderInformationModel(riderInformationDto);
    return createdRider.save();
  }

  async getRiderInformation(riderId: string) {
    return this.riderInformationModel.findOne({ riderId: riderId });
  }
}
