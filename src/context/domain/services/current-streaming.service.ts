import { AxiosPromise } from "axios";
import { CurrentStreamingEntity } from "../entities/current-streaming.entity";

export abstract class CurrentStreamingService {

    abstract getCurrentStreaming: () => AxiosPromise<CurrentStreamingEntity>

}