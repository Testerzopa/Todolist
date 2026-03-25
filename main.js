function addtask(){
    const text = document.getElementById("task");
    const result = document.getElementById("result");

    if(text.value === ""){
        alert("Please put your task")
    }else{
        let li = document.createElement("li")
        let span = document.createElement("span");

        span.innerHTML = text.value;
        li.appendChild(span)
        result.appendChild(li)
        text.value = "";

        span.onclick = function(){
            li.classList.toggle("checked")
        }
    }
}