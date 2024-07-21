import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import Hero from "@/components/content/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div>ddefdegf</div>
      <Link className={buttonStyles()} href="/about">
        <h1>t</h1>
      </Link>
      <Link className={buttonStyles()} href="/about">
        ergrgrgrg
      </Link>
    </>
  );
}
