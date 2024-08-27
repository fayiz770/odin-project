const scale = document.querySelector('.scale')

const graphs = document.querySelector('.graphs')

scale.addEventListener('click', () => {
    console.log('hello')
})
document.addEventListener('click', e => {
    if(e.target.dataset.change){
        console.log('hello')
        graphs.style.gridTemplateColums = `repeat(${scale}, 1fr)`
        graphs.style.gridTemplateRows = `repeat(${scale}, 1fr)`
        for(let i = 0; i < scale * scale; i++){
            const gridElement = document.createElement('div')
            gridElement.classList.add('grid-element')
            gridElement.addEventListener('mouseover', changeColor)
            graphs.appendChild(gridElement)
        }
    }
})