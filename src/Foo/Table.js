import React, { useState } from "react";
import "../Calculator.css";

export function Table(props) {
  const { row, setRow } = props;

  function handleName(e, index) {
    row[index].name = e.target.value;
    setRow([...row]);
  }

  function handlePrice(e, index) {
    // 拒绝输入非数值
    if (Number(e.target.value) !== Number(e.target.value)) {
      return;
    }
    row[index].price = e.target.value;
    row[index].total = row[index].quantity * row[index].price;
    setRow([...row]);
  }

  function handleQuantity(e, index) {
    // 拒绝输入非数值
    if (Number(e.target.value) !== Number(e.target.value)) {
      return;
    }
    row[index].quantity = e.target.value;
    row[index].total = row[index].quantity * row[index].price;
    setRow([...row]);
  }

  // 函数名要有意义，而且最好是一个动词，描述这个函数是干什么用的
  // 这里更加合适使用`reduce`来计算
  function calculateSum(row) {
    return row.reduce((acc, item) => item.total + acc, 0);
  }

  return (
    <div className="table">
      <div className="tableTitle">
        <span className="title">产品</span>
        <span className="title">价格</span>
        <span className="title">数量</span>
        <span className="title">合计</span>
      </div>
      <div>
        {row.map((item, index) => {
          return (
            <div className="row" key={index}>
              <input
                placeholder="产品.."
                value={item.name}
                onChange={e => handleName(e, index)}
                className="cell"
              />
              <input
                placeholder="价格.."
                value={item.price}
                onChange={e => handlePrice(e, index)}
                className="cell"
              />
              <input
                placeholder="数量.."
                value={item.quantity}
                onChange={e => handleQuantity(e, index)}
                className="cell"
              />

              <span className="cell">{item.total}</span>
            </div>
          );
        })}
      </div>
      <div className="sum">
        <span>总计:</span>
        <span>{calculateSum(row)}</span>
      </div>
    </div>
  );
}
