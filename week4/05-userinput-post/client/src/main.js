

console.log(`running`)

const form=document.getElementById('form')

async function handleSubmit(e){
  e.preventDefault()
  console.log("Submitted the form")

  const data = new FormData(form)

  const userInput = Object.fromEntries(data)
  console.log(userInput)

  const userInputJSON = JSON.stringify(userInput)
  console.log(userInput, userInputJSON)

  const display = await fetch(`http://localhost:7070/jokes`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: userInputJSON
  })

  const res = await display.json()
  console.log(res)

}

form.addEventListener('submit', handleSubmit)

