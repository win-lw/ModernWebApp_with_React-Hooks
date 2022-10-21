// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Logo />
      <Header />
      <Footer title='Facebook' urls='www.facebook.com'
      isOpen={true} postcode={1200} />
      <hr />

      <Sidebar />


      <hr />

      <Menu />

    </div>
  );
}

export default App;
