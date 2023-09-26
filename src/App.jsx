import React from "react";
import AppRoutes from "AppRoutes";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
