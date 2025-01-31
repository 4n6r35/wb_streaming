import axios, { AxiosPromise } from 'axios';
import { Envs } from '../../../environments/environments.config';
import { CurrentStreamingEntity } from '../../domain/entities/current-streaming.entity';
import { CurrentStreamingService } from '../../domain/services/current-streaming.service';

export class CurrentStreamingServiceImpl extends CurrentStreamingService {
    // getCurrentStreaming: () => AxiosPromise<CurrentStreamingEntity[]>;

    private static _instance: CurrentStreamingServiceImpl;

    public override getCurrentStreaming = async (): AxiosPromise<CurrentStreamingEntity> => {
        const url = `${Envs.API_URL}/trending/all/day?api_key=${Envs.API_KEY}&language=es-ES`
        return await axios.get<CurrentStreamingEntity>(url, {
            headers: { "Content-Type": "application/json" }
        });
    };

    static getInstance() {
        if (!CurrentStreamingServiceImpl._instance) {
            CurrentStreamingServiceImpl._instance = new CurrentStreamingServiceImpl();
        }

        return CurrentStreamingServiceImpl._instance;
    }
}