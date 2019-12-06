import React, { useState } from "react";
import "../Calculator.css";
import { Table } from "./Table";

export function Calculator() {
  const [row, setRow] = useState([
    { name: "示例1", price: 25, quantity: 3, total: 75 },
    { name: "示例2", price: 32, quantity: 4, total: 128 }
  ]);

  function handleAdd() {
    row.push({
      name: `示例${row.length + 1}`,
      price: "",
      quantity: "",
      total: ""
    });
    setRow([...row]);
  }

  return (
    <div className="wrapper">
      <h1>动态收银表</h1>
      <Table row={row} setRow={setRow} />
      <div>
        <button onClick={handleAdd}>+</button>
        <span>Add Product</span>
      </div>
    </div>
  );
}
