import Header from "./components/Header";
import Books from "./components/Books";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Books
            name="The Psychology of Money"
            author="Morgan Housel"
            img="https://m.media-amazon.com/images/I/81gC3mdNi5L._SL1500_.jpg"
            description="Timeless lessons on wealth, greed, and happiness"
          />
          <Books
            name="The Power of Letting Go"
            author="John Purkiss"
            img="https://hachette.imgix.net/books/9781783253630.jpg?auto=compress&w=440"
            description="How to let go and live the life you want"
          />
          <Books
            name="You Become What You Think"
            author="Shubham Kumar Singh"
            img="https://m.media-amazon.com/images/I/81WYPSP-ngL._SL1500_.jpg"
            description="Master your mind, Master your life"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
