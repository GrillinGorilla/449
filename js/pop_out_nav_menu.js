/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openPopOutNavMenu() 
{
    document.getElementById("pop_out_nav_menu").style.width = "250px";
    document.getElementById("entire_page_container").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closePopOutNavMenu() 
{
    document.getElementById("pop_out_nav_menu").style.width = "0";
    document.getElementById("entire_page_container").style.marginLeft = "0";
}