import Header from "./components/Header";
import Footer from "./components/Footer";
import Books from "./components/Books";

export default function App() {
  return(
    <div>
      <p>Working with props</p>
      <Header/>
      <main>
        <Books name="The Psychology of Money" author="Morgan Housel" img="https://minoa.com/cdn/shop/files/66_26de911f-e91f-4ef3-a5f8-54707df59802_1512x.jpg?v=1756464897" description="Timeless lessons on wealth, greed, and happiness"/>
        <Books name="The Power of Letting Go" author="John Purkiss" img="https://hachette.imgix.net/books/9781783253630.jpg?auto=compress&w=440" description="How to let go and live the life you want"/>
        <Books name="You Become What You Think" author="Shubham Kumar Singh" img="https://m.media-amazon.com/images/I/81WYPSP-ngL._SL1500_.jpg" description="Master your mind, Master your life"/>
      </main>
      <Footer/>
      

    </div>
  )
}