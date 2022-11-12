import { Model } from "mongoose";
import { RiderInput } from "./dto/rider.input";
import { Rider, RiderDocument } from "./model/riders.schema";
export declare class RiderService {
    private riderModel;
    constructor(riderModel: Model<RiderDocument>);
    create(createCatDto: RiderInput): Promise<Rider>;
    getRider(email: string): Promise<string>;
}
