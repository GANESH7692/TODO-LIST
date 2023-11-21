let main = document.getElementById("con");
let conadd = document.getElementsByClassName("subcon3");
var value = document.getElementById("val");
let addbutton = document.getElementById("addbtn");
let delbutton = document.getElementById("delbtn");
let editbutton = document.getElementById("editbtn");
let addedItems = [];
let inputvalue = value.value;
function containsSpace(input) {
    return input.indexOf(' ') !== -1 && input.indexOf(' ') === 0;
}
value.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior of Enter key (form submission, etc.)
        addbutton.click(); // Simulate a click on the "Add" button
    }
});
addbutton.addEventListener('click', () => {
    let checkvalue = (value.value.toLowerCase()).trim();
    if (containsSpace(value.value)) {
        alert("Spaces are not allowed at the first index");
    }
    else {
        if (value.value === "") {
            alert("Input cannot be empty!");
        }
        else if (addedItems.includes(checkvalue)) {
            alert("This item already exists!");

        }
        else {
            //! creating div tag
            var element = document.createElement("div");
            element.setAttribute("class", "subcon3");
            main.appendChild(element);

            //! creating div text tag
            var ele1 = document.createElement("div");
            ele1.setAttribute("class", "txtbox");
            element.appendChild(ele1);

            //! creating p tag
            var para = document.createElement("p");
            para.setAttribute("id", "content");
            ele1.appendChild(para);
            para.innerText = value.value;

            //! creating button tag
            var adding_button = document.createElement("button");
            adding_button.setAttribute("id", "delbtn");
            adding_button.setAttribute("class", "btns");
            ele1.appendChild(adding_button);

            //! creating icon
            var delete_icon = document.createElement("i");
            delete_icon.setAttribute("class", "fa-solid fa-trash");
            adding_button.appendChild(delete_icon);

            //! creating edit button
            var edit_button = document.createElement("button");
            edit_button.setAttribute("id", "editbtn");
            edit_button.setAttribute("class", "btns");
            ele1.appendChild(edit_button);

            //! creating edit icon
            var edit_icon = document.createElement("i");
            edit_icon.setAttribute("class", "fa-solid fa-pen-to-square");
            edit_button.appendChild(edit_icon);

            addedItems.push(value.value);

            edit_button.addEventListener('click', () => {
                let editaddedItems = [];
                
                var element1 = document.createElement("div");
                element1.setAttribute("class", "textbox");

                var input1 = document.createElement("input");
                input1.setAttribute("type", "text");
                input1.setAttribute("id", "editvalue");
                input1.setAttribute("placeholder", "New Task");
                input1.setAttribute("maxlength", 20);
                input1.setAttribute("value", para.innerText);
                element1.appendChild(input1);

                var editbtn = document.createElement("button");
                editbtn.setAttribute("id", "editaddbtn");
                editbtn.setAttribute("class", "btns1");
                element1.appendChild(editbtn);

                var editaddicon = document.createElement("i");
                editaddicon.setAttribute("class", "fa-solid fa-plus");
                editbtn.appendChild(editaddicon);

                var editbtn2 = document.createElement("button");
                editbtn2.setAttribute("id", "editcancel");
                editbtn2.setAttribute("class", "btns1");
                element1.appendChild(editbtn2);

                var editcancelicon = document.createElement("i");
                editcancelicon.setAttribute("class", "fa-solid fa-ban");
                editbtn2.appendChild(editcancelicon);
                
                let checkvalue2 = (input1.value.toLowerCase()).trim();
                element.replaceChild(element1, ele1);

                editbtn.addEventListener('click', () => {
                    let editIndex = addedItems.indexOf(para.innerText);
                    if (containsSpace(input1.value)) {
                        alert("Spaces are not allowed at the first index");
                    }
                    else {
                        if (input1.value === "") {
                            alert("Input cannot be empty!");
                        }
                        else if(addedItems.includes((input1.value.toLowerCase()).trim())){
                            alert("This item already exists!");
                        }
                        else {
                            if (editIndex !== -1) {
                                addedItems.splice(editIndex, 1); 
                            }
                            para.innerText = input1.value;
                            console.log(input1.value)
                            addedItems.push(input1.value)
                            element.replaceChild(ele1, element1);
                        }
                    }
                })
                editbtn2.addEventListener('click', () => {
                    element.replaceChild(ele1, element1);
                })
            });
            adding_button.addEventListener('click', () => {
                addedItems.pop();
                element.remove();
            });
            value.value = "";
        }
    }
})

