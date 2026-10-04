import { useState } from "react"

function App() {
  const [display, setDisplay] = useState("0")
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)

  const addNumber = (number) => {
    if (display === "0") {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const addDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const chooseOperator = (op) => {
    setFirstNumber(Number(display))
    setOperator(op)
    setDisplay("0")
  }

  const calculate = () => {
    if (firstNumber === null || operator === null) {
      return
    }

    const secondNumber = Number(display)
    let result = 0

    if (operator === "+") {
      result = firstNumber + secondNumber
    }

    if (operator === "-") {
      result = firstNumber - secondNumber
    }

    if (operator === "×") {
      result = firstNumber * secondNumber
    }

    if (operator === "÷") {
      if (secondNumber === 0) {
        setDisplay("Error")
        return
      }

      result = firstNumber / secondNumber
    }

    setDisplay(String(result))
    setFirstNumber(null)
    setOperator(null)
  }

  const clearCalculator = () => {
    setDisplay("0")
    setFirstNumber(null)
    setOperator(null)
  }

  const deleteNumber = () => {
    if (display.length === 1) {
      setDisplay("0")
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">

      <div className="w-full max-w-sm rounded-3xl border border-gray-700 bg-gray-800 p-5 shadow-2xl">

        {/* Toyota Logo */}
        <div className="mb-5 text-center">
          <h1 className="text-3xl font-bold tracking-[0.3em] text-white">
            TOYOTA
          </h1>

          <p className="mt-1 text-xs tracking-widest text-gray-300">
            CALCULATOR
          </p>
        </div>

        {/* Display */}
        <div className="mb-5 rounded-xl border border-gray-700 bg-black p-5 text-right">
          <p className="overflow-hidden text-4xl font-semibold text-green-400">
            {display}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

          {/* Row 1 */}
          <button
            onClick={clearCalculator}
            className="rounded-xl bg-red-500 p-4 text-xl font-bold text-white hover:bg-red-600"
          >
            AC
          </button>

          <button
            onClick={deleteNumber}
            className="rounded-xl bg-gray-500 p-4 text-xl font-bold text-white hover:bg-gray-600"
          >
            DEL
          </button>

          <button
            onClick={() => chooseOperator("÷")}
            className="rounded-xl bg-orange-500 p-4 text-xl font-bold text-white hover:bg-orange-600"
          >
            ÷
          </button>

          <button
            onClick={() => chooseOperator("×")}
            className="rounded-xl bg-orange-500 p-4 text-xl font-bold text-white hover:bg-orange-600"
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            onClick={() => addNumber("1")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            1
          </button>

          <button
            onClick={() => addNumber("2")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            2
          </button>

          <button
            onClick={() => addNumber("3")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            3
          </button>

          <button
            onClick={() => chooseOperator("+")}
            className="rounded-xl bg-orange-500 p-4 text-xl font-bold text-white hover:bg-orange-600"
          >
            +
          </button>

          {/* Row 3 */}
          <button
            onClick={() => addNumber("4")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            4
          </button>

          <button
            onClick={() => addNumber("5")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            5
          </button>

          <button
            onClick={() => addNumber("6")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            6
          </button>

          <button
            onClick={() => chooseOperator("-")}
            className="rounded-xl bg-orange-500 p-4 text-xl font-bold text-white hover:bg-orange-600"
          >
            −
          </button>

          {/* Row 4 */}
          <button
            onClick={() => addNumber("7")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            7
          </button>

          <button
            onClick={() => addNumber("8")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            8
          </button>

          <button
            onClick={() => addNumber("9")}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            9
          </button>

          <button
            onClick={addDecimal}
            className="rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            .
          </button>

          {/* Row 5 */}
          <button
            onClick={() => addNumber("0")}
            className="col-span-3 rounded-xl bg-gray-600 p-4 text-xl font-bold text-white hover:bg-gray-500"
          >
            0
          </button>

          <button
            onClick={calculate}
            className="rounded-xl bg-green-500 p-4 text-xl font-bold text-white hover:bg-green-600"
          >
            =
          </button>

        </div>

        <p className="mt-5 text-center text-xs text-gray-400">
          Simple React Calculator
        </p>

      </div>

    </div>
  )
}

export default App