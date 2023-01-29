import { useState } from "react";
import Card from "../Card";
import Header from "../Header";
import Result from "../Result";
import s from "./style.module.css";

function App() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      model: "Razer Blade 15",
      img: "https://assets3.razerzone.com/Y9fv8qRtbhHgeb5h7pV3EMKBl5o=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fhd3%2F9286405095454%2F210104-blade-15-ch8-fhd-1500x1000-1.jpg",
      price: 2080,
      count: 3,
    },

    {
      id: 3,
      title: "Mouse",
      model: "Razer Basilisk Ultimate & Mouse Dock",
      img: "https://static.razer.ru/213211/basilisk-ultimate-hero-desktop.jpg",
      price: 130,
      count: 2,
    },
    {
      id: 4,
      title: "Keybord",
      model: "Razer DeathStalker V2 Pro (Low-Profile Linear Optical Switch)",
      img: "https://static.razer.ru/public/VBN7FZrC9XTAiHNmjzqio3/deathstalker-v2-pro-1500x1000-1.jpg",
      price: 280,
      count: 5,
    },
    {
      id: 5,
      title: "Mini keybord",
      model: "Razer Tartarus Pro, Black",
      img: "https://static.razer.ru/217081/razer-tartarus-pro-gallery-photo-1.jpg",
      price: 340,
      count: 1,
    },
    {
      id: 6,
      title: "Cooler",
      model: "Razer Hanbo Chroma",
      img: "https://www.pcgameshardware.de/screenshots/970x546/2021/10/Razer-AiO-Kuehler-pcgh.jpg",
      price: 650,
      count: 2,
    },
    {
      id: 7,
      title: "Clock",
      model: "Razer Liminor",
      img: "https://www.watchtime.net/app/uploads/2022/11/Panerai-Luminor-Quaranta-Razer-Special-Edition-mood.jpg",
      price: 520,
      count: 1,
    },
  ];

  const [currentProducts, setCurrentProducts] = useState(products);

  const deleteProduct = (deletedId) => {
    const newArray = currentProducts.filter(({ id }) => id !== deletedId);
    setCurrentProducts(newArray);
  };
  const changeCount = (id, num) => {
    currentProducts.find((item) => item.id === id).count += num;

    setCurrentProducts([...currentProducts]);
  };

  return (
    <div className={s.page}>
      <Header />
      <div>
        {currentProducts.map((item) => (
          <Card
            key={item.id}
            {...item}
            deleteProduct={deleteProduct}
            changeCount={changeCount}
          />
        ))}
      </div>
      <div>
        <Result currentProducts = {currentProducts} />
      </div>
    </div>
  );
}

export default App;
