import { useState } from "react";
import Logo from './Logo'
import Form from './Form'
import  PackagingList  from "./PackagingList";
import  Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]); // initial setItems as an empty array
  // const [items, setItems] = useState(initialItems);.

  function handleAddItems(item) {
    setItems((items) => [...items, item]); // instead of mutate current array - create a new array and which contains all the current items by syntax ...items and all the new items
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // if item.id is equal to the id that we pass then that item is delete by filter by creating a new array wothout that item
    // when filter function get false as when item.id === id it get false so then he remove it otherwise if truw come then no problem
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteList(){
    const confirmed = window.confirm('Are you sure that you want to delete all items');
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onDeleteList={handleDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}




