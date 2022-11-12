import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MedicalCenterInput } from "./dto/medical-centers.input";
import { MedicalCenter, MedicalCenterDocument } from "./model/medical-centers.schema";

@Injectable()
export class MedicalCentersService {
  constructor(
    @InjectModel(MedicalCenter.name)
    private medicalCenterModel: Model<MedicalCenterDocument>,
  ) {}

  async create(createCatDto: MedicalCenterInput): Promise<MedicalCenter> {
    const createdMedicalCenter = new this.medicalCenterModel(createCatDto);
    return createdMedicalCenter.save();
  }

  async getRider(email: string) {
    return (await this.medicalCenterModel.findOne({ email: email })).email;
  }
}
