import React, { useEffect, useState } from "react";
import "./App.scss";
import Gallery from "./components/gallery/gallery";
import Form from "./components/form/form";
import Image from "./types/image";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      <Form />
      <Gallery images={images ?? []}></Gallery>
    </div>
  );
};

export default App;
