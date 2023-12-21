
const tableTogglers = document.querySelectorAll('[data-table-target]');

tableTogglers.forEach(togglers =>{
    togglers.addEventListener("click", e=>{
        fetchTable(togglers.dataset.tableTarget);
    })
})


fetchTable('announcements')


async function fetchTable(type) {


    tableTogglers.forEach(togglers =>{
        togglers.classList.remove('underline')

        if(togglers.dataset.tableTarget == type){
            togglers.classList.add('underline')
        }
    })



    const table = document.getElementById('table');
    const tableBody = table.querySelector('tbody');
  
    // Fetch data
    const res = await fetchData(type);
    const data = res.data; // Assuming 'data' is the array of objects containing table information
  

    table.innerHTML = '';

    const headersHTML = Object.keys(data[0])
      .map(header => `<th>${formatter.capitalizeFirstLetter(header)}</th>`)
      .join('');
    const headerRow = `<tr class="theaders bg-primary/20">${headersHTML}<th></th></tr>`;
    table.innerHTML += headerRow;
  
    data.forEach(row => {
        const id = row[`${type}_id`];
        const rowHTML = Object.entries(row)
          .map(([key, value]) => {
            if (key === 'created_at') {
              // Assuming you have a formatDate function
              value = formatter.formatDate(value, 'long'); // 'long' can be changed based on your requirements
            }
            return `<td>${value}</td>`;
          })
          .join('');
      
        const buttonsHTML = `
          <td class="flex gap-2">
            <button class="edit-row" data-modal-target="edit-${type}" data-id="${id}" onclick="edit${type}(${id})">Edit</button>
            <button class="delete-row" data-modal-target="edit${type}" data-id="${id}" >Delete</button>
          </td>
        `;
      
        table.innerHTML += `<tr>${rowHTML}${buttonsHTML}</tr>`;
      });
      
    
  }
  
  
  
  

  