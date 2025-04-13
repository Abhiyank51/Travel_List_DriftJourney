import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Create an event handler to submit the form
  function handleSubmit(e) {
    e.preventDefault(); // to prevent page reload on submitting the form

    // unable to submit form when description field is empty
    if (!description) return;

    // create a new item in area when submit button clicked
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    // after form submited the text input fields go back to initial state as empty
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 🚢 ?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* to convert string to number as e.target.value return string but we need a number for quantity field */}
        {/* create an array from 1 to 20 and print index + 1 in dropdown menu as index start from 0 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}