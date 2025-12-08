export function addTabletListener(updateWidth: () => void) {
    const media = window.matchMedia(`(max-width: 1024px)`);

    if (media.addEventListener) {
        media.addEventListener("change", updateWidth);
    } else {
        // compatibility for browser that don't have addEventListener
        media.addListener(updateWidth);
    }

    return media
}

export function removeTabletListener(media: MediaQueryList, updateWidth: () => void) {
    if (media.removeEventListener) {
        return () => media.removeEventListener('change', updateWidth);
    } else {
        return () => media.removeListener(updateWidth);
    }
}