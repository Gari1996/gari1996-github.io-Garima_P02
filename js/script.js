// all the li elements are selected and saved as lists
const lists = document.querySelectorAll(`li`);
// all the node lists are converted into array
const list = Array.from(lists);
// pageNumber length is calculated
const pageNumber = Math.ceil(list.length / 10);

// variable info as in information is created, where list is saved as queryData, current page is choosen as 1 and items per page are decided to be 10.
// When the items per page are changed, the number of pages will also change.
var info = { 'queryData' : list,
             'currentPage': 1,
            'itemsPerPage': 10}
          
// Grabbing the data and trimming it
// a function is created under name as pagination which accepts 3 parameters mentioned in info variable
function pagination(queryData, currentPage, itemsPerPage){
    // Here, I am checking the starting, end points and also trimming the data according to my need.
    const trimStarting = (currentPage - 1)* itemsPerPage;
    const trimEnding = (trimStarting + itemsPerPage);
    const trimmedData = queryData.slice(trimStarting, trimEnding);
    // defining the number of pages
    const noOfPages = Math.ceil(queryData.length/itemsPerPage);
    console.log(trimmedData);
    return{
        'queryData': trimmedData,
        'noOfPages':noOfPages
    }
}

// another function pageButtons is created which accepts one parameter and it is created as it creating the buttons and also 
// addEventListener is created on clicking these buttons
function pageButtons(noOfPages){
     let button = document.querySelector(`#pagination`);
     button.innerHTML = "";
         
    for(let currentPage = 1; currentPage < noOfPages+1; currentPage++){
    let but = document.createElement("button");
    but.className = `${currentPage}`;
    text = `${currentPage}`;
    let textNode = document.createTextNode(text);
    but.appendChild(textNode);
    but.innerHTML = `${currentPage}`;
    console.log(but);
    button.style.padding = "5px 5px 5px";
    button.style.margin = "30px 1px 6px 1px";
    button.style.alignContent = "center";
    button.style.textAlign = "center";
    button.style.position = "relative"; 
       console.log(button);
       button.appendChild(but);
   // add event listener
       button.addEventListener(`click`, function(event){
       event.preventDefault();
       document.querySelector(`#li-body`).innerHTML = "";
      console.log(button); 
      for(i = 1; i <= noOfPages; i++){
       if(event.target.className == i){
           info.currentPage = i;
       }  
   }
     modifiedData();  
   }) 
    }
   }

// function for building the data
function modifiedData(){
    var contact = document.querySelector(`#li-body`);
    const data = pagination(info.queryData, info.currentPage, info.itemsPerPage);// callback
    console.log(info.itemsPerPage);
    console.log(data);
    modifyData = data.queryData;
    console.log(modifyData);
    var li = document.querySelectorAll(`li`);
    //ul.removeChild(li);
    for(var i = 1 in modifyData){
        const head = document.querySelector(`ul`);
        // data is hidded here.
        head.style.visibility = "hidden";
       var itemPerPage = modifyData[i];
       // data is added according to need
     if(itemPerPage == modifyData[i]){
        head.innerHTML = itemPerPage; 
    }
    console.log(itemPerPage);
  // items per page are added in ul 
    contact.append(itemPerPage);
   //console.log(contact.append(itemPerPage));
     }
    pageButtons(data.noOfPages);  
}      
modifiedData();