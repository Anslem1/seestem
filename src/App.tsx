import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

function App() {
     return (
          <>
               <div className="app-container">
                    <Navbar />
                    <Hero />
               </div>
               
          </>
     );
}

export default App;
