// Display/Hide the NAVBAR 

 {
    const navBar = document.querySelector('.header-topbar');
    
    window.addEventListener('scroll' ,  () => {
        if(window.scrollY >= 200 & screen.width > 900 ){
            
            navBar.style.background = "white";
            navBar.style.top = "0";
            navBar.style.boxShadow =" 0 10px 10px rgba(34, 31, 31, 0.08)" 
        } else if(window.scrollY < 200 & screen.width > 900) {
            navBar.style.background = "none";
            navBar.style.top = "20px";
            navBar.style.boxShadow ="none"
        }
    })
}



// Dropdown on small screen

 {
    const checkBox = document.querySelector('.nav-checkbox');

    checkBox.addEventListener('change' , () => {
        const headerCheckbox = document.querySelector('.nav-checkbox');
        const navList = document.querySelector('.header-navbar-list');
        const navBar = document.querySelector('.header-topbar');

        if(headerCheckbox.checked) {
            navList.style.display ="block";

        } else{ 
            navList.style.display ="none";

         }
    })
}
    
