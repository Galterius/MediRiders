import { RiderInput } from "./dto/rider.input";
import { RiderService } from "./riders.service";
export declare class RiderResolver {
    private readonly riderService;
    constructor(riderService: RiderService);
    getRider(email: string): Promise<string>;
    createRider(rider: RiderInput): Promise<import("./model/riders.schema").Rider>;
}
