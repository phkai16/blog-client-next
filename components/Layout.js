import Banner from "./Banner";
import Breadcrumbs from "./Breadcrumb";
import CardList from "./CardList";
import Footer from "./Footers";
import Header from "./Header";
import TabsGroup from "./TabsGroup";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      {/* <Breadcrumbs /> */}
      {/* <TabsGroup /> */}
      {/* <CardList /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
