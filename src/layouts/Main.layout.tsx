import Navbar from "../components/NavBar";
import SlideBar from "../components/SlideBar";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50">

      {/* Sidebar (floating button + drawer) */}
      <SlideBar />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default MainLayout;