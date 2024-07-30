import Feature from "@/element/home/feature";
import Intro from "@/element/home/intro";
import FooterNav from "@/element/nav/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed">
        <Image
          className="z-0"
          src={
            "https://res.cloudinary.com/dankoyuki/image/upload/v1715683730/KohoLink/cyw1bsyklzlgoxztwddy.png"
          }
          alt="background"
          width={1920}
          height={1440}
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="relative z-0">
        <Intro />
        <Feature />
        <FooterNav />
      </div>
    </main>
  );
}
