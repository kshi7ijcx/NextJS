"use client";
import { useState, useEffect } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setProduct(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return <div>
    {product.map((todo)=>(
    <div key={todo.id}>
        <h1>{todo.title}</h1>
        <h1>{todo.body}</h1>
      </div>
    ))}
  </div>;
};
export default Home;
