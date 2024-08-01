import Navigation from "./components/Navigation/page";
import Footer from "./components/footer/footer";
import MainContent from "./components/MainContent/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}
