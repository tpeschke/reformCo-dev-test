import styles from "./css/page.module.css";
import Header from "./components/Header/Header";
import BottomCards from "./components/BottomCards/BottomCards";

// TODO remove
import Image from "next/image";
import background from '../../public/images/test.png'

export default function Home() {
  return (
    <div>
      <Image className="object-cover" src={background} alt={""} />
      <Header />
      <BottomCards />
    </div>
  );
}
