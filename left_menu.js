function left_menu_button(){
    const left_menu_id = document.getElementById('left_menu')
    const left_menu_style = window.getComputedStyle(left_menu_id);
    const displayValue = left_menu_style.display;
    console.log(left_menu_id);
    console.log( displayValue);
    if(displayValue == 'none'){
        document.getElementById('left_menu').style.display='block';
        document.getElementById('content').style.width="calc(100% - 220px)";
        // document.getElementById('content').style.right="-220px";
        document.getElementById('close_left_menu').style.display='block';
    }
    else{
        document.getElementById('left_menu').style.display='none';
        document.getElementById('content').style.width="100%";
        // document.getElementById('content').style.right="0px";
        document.getElementById('close_left_menu').style.display='none';
    }
}