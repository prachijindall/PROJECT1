function changebg()
{
    var navbar=document.getElementById('navbar');  /*navbar,scrollvalue=variable*/
    var scrollValue=window.scrollY;
    if(scrollValue<150)
        {
            navbar.classList.add('bgcolor');
        }
        else{
            navbar.classList.add('bgcolor');
        }
}
window.addEventListener('scroll',changebg); 