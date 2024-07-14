import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import Products from "./Products";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <Products />
        </main>
      </div>
      <Footer />
    </>
  );
}
