import React, { useState } from 'react'
import './Calculator.css'

export function Calculator() {
  const [row, setRow] = useState([
    { name: '示例1', price: 25, quantity: 3, total: 75 },
    { name: '示例2', price: 32, quantity: 4, total: 128 },
  ])

  function handleName(e, index) {
    row[index].name = e.target.value
    setRow([...row])
  }

  function handlePrice(e, index) {
    row[index].price = e.target.value
    setRow([...row])
  }

  function handleQuantity(e, index) {
    row[index].quantity = e.target.value
    row[index].total = row[index].quantity * row[index].price
    setRow([...row])
  }

  function toSum(row) {
    let sum = 0
    row.forEach(item => {
      sum += item.total
    })
    return sum
  }

  function handleAdd() {
    row.push({ name: '', price: '', quantity: '', total: '' })
    setRow([...row])
  }

  function Table() {
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
            )
          })}
        </div>
        <div className="sum">
          <span>总计:</span>
          <span>{toSum(row)}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="wrapper">
      <h1>动态收银表</h1>
      <Table />
      <div>
        <button onClick={handleAdd}>+</button>
        <span>Add Product</span>
      </div>
    </div>
  )
}
