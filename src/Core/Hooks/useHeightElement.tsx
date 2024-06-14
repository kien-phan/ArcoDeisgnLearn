import { useState, useEffect } from "react";
import { findFirstNonNullElement } from "../Helpers";

export const useHeightElement = (queries: string[]) => {
    const [elementHeight, setElementHeight] = useState<number>(0);

    useEffect(() => {
        const element = findFirstNonNullElement(queries);

        const updateFilterHeight = () => {
            if (element) {
                const computedStyle = getComputedStyle(element);
                setElementHeight(
                    element.offsetHeight +
                        parseInt(computedStyle.marginTop, 10) +
                        parseInt(computedStyle.marginBottom, 10)
                );
            }
        };

        updateFilterHeight();

        if (element) {
            const resizeObserver = new ResizeObserver(updateFilterHeight);
            resizeObserver.observe(element);

            return () => resizeObserver.unobserve(element);
        }

        return () => {};
    }, [queries]);

    return elementHeight;
};
