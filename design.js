const form = document.getElementById('size-pick')
const heightNumber = document.getElementById('height')
const widthNumber = document.getElementById('width')
const colorPicker = document.getElementById('pickcolor')
const pixelTable = document.getElementById('pixeltable')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    pixeltable.innerHTML=''
    makeGrid()
})

pixeltable.addEventListener('click', (e)=>{
    if (e.target.nodeName ==='TD'){
        if (e.target.style.backgroundColor === ''){
            e.target.style.backgroundColor = colorPicker.value;
        } else{
            e.target.style.backgroundColor= '';
        }
    }
})

const makeGrid = () => {
    for (let i = 0; i < heightNumber.value; i++) {
        const row = pixelTable.insertRow(0);
        for (let j = 0; j < widthNumber.value; j++) {
            row.insertCell(0)            
        }
    }
}