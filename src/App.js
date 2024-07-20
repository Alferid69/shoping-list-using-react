import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { ShopingList } from "./ShopingList";
import { Footer } from "./Footer";

export function App() {
  const [shopItems, setShopItems] = useState(function () {
    const items = localStorage.getItem("shopItems");
    return JSON.parse(items);
  });

  function handleAddItem(newItem) {
    console.log(newItem);
    setShopItems([...shopItems, newItem]);
  }

  function handleRemoveItem(id) {
    setShopItems(shopItems.filter((item) => item?.id !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("shopItems", JSON.stringify(shopItems));
    },
    [shopItems]
  );

  return (
    <div className="app bg-info container">
      <Header />
      <Form onAddItem={handleAddItem} />
      <ShopingList shopItems={shopItems} onRemoveItem={handleRemoveItem} />
      <Footer />
    </div>
  );
}
