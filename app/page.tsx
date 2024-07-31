import Link from "next/link";
import Navigation from "./componsnts/Navigation/page";
import Footer from "./componsnts/footer/footer";
import { Main } from "next/document";
import MainContent from "./componsnts/MainContent/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}
