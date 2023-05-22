import React from 'react'

const CalculateResult = ({ item, operators }) => {
  const { num1: n1, num2: n2, menu } = item

  const calculate = () => {
    switch (menu) {
      case 1:
        return n1 + n2
      case 2:
        return n1 - n2
      case 3:
        return n1 * n2
      case 4:
        return n1 / n2
      case 5:
        return n1 % n2
    }
  }

  return (
    <div className="pt-4">
      Result: {n1} {operators[menu - 1]} {n2} = {calculate()}
    </div>
  )
}

export default CalculateResult
