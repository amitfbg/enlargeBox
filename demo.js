/* 
* @function: enlargeBox
* @Description: This will add className to child as well as its Parent
* @Param: {object} e which we get from client
* @Author: Amit Kumar
*/


function enlargeBox(e){
    var selectedEl = document.querySelector(".selected");
    console.log(selectedEl);
    if(selectedEl){
        selectedEl.classList.remove("selected");        
        selectedEl.parentNode.classList.remove("selected2");
    }
    console.log(e.className);
    e.classList.add("selected");
    let node = e.parentNode;
    node.classList.add("selected2");   
}
