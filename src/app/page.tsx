'use client'

import Header from "./components/Header/Header";
import BottomCards from "./components/BottomCards/BottomCards";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

// TODO Remove
import Image from "next/image";
import desktop from '../../public/images/desktop.png'
import tablet from '../../public/images/tablet.png'
import mobile from '../../public/images/mobile.png'


export default function Home() {
  return (
    <>
      {/* 
        Because "in" on the header can be before or after the Marquee, it can jump in a disconcerting way so 
        I'm add a loading screen here to screen the component while it assumes its final form so that the user
        has a smoother experience.
       */}
      <LoadingScreen />
      <div className="body-container">
        <Image className="background-template" src={mobile} alt={""} />
        <Header />
        <BottomCards />
      </div>
    </>
  );
}
