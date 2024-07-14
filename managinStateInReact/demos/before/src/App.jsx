import { useState, React } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { Routes, Route, useParams } from "react-router-dom";

export default function App() {
  const [size, setSize] = useState("");
  const {
    data: products,
    loading,
    error,
  } = useFetch("products?category=shoes");

  const { id } = useParams();

  console.log(id);
  const filteredProducts = size
    ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : products;

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  if (error) throw error;
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </section>
          <section id="products">
            {filteredProducts.map((p) => renderProduct(p))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
