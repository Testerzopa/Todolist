const body = document.getElementById("body")

function addtask(){
    const text = document.getElementById("task");
    const result = document.getElementById("result");

    if(text.value === ""){
        alert("Please put your task")
    }else{
        let li = document.createElement("li")
        let span = document.createElement("span");
        let del = document.createElement("button")

        span.innerHTML = text.value;
        li.appendChild(span)
        li.appendChild(del)
        del.innerHTML = "🗑️"
        del.classList.add("btn-delete")
        result.appendChild(li)
        text.value = "";

        span.onclick = function(){
            li.classList.toggle("checked")
        }

        del.onclick = function(){
            li.remove();
        }
    }
}


let color = document.getElementById("btn-color");

function changeColor(){
    document.body.classList.toggle("dark-mode")
}