function getAndUpdate() {
    tit = document.getElementById('title').value
    desc = document.getElementById('description').value
    console.log("updating list ....")
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    update();
}
function update() {
    // populate the table
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    } 
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }          
    let tablebody = document.getElementById("tablebody")
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary"onclick=deleted(${index})>Delete</button></td>
            </tr>`;

    });
    tablebody.innerHTML = str;
}
add = document.getElementById("add")
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex)
    itemJsonArrayStr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //delete itemindex element from the array
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    update();
}
function clearStorage(){ 
if (confirm("do you really want to clear?")){
console.log('clearing the Storage')
localStorage.clear();
update();
}
}

