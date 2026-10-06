import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { courses } from "./Data/courses";

function App() {
  return (
    <div className="container">

      <Header />

      <div className="products">
        {/* Adobe Premiere Pro */}
        {/* */}
        {
          courses.map((courses)=>(
          <ProductCard
          Key={courses.id}
          title={courses.title}
          des={courses.des}
          image={courses.image}
          price={courses.price}
          soldOut={courses.soldOut}
          />
          ))

          }

      </div>

        {/*.Bottom */}
        <Footer />
    </div>
  );
}

export default App;




