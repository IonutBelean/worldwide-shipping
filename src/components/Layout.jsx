import Footer from "./Footer";
import Header from "./Header";
import TopNav from "./TopNav";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <TopNav />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
