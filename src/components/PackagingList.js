import { useState } from "react";
import  Item  from "./Item";

export default function PackagingList({ items, onDeleteItem, onToggleItems, onDeleteList }) {

  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items; // if input is the sorted criteria we display the original array of items no change 
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)); // localecompare compare strings alphabetically
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed)); //true becomes 1, false becomes 0.
  if (sortBy === 'quantity') sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity); // sort by quantity

  // slice create a new array becauze we do not want to mutate the original array and then the process to sort the array
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="quantity">Sort by quantity</option>
        </select>

        <button onClick={onDeleteList}>Clear List</button>
      </div>
    </div>
  );
}
