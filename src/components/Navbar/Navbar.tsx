import "./Navbar.css";

function Navbar() {
     return (
          <>
               <div className="nav-pill"></div>
               <div className="nav-container">
                    <div className="nav-content">
                         <h1>seestem</h1>
                         <div>
                              <p>Work</p>
                              <p>Services</p>
                              <p>Pricing</p>
                              <p>FAQs</p>
                         </div>
                         <button>Have an Idea?</button>
                    </div>
               </div>
          </>
     );
}

export default Navbar;
