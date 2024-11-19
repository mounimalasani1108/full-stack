//as this is db, we are using const
const tables=[
    {id:"table1",name:"Table-1",total:0,items:{}},
    {id:"table2",name:"Table-2",total:0,items:{}},
    {id:"table3",name:"Table-3",total:0,items:{}},
];

const menuItems=[
    {id:"item1", name:"biryani", price:10.00, type:"main course"},
    {id:"item2", name:"pizza", price:10.00, type:"main course"},
    {id:"item3", name:"panneer tikka", price:10.00, type:"starter"},    
];

document.addEventListener("DOMContentLoaded",()=>{
    renderMenu(menuItems);
    renderTable(tables);
});

function renderMenu(menuItems){
    const menuContainer=document.getElementById("menu-container");
    menuContainer.innerHTML='';
    menuItems.forEach(item=>{
        const menuItem=document.createElement("div");
        menuItem.className="menu-item";
        menuItem.id=item.id;
        menuItem.draggable=true;
//dataset helps in storing the data in attributes
        menuItem.dataset.name=item.name;
        menuItem.dataset.type=item.type;
        menuItem.dataset.price=item.price;

        menuItem.innerHTML=`
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(0)}</p>
        `
        menuContainer.append(menuItem);
        menuItem.addEventListener("dragstart",dragStart);
    });
}

function renderTable(tables){
    const tableContainer=document.getElementById("tables-container");
    tableContainer.innerHTML='';

    tables.forEach(table=>{
        const tableCard=document.createElement("div");
        tableCard.className="table-card";
        tableCard.id=table.id;
        tableCard.innerHTML=`
        <h3>${table.name}</h3>
        <p>Total: ${table.total.toFixed(2)}</p>
        <p>Items</p>
        `;

        tableContainer.append(tableCard);
        tableCard.addEventListener("dragover", dragOver);
        tableCard.addEventListener("drop",dropItem);

    });
}

function dragStart(e){
    //in this, we need to store the ref of elem that uer dragged
//data is stored in data transfer.to stor the data, there
//will be one method called setData. it takes 2 arguments.
//1st is which type of data we want to drag
//which particular elem is targetting    
    e.dataTransfer.setData("text/plain", e.target.id);
};

function dragOver(e){
    e.preventDefault();//allow drop
};

function dropItem(e){
    console.log("dropped");
//prevents the default action(by default opens as link for some ele)
    e.preventDefault();
//targetting the data which is stored in dataTransfer in line 63    
    const itemId=e.dataTransfer.getData("text");
//targetting the elem based on id above
    const itemElement=document.getElementById(itemId);
    const itemName=itemElement.dataset.name;
    const itemPrice=parseFloat(itemElement.dataset.price);
    const tableId=e.target.id;
}