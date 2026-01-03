
    const theametoggle=document.getElementById("theme-toggle");
    const body=document.body;

    theametoggle.addEventListener("click",()=>{
        body.classList.toggle("dark-set")
        localStorage.setItem("theme",body.classList.contains("dark-set")?"dark":"light")
    })
    if(localStorage.getItem('theme')==='dark'){
        body.classList.add("dark-set")
    }