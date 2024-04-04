import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <header className="h-32 px-4 md:px-32 flex flex-col justify-center">
        <Header />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
