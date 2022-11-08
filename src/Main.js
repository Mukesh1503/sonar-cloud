import Header from "./header_and_footer/Header";
import Footer from "./header_and_footer/Footer";
import Card from "./main-body/Card";

function Main() {
  return (
    <>
      <Header />
      <Card className="sample-card" />
      <Footer />
    </>
  );
}

export default Main;
