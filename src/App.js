import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Body from "./Middleware/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
