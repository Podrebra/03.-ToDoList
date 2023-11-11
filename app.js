const holdItemsArray = localStorage.getItem('holdItems') ? JSON.parse(localStorage.getItem('holdItems')) : []
const doneItemsArray =localStorage.getItem('DoneItems') ? JSON.parse(localStorage.getItem('DoneItems')) : []

const dashboard = document.querySelector('.dashboard')
const input = document.getElementById('business_input')
const holdColumn = document.querySelector('.hold_column')
const doneColumn = document.querySelector('.done_column')
const body = document.querySelector('body')
let liHoldItemsNodes = document.querySelectorAll('.hold_column .item')
let liDoneItemsNodes = document.querySelectorAll('.done_column .item')
const clear_doneItems = document.getElementById('clear_doneItems')


clear_doneItems.onclick = clearDoneItems;

window.ondragover = allowDrop;

window.ondrop = drop;

input.addEventListener('keydown', createLiElem)

function clearDoneItems(e) {
    doneItemsArray.length = 0;
    localStorage.setItem('DoneItems', JSON.stringify(doneItemsArray));
    location.reload()
}

function allowDrop(e) {
    e.preventDefault()
}

function setDragEvent(items, index) {
    items.forEach((item, index)=>{
        item.ondragstart = drag;
        item.ondragend = dragEnd;
    })
}

function drag(e) {
    e.dataTransfer.setData('id', e.target.id)
    e.target.style.opacity = '0.3'
}

function dragEnd(e) {
    e.target.style = ''
    if (e.target.dataset.column === 'hold_column') {
        localStorage.setItem('holdItems', JSON.stringify(holdItemsArray))
    }
    displayHoldItems()
    location.reload()
}

function drop(e) {
    let itemId = e.dataTransfer.getData('id')
    console.log(holdItemsArray[itemId]);
    if (e.target === doneColumn) {
        e.target.append(liHoldItemsNodes[itemId]);
        doneItemsArray.push(holdItemsArray[itemId])
        holdItemsArray.splice(itemId, 1)
        localStorage.setItem('holdItems', JSON.stringify(holdItemsArray))
        localStorage.setItem('DoneItems', JSON.stringify(doneItemsArray))
        e.dataTransfer.setData('id', e.target.id)
    } else if (e.target === holdColumn) {
        e.target.append(liDoneItemsNodes[itemId]);
        holdItemsArray.push(doneItemsArray[itemId])
        doneItemsArray.splice(itemId, 1)
        localStorage.setItem('DoneItems', JSON.stringify(doneItemsArray))
        localStorage.setItem('holdItems', JSON.stringify(holdItemsArray))
        e.dataTransfer.setData('id', e.target.id)
    }

    displayHoldItems()
    displayDoneItems()
}

function createLiElem(e) {
    if (e.code === 'Enter' && e.target.value !== '')
    {
        holdItemsArray.push(e.target.value)
        localStorage.setItem('holdItems', JSON.stringify(holdItemsArray))
        location.reload()
    }
}

function displayHoldItems() {
    let holdItems = ''
    for (let i = 0; i < holdItemsArray.length; i++) {
        holdItems += `<li class="item" id=${i} draggable="true">${holdItemsArray[i]}</li>`
    }
    holdColumn.innerHTML = holdItems
};

function displayDoneItems() {
    let doneItems = ''
    for (let i = 0; i < doneItemsArray.length; i++) {
        doneItems += `<li class="item" id=${doneItemsArray.length} draggable="true">${doneItemsArray[i]}</li>`
    }
    doneColumn.innerHTML = doneItems
    
};

displayDoneItems()
displayHoldItems()

liHoldItemsNodes = document.querySelectorAll('.hold_column .item')
liDoneItemsNodes = document.querySelectorAll('.done_column .item')

function definingDifferences(nodeLists, column) {
    nodeLists.forEach((li, index)=>{
        if (li.parentNode === column) {
            li.dataset.column = column.className
            li.id = index
        }
    })

}

definingDifferences(liHoldItemsNodes, holdColumn)
definingDifferences(liDoneItemsNodes, doneColumn)

console.log(liHoldItemsNodes);
console.log(liDoneItemsNodes);

setDragEvent(liHoldItemsNodes)
setDragEvent(liDoneItemsNodes)