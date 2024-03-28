import "./App.css";
import Footer from "./component/footer";
import MainSection from "./component/mainSection";
import { TopBar } from "./component/topBar";

function App() {
  return (
    <div>
      <TopBar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
