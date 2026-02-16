import { Images } from "./stores/imageData";
import Image from "./components/Image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      {/* {[<p key={1}> Hello1</p>, <p key={2}> Hello2</p>]} */}

      {Images.map((image) => {
        return (
          <Image
            key={image.id}
            name={image.name}
            author={image.author}
            description={image.description}
            img={image.img}
          />
        );
      })}
      <Footer />
    </div>
  );
}
