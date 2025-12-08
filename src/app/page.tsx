import Header from "./components/Header/Header";
import BottomCards from "./components/BottomCards/BottomCards";

// TODO remove
import Image from "next/image";
import desktop from '../../public/images/desktop.png'
import tablet from '../../public/images/tablet.png'
import mobile from '../../public/images/mobile.png'

// TODO the current memory is 1.3 GB - can I fix that?

export default function Home() {
  return (
    <>
      <Image className="object-cover" src={mobile} alt={""} />
      <div className="body-container">
        <Header />
        <BottomCards />
      </div>
    </>
  );
}
