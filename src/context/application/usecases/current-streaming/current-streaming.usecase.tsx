import { useEffect, useState } from "react";
import { CurrentStreamingServiceImpl } from "../../../data/services/current-streaming-impl.service";
import { CurrentStreamingEntity } from "../../../domain/entities/current-streaming.entity";

export function useCaseCurrentStreaming() {
    const [synopsis, setSynopsis] = useState<CurrentStreamingEntity>();
    const [loading, setLoading] = useState<boolean>(false);
    const currentStreamingService = CurrentStreamingServiceImpl.getInstance();

     function execute () {
        setLoading(true);

        currentStreamingService.getCurrentStreaming()
            .then(({ data }) => {
                setSynopsis(data)
            })
            .catch((e) => {
                setSynopsis(undefined);
                console.error(`Error al obtener los streaming recientes ${e}`)
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        execute();
    },[]);

    return {
        execute,
        loading,
        synopsis
    }
} 