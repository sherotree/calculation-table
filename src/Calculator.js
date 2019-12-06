import React, { useState } from 'react'

export function Calculator() {
  const [total, setTotal] = useState(0)
  const [row, setRow] = useState([
    { name: '示例1', price: 25, quantity: 3, total: 75 },
    { name: '示例2', price: 32, quantity: 4, total: 128 },
  ])

  function handlePrice(e, index) {
    setRow(e.target.value)
    console.log(row.price)
  }

  function handleQuantity() {}

  function handleTotal() {}

  function handleAdd() {
    row.push(
      <div>
        <input placeholder="产品.." value={row.name} />
        <input
          placeholder="价格.."
          value={row.price}
          onChange={e => handlePrice(e)}
        />
        <input
          placeholder="数量.."
          value={row.quantity}
          onChange={e => handleQuantity(e)}
        />
        <input
          placeholder="合计.."
          value={row.total}
          onChange={e => handleTotal(e)}
        />
      </div>,
    )
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
              <div>
                <input placeholder="产品.." value={item.name} />
                <input placeholder="价格.." value={item.price} />
                <input placeholder="数量.." value={item.quantity} />
                <input placeholder="合计.." value={item.total} />
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
        <span>{total}</span>
      </div>
      <div>
        <button onClick={handleAdd}>+</button>
        <span>Add Product</span>
      </div>
    </div>
  )
}
