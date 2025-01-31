import { useEffect, useState } from "react";
import { CurrentStreamingEntityData } from "../../../../domain/entities/current-streaming.entity";
type SynopsisHookType = [number, number, string]
export const useSynopsisHook = (index: number, data: CurrentStreamingEntityData[]): SynopsisHookType => {

    const [streamingActiveIndex, setStreamingActiveIndex] = useState(index % data.length);
    const [nextIndex, setNextIndex] = useState(index % data.length);
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        const newIndex = index % data.length;
        if (newIndex === streamingActiveIndex) return;

        const direction = newIndex > streamingActiveIndex ? "right" : "left";
        setNextIndex(newIndex)

        setAnimationClass(direction === "right" ? "slide-out-left" : "slide-out-right");

        const timeout = setTimeout(() => {
            setStreamingActiveIndex(newIndex);
            setAnimationClass("");
        }, 500)

        return () => clearTimeout(timeout);
    }, [index, data.length, streamingActiveIndex])

    return [
        streamingActiveIndex,
        nextIndex,
        animationClass,
    ]

}