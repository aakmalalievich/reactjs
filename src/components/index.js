import Footer from "./footer";
import Hedaer from "./header";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Hedaer />
      <div className="flex-1">
        <div>{props.children}</div>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
