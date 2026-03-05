import { coral_pixel } from "@/app/layout";
import Image from "next/image";
import beetle from "../../public/beetle.webp";

export default function Quote() {
  return (
    <div>
      {/* the height and width here are so that next can reserve the space on the page - in the correct aspect ratio - we can still resize it in css ect.  */}
      <Image src="/beetle.webp" height={900} width={1200} alt="" />

      {/* If you do this method, we don't have to supply the height and width */}

      {/* <Image src={beetle} alt=""/> */}

      {/* if you're using an image from the web: have to give it a height and width 
            - and you need to edit your next.config.mjs 
            - to allow images from outside sources
        
        */}

      <Image
        src={`https://cdn.britannica.com/31/260831-050-6409C38B/A-rainbow-scarab-beetle-male-Phanaeus-vindex-on-sand.jpg`}
        alt=""
        height={1280}
        width={1600}
      ></Image>

      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
        As Gregor Samsa awoke one morning from uneasy dreams he found himself
        transformed in his bed into a{" "}
        <span className={`${coral_pixel.className}`}>gigantic insect.</span> He
        was lying on his hard, as it were armor-plated, back and when he lifted
        his head a little he could see his dome-like brown belly divided into
        stiff arched segments on top of which the bed quilt could hardly keep in
        position and was about to slide off completely. His numerous legs, which
        were pitifully thin compared to the rest of his bulk, waved helplessly
        before his eyes.{" "}
      </p>
      <br />
      <span className="font-honk">What has happened to me? he thought.</span>
      <span className="foo">Foo bar baz</span>
    </div>
  );
}
