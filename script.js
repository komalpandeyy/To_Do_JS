
btn = document.getElementById("add");

btn.addEventListener("click",function(){
    //console.log("txt is " +task);
    task = document.getElementById('txt').value;
    if(task == ""){
        alert("Please enter some text");
    }
    else{
    var li = document.createElement('li');
    var inp = document.createElement('input');
    var label = document.createElement('label');
    var b = document.createElement("button");

    label.innerText = task;
    inp.type='checkbox';
    b.innerHTML = "X";

    li.appendChild(inp);
    li.appendChild(label);
    li.appendChild(b);
    document.getElementById('msg').appendChild(li);
   
    label.className="form-check-label";
    inp.className="form-check-input me-1";
    b.className="btn btn-danger del";
    li.className="list-group-item";
   
    document.getElementById('txt').value="";
    b.addEventListener("click", function() {
        let ans = confirm("Are you sure you want to delete this task?");
        if (ans) {
            li.remove();
        }
    });

    label.addEventListener("click",function(){
        s = prompt("Enter your new task ");
        if(s!=null&&s!=""){
        this.innerText = s;
        }
        else{
            alert("Not a valid task");
            return;
        }
    })

    }
}
);

//existing elements deletion
let v = document.getElementsByClassName("del");
console.log(v);
for(i = 0;i<v.length;i++){
    v[i].addEventListener("click",function(e){
        ans = confirm("Are you sure you want to delete this task?");
        if(ans){
            e.target.parentNode.remove();
        }
    })
}


//when click on text we can replace it option
let t = document.getElementsByClassName("form-check-label");
for(i = 0;i<t.length;i++){
t[i].addEventListener("click",function(){
    wr = this.innerText;
    console.log(wr);
    s = prompt("Enter your new task ");
    if(s!=null&&s!=""){
    this.innerText = s;
    }
    else{
        alert("Not a valid task"); 
        return;  
    }
})
}