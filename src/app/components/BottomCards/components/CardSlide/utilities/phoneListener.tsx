export function addPhoneListener(updateWidth: () => void) {
    const media = window.matchMedia(`(max-width: 375px)`);

    if (media.addEventListener) {
        media.addEventListener("change", updateWidth);
    } else {
        // compatibility for browser that don't have addEventListener
        media.addListener(updateWidth);
    }

    return media
}

export function removePhoneListener(media: MediaQueryList, updateWidth: () => void) {
    if (media.removeEventListener) {
        return () => media.removeEventListener('change', updateWidth);
    } else {
        return () => media.removeListener(updateWidth);
    }
}