import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
