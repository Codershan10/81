var take_input=document.getElementById("take_input");
var take_input_key=document.getElementById("take_input_key");

function save(){
    localStorage.clear();
    localStorage.setItem(take_input_key.value,take_input.value);
}
function readall(){
    var keys = Object.keys(localStorage);
    console.log(keys)
    for (var key of keys) {
        console.log("key : "+key+" : Value : "+localStorage.getItem(key));
    }
}