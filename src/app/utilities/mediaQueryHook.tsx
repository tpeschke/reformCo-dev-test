import { useState, useEffect } from "react";

type Breakpoints = 500 | 1024 | 1441

const getMediaQuery = (breakpoint: Breakpoints): string => {
    switch (breakpoint) {
        case 500:
        case 1024:
            return `(max-width: ${breakpoint}px)`
        default:
            return `(min-width: ${breakpoint}px)`
    }
};

export const mediaQueryHook = (breakpoint: Breakpoints): boolean => {
    const [isMediaMatch, setIsMediaMatch] = useState<boolean>(
        () =>
            typeof window !== 'undefined' &&
            window.matchMedia(getMediaQuery(breakpoint)).matches
    );

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const mediaQueryList = window.matchMedia(getMediaQuery(breakpoint));
        const handleMediaQueryChange = (e: MediaQueryListEvent): void => {
            setIsMediaMatch(e.matches);
        };

        setIsMediaMatch(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQueryList.removeEventListener('change', handleMediaQueryChange);
        };
    }, [breakpoint]);

    return isMediaMatch;
};