/**
 * change to desktop view if elements cannot wrap 
 */ 
function changeview() {

    const divs = document.getElementsByClassName("mobile_view");
    const photo_mobile = document.getElementsByClassName("photo_mobile");
    
    // container width
    var div_width = divs.item(0).offsetWidth*0.9;
    // items in container width
    var min_width = divs.item(0).children.item(0).offsetWidth + divs.item(0).children.item(1).offsetWidth*1.1;
    
    // if container width if enough to fit all elements then its desktop view
    if(div_width >= min_width){
        for( let div_elt of divs){
            div_elt.className = "desktop_view";
        }
        for( let photo_elt of photo_mobile){
            photo_elt.className = "photo_desktop";
        }

    }
}

changeview();