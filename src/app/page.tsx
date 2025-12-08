'use client'

import Header from "./components/Header/Header";
import BottomCards from "./components/BottomCards/BottomCards";

// TODO remove
import Image from "next/image";
import desktop from '../../public/images/desktop.png'
import tablet from '../../public/images/tablet.png'
import mobile from '../../public/images/mobile.png'
import { mediaQueryHook } from "./utilities/mediaQueryHook";

// TODO the current memory is 1.3 GB - can I fix that?

// TODO add fading to hide ugly jump

export default function Home() {
  const isTablet = mediaQueryHook(1024)
  // Technically, the phone layout doesn't start until width 375px but, after 945, the scaled up cards start overflowing the sides
  // so it made sense to change the orientation early to create a smooth experience.
  const isPhone = mediaQueryHook(945)

  return (
    <>
      <Image className="object-cover" src={desktop} alt={""} />
      <div className="body-container">
        <Header isPhone={isPhone} />
        <BottomCards isTablet={isTablet} isPhone={isPhone} />
      </div>
    </>
  );
}
