export default function Stats({ items }) {
  // if no items in the list then no need to perfome calculations simple display this message
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀🥌</em>
      </p>
    );

  // else do this
  //  derived items state 
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything. Ready to go 🪶✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, add you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
