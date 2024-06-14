import { useState, useEffect } from "react";
import { findFirstNonNullElement } from "../Helpers";

export const useWidthElement = (queries: string[]) => {
    const [elementWidth, setElementWidth] = useState<number>(0);

    useEffect(() => {
        const element = findFirstNonNullElement(queries);

        const updateFilterWidth = () => {
            if (element) {
                const computedStyle = getComputedStyle(element);
                setElementWidth(
                    element.offsetWidth +
                        parseInt(computedStyle.marginRight, 10) +
                        parseInt(computedStyle.marginLeft, 10)
                );
            }
        };

        updateFilterWidth();

        if (element) {
            const resizeObserver = new ResizeObserver(updateFilterWidth);
            resizeObserver.observe(element);

            return () => resizeObserver.unobserve(element);
        }

        return () => {};
    }, [queries]);

    return elementWidth;
};
