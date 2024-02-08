const buttons = document.querySelectorAll(".button");
const value = document.querySelector("span");
const submit=document.querySelector("#submit");
const cont=document.querySelector(".cont")
const content=document.querySelector(".content")
submit.addEventListener("click", () => {
    submit.style.backgroundColor = "hsl(29,97%,53%)";
submit.style.color = "white";
cont.style.display="flex"
content.style.display="none"

})


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "hsl(29,97%,53%)";
        button.style.color = "white";
        let lal=index+1;
        
        value.textContent = lal.toString();
    }, false);
});
