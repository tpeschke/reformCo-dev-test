'use client'

import Header from "./components/Header/Header";
import BottomCards from "./components/BottomCards/BottomCards";

import { mediaQueryHook } from "./utilities/mediaQueryHook";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

export default function Home() {
  const isTablet = mediaQueryHook(1024)
  const isPhone = mediaQueryHook(500)

  return (
    <>
      {/* 
        Because "in" on the header can be before or after the Marquee, it can jump in a disconcerting way so 
        I'm add a loading screen here to screen the component while it assumes its final form so that the user
        has a smoother experience.
       */}
      <LoadingScreen />
      <div className="body-container">
        <Header isPhone={isPhone} />
        <BottomCards isTablet={isTablet} isPhone={isPhone} />
      </div>
    </>
  );
}
