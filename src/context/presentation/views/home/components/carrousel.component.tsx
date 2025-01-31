import { useState } from "react";
import { CurrentStreamingEntityData } from "../../../../domain/entities/current-streaming.entity";
import { useCarrouselHook } from "../hooks/carrousel.hook";
import { SynopsisComponent } from "./synopsis.component";

export const CarrouselComponent = ({ data = [] }: { data?: CurrentStreamingEntityData[] }) => {
    const { translateX, handleMouseDown, handleMouseMove, handleMouseUp } = useCarrouselHook({ data_length: data.length });

    const [activeIndex, setActiveIndex] = useState(0);
    const handleIndexChange = (index: number) => {
        setActiveIndex(index % data.length);
    };

    return (
        <section className="w-full h-dvh grid grid-rows-[1.5fr,1fr] relative">
            <section className="w-full h-dvh border-0 rounded-sm absolut">
                <div className="absolute inset-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w1280/${data[activeIndex]?.backdrop_path}`}
                        alt={`backdrop/${data[activeIndex]?.original_title}`}
                        className="w-full h-dvh aspect-video object-cover"
                    />
                </div>
                <div className="flex justify-center items-center w-dvw h-dvh absolute bg-gradient-to-t from-gray-900/80 to-black/90 pb-28">
                    <SynopsisComponent index={activeIndex} data={data} />
                </div>
            </section>
            <section
                className="absolute w-dvw z-10 overflow-hidden select-none py-8 bottom-0"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    className="flex flex-row gap-5 mx-5 items-center justify-items-center relative transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {data.map((d, i) => (
                        <div
                            key={i}
                            className="relative flex-none h-36 w-64 border-0 rounded-4xl transition-transform duration-300 ease-in-out hover:-translate-y-4 hover:scale-105 z-10"
                            onClick={() => handleIndexChange(i)}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w1280/${d.backdrop_path}`}
                                alt={`backdrop/${d.original_title}`}
                                draggable="false"
                                className="object-contain  aspect-video drop-shadow-lg select-none rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};