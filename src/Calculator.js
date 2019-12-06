import React, { useState } from 'react'

export function Calculator() {
  const [sum, setSum] = useState(0)
  const [row, setRow] = useState([
    { name: '示例1', price: 25, quantity: 3, total: 75 },
    { name: '示例2', price: 32, quantity: 4, total: 128 },
  ])

  console.log(row, 22)

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
    setSum(total(row))
    setRow([...row])
  }

  function handleTotal() {
    setRow([...row])
  }

  function total(row) {
    for (let i = 0; i < row.length; i++) {
      setSum(sum + row.total)
    }
  }
  function handleAdd() {
    row.push({ name: '', price: '', quantity: '', total: '' })
    setRow([...row])
  }

  function Table() {
    return (
      <div>
        <div>
          <span>产品</span>
          <span>价格</span>
          <span>数量</span>
          <span>合计</span>
        </div>
        <div>
          {row.map((item, index) => {
            return (
              <div key={index}>
                <input
                  placeholder="产品.."
                  value={item.name}
                  onChange={e => handleName(e, index)}
                />
                <input
                  placeholder="价格.."
                  value={item.price}
                  onChange={e => handlePrice(e, index)}
                />
                <input
                  placeholder="数量.."
                  value={item.quantity}
                  onChange={e => handleQuantity(e, index)}
                />
                <input
                  placeholder="合计.."
                  value={item.total}
                  onChange={handleTotal}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1>动态收银表</h1>
      <Table />
      <div>
        <span>总计:</span>
        <span>{sum}</span>
      </div>
      <div>
        <button onClick={handleAdd}>+</button>
        <span>Add Product</span>
      </div>
    </div>
  )
}
