import Header from "./components/Header/Header";
import BottomCards from "./components/BottomCards/BottomCards";

// TODO remove
import Image from "next/image";
import desktop from '../../public/images/desktop.png'
import tablet from '../../public/images/tablet.png'

export default function Home() {
  return (
    <>
      <Image className="object-cover" src={tablet} alt={""} />
      <div className="body-container">
        <Header />
        <BottomCards />
      </div>
    </>
  );
}
