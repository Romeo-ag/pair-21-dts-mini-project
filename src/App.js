import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import HomePage from "./containers/Home";
import ListMovies from "./containers/ListMovies";

function App() {
  return (
    <div className="App" style={{ background: "conic-gradient(at left top, rgb(14, 165, 233), rgb(254, 215, 170), rgb(202, 138, 4))" }}>
      <NavBar />
      <HomePage />
      <section style={{ paddingLeft: 16, paddingRight: 16 }}>
        <ListMovies />
      </section>
      <Footer />
    </div>
  );
}

export default App;
