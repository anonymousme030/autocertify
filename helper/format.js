// This function's purpose was to format currency and its returning undefined, check later
// Formatting of currency
const currency = (input) => {
  let output
  input.toString()

  // Set
  input = input.substring(1)
  if (input !== null) {
    input = input.split(',').join('')
    input = parseInt(input)
    output = input
  }

  // Get
  let val = parseInt(output)
  val = val.toLocaleString()
  if (val === 'NaN') {
    output = ''
  } else {
    output = val
  }

  // Number
  const number = output.split(',').join('')

  return {
    output,
    number
  }
}

export default {
  currency
}
