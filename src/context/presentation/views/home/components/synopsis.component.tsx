import { CurrentStreamingEntityData } from "../../../../domain/entities/current-streaming.entity";
import { useSynopsisHook } from "../hooks/synopsis.hook";
import "../styles/synopsis.component.css";

export const SynopsisComponent = ({ index, data }: { index: number, data: CurrentStreamingEntityData[] }) => {
    const [current_index, next_index, animation_class] = useSynopsisHook(index, data);

    return (
        <div className="relative w-full h-[65vh] overflow-hidden select-none">
            {/* Sección principal */}
            <section className={`text-white w-full h-full p-5 grid grid-cols-[1fr_4fr] relative ${animation_class}`}>
                <div className="grid place-content-center">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${data[current_index]?.poster_path}`}
                        alt={`poster/${data[current_index]?.poster_path}`}
                        draggable="false"
                        className="object-contain aspect-video w-60 h-90 border border-solid border-white-2/50 rounded-md"
                    />
                    <div className="flex flex-row items-center py-2 translate-x-2 gap-1 font-bold text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                            <path fill="#ba3e55" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-s2-2" />
                        </svg>
                        <p>{data[current_index]?.vote_count}</p>
                        <span className="text-sm -translate-y-1 translate-x-1">.</span>
                        <p className="translate-x-2">
                            {data[current_index]?.release_date
                                ? data[current_index]?.release_date.split('-')[0]
                                : data[current_index]?.first_air_date.split('-')[0]
                            }
                        </p>
                        <span className="-translate-y-1 translate-x-3">.</span>
                        <p className="capitalize translate-x-4">{data[current_index]?.media_type}</p>
                    </div>
                </div>
                <div className="py-5 px-5 w-[65vw]">
                    <h1 className="text-5xl font-bold">
                        {data[current_index]?.original_title
                            ? data[current_index]?.original_title
                            : data[current_index]?.original_name
                        }
                    </h1>
                    <p className="pt-5">
                        {data[current_index]?.overview
                            ? data[current_index]?.overview
                            : 'No cuenta con resumen disponible'
                        }
                    </p>
                </div>
            </section>

            {/* Sección siguiente (solo se muestra durante la animación) */}
            {animation_class && (
                <section className={`absolute top-0 left-0 w-full h-full ${animation_class === 'slide-out-left' ? 'slide-in-right' : 'slide-in-left'}`}>
                    <div className="text-white w-full h-full p-5 grid grid-cols-[1fr_4fr]">
                        <div className="grid place-content-center">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${data[next_index]?.poster_path}`}
                                alt={`poster/${data[next_index]?.poster_path}`}
                                draggable="false"
                                className="object-contain aspect-video w-60 h-90 border border-solid border-white-2/50 rounded-md"
                            />
                            <div className="flex flex-row items-center py-2 translate-x-2 gap-1 font-bold text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                                    <path fill="#ba3e55" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-s2-2" />
                                </svg>
                                <p>{data[next_index]?.vote_count}</p>
                                <span className="text-sm -translate-y-1 translate-x-1">.</span>
                                <p className="translate-x-2">
                                    {data[next_index]?.release_date
                                        ? data[next_index]?.release_date.split('-')[0]
                                        : data[next_index]?.first_air_date.split('-')[0]
                                    }
                                </p>
                                <span className="-translate-y-1 translate-x-3">.</span>
                                <p className="capitalize translate-x-4">{data[next_index]?.media_type}</p>
                            </div>
                        </div>
                        <div className="py-5 px-5 w-[65vw]">
                            <h1 className="text-5xl font-bold">
                                {data[next_index]?.original_title
                                    ? data[next_index]?.original_title
                                    : data[next_index]?.original_name
                                }
                            </h1>
                            <p className="pt-5">
                                {data[next_index]?.overview
                                    ? data[next_index]?.overview
                                    : 'No cuenta con resumen disponible'
                                }
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};