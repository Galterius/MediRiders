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

  async create(createMedicalCenterDto: MedicalCenterInput): Promise<MedicalCenter> {
    const createdMedicalCenter = new this.medicalCenterModel(createMedicalCenterDto);
    return createdMedicalCenter.save();
  }

  async getMedicalCenter(email: string) {
    return (await this.medicalCenterModel.findOne({ email: email })).email;
  }
}
