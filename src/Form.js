import { useState } from "react";

export function Form({ onAddItem }) {
  const [amount, setAmout] = useState(1);
  const [name, setName] = useState("");

  function handleSelect(e) {
    setAmout(Number(e.target.value));
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") return;
    const newItem = { id: crypto.randomUUID(), amount, name, bought: false };
    onAddItem(newItem);
    setAmout(1);
    setName("");
  }

  return (
    <div className="">
      <form
        className="form d-flex align-items-center justify-content-center bg-dark p-4 gap-5 mb-3"
        onSubmit={handleSubmit}
      >
        <div className="d-flex align-items-center justify-content-center col-3">
          <label className="form-label text-light me-3 h2">Amount: </label>
          <select
            className="form-select"
            value={amount}
            onChange={handleSelect}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex align-items-center justify-content-center form-group col-6">
          <label className="form-label text-light ps-5 pe-1 h2">Name: </label>
          <input
            type="text"
            className="form-control pe-5"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="form-group col-2 d-flex align-items-center justify-content-center">
          <button className="btn btn-outline-primary pe-4 pt-3 ps-4 pb-3">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
