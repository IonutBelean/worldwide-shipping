import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import TopNav from "./TopNav";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <TopNav />
      <Logo />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
