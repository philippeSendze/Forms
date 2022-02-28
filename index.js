const form = document.getElementById('form')
const space = document.getElementById('space')
const inputs = []
const colors = ["red", "blue", "green", "brown", "lila", "orange", "purple"]
let colorIndice = -1


const exists = (value) => 
{
    for(let input of inputs) 
    {
        if(input.nom == value) return input
    }
    return null
}

const colorIndiceIncrementor = () => 
{
    if(colorIndice<colors.length-1)
    {   
        colorIndice++
        console.log(colorIndice)
    }
    else 
    {
        colorIndice = 0
        console.log(colorIndice)
    }
    return colors[colorIndice]
}

form.addEventListener('submit', (event) => 
{
    event.preventDefault()
    const nom = document.getElementById('nom').value
    let input = new Object
    if(exists(nom) ==null) 
    {
        input = new Object()
        input.nom = nom
        input.count = 0
        input.color = colorIndiceIncrementor()
        inputs.push(input)
    }
    else 
    {
        input = exists(nom)  
    }
    input.count++
    
    const span = document.createElement('span')
    span.style.color = input.color
    span.innerHTML = input.count
    const li = document.createElement('li')
    li.innerHTML += nom + ", "
    li.appendChild(span)
    li.innerHTML += " fois!"
    space.appendChild(li)
})