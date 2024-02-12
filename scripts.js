document.querySelectorAll('.ques').forEach(e => {
    e.addEventListener('click', ()=>{
        let icon = e.nextElementSibling;
        icon.classList.toggle('show');
        if (icon.classList.contains('show')){
            e.firstElementChild.nextElementSibling.setAttribute("src","./assets/images/icon-minus.svg")
        }else{
            e.firstElementChild.nextElementSibling.setAttribute("src","./assets/images/icon-plus.svg")
        }
        
    })
});
