const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll(".btn")

let str = "";
buttons.forEach((btn)=> {
    btn.addEventListener("click", (b) => {
        if(b.target.innerHTML === "C" ) {
            str = "";
            screen.value = str;
        }else if (b.target.innerHTML === "=") {
            str = eval(str)
            screen.value = str
        }else if (b.target.innerHTML === "Del"){
            str = str.substring(0,str.length-1);
            screen.value = str;
        }else if(b.target.innerHTML === "^"){
            str = str * str;
            screen.value = str;
        }else if(b.target.innerHTML === "√"){
            str = Math.sqrt(str)
            screen.value = str;
        }
        else{
            str += b.target.innerHTML;
            screen.value = str;
        }
    });
})  


const a = 444;