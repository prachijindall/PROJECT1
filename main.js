let slider=document.querySelector(".slider");
let currentslide=0;
let totalslides=slider.querySelectorAll(".wrapper .left > div").length-1;
slider.querySelector(".controls .up").addEventListener("click",function()
{
if(currentslide==0)
    {
        return ;
    }
    currentslide--;
    slider.querySelector(".wrapper .right div").style.marginTop=`${currentslide*-100}vh`;
    slider.querySelector(".wrapper .left div").style.marginTop=`${(totalslides-currentslide)*-100}vh`;
});
slider.querySelector(".controls .down").addEventListener("click",function()
{
if(currentslide==totalslides)
    {
        return ;
    }
    currentslide++;
    slider.querySelector(".wrapper .right div").style.marginTop=`${currentslide*-100}vh`;
    slider.querySelector(".wrapper .left div").style.marginTop=`${(totalslides-currentslide)*-100}vh`;
});