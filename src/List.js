import { useState } from "react";

export function List({ item, onRemoveItem }) {
  const [bought, setBought] = useState(false);
  const style = { textDecoration: "line-through" };
  const normal = { textDecoration: "none" };

  function handleDelete() {
    onRemoveItem(item.id);
  }

  return (
    <div className="d-flex gap-3 me-5">
      <input
        type="checkbox"
        checked={bought}
        onClick={() => setBought(!bought)}
      />
      <label className="h3" style={bought ? style : normal}>
        {" "}
        {item.amount} {item.name}
      </label>
      <button className="btn btn-danger " onClick={handleDelete}>
        X
      </button>
    </div>
  );
}
