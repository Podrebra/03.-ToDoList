// const body = document.querySelector('body')
// const dashboard = document.querySelector('.dashboard')
// const input = document.getElementById('business_input')
// const holdColumn = document.querySelector('.hold_column')
// const doneColumn = document.querySelector('.done_column')
// let liItemsNodes = document.querySelectorAll('.item')

// input.addEventListener('keydown', createItems);

// const items = [
//     {
//         value: 's',
//         id: '1',
//         done: false
//     }
// ]


// function renderItems(items) {
//     items.map(el => {
//         el.done === false ? 
//         holdColumn.children[1].insertAdjacentHTML('beforeend', `<li id="${el.id}" class="item" draggable="true">${el.value}</li>`)
//         :
//         doneColumn.children[1].insertAdjacentHTML('beforeend', `<li id="${el.id}" class="item" draggable="true">${el.value}</li>`)
//     })
// };

// function createItems(e) {
//         if (e.code === 'Enter' && e.target.value !== '')
//         {
//             items.push({value: e.target.value, id: getRandomId(), done: false})
//             e.target.value = ''
            
//         }
        
// }

// function getRandomId(min = 0, max = 1000) {
//     return Math.floor(Math.random() * (max - min) + min)
//



