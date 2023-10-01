import React from "react";
import AppRoutes from "AppRoutes";
import Navbar from "components/navigation/navbar";
import Footer from "components/navigation/footer";

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
