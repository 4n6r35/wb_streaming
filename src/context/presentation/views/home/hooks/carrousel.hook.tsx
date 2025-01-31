import { MouseEvent, useEffect, useState } from "react";

export const useCarrouselHook = ({ data_length }: { data_length: number }) => {
    const [currentIndex, setCurrentIndex] = useState(3);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const itemWidth = 192;

    const moveRight = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= data_length + 2) {

                setTimeout(() => {
                    setCurrentIndex(3);
                    setTranslateX(-3 * itemWidth);
                }, 0);
                return prevIndex + 1;
            }
            return prevIndex + 1;
        });
    };

    const moveLeft = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex <= 0) {
                setTimeout(() => {
                    setCurrentIndex(data_length + 2);
                    setTranslateX(-(data_length + 2) * itemWidth);
                }, 0);
                return prevIndex - 1;
            }
            return prevIndex - 1;
        });
    };

    const handleMouseDown = (event: MouseEvent) => {
        setIsDragging(true);
        setStartX(event.clientX);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging) return;

        const currentX = event.clientX;
        const deltaX = currentX - startX;

        if (deltaX > 50) {
            moveLeft();
            setIsDragging(false);
        } else if (deltaX < -50) {
            moveRight();
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const newTranslateX = -currentIndex * itemWidth;
        setTranslateX(newTranslateX);
    }, [currentIndex, itemWidth]);

    return {
        currentIndex,
        moveRight,
        moveLeft,
        translateX,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    };
};