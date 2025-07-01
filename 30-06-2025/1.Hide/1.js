// const btn = document.getElementById("btn");
// const p = document.getElementById("toggleText")

// btn.addEventListener('click', () => {
//     if (p.style.display === 'none') {
        
//     }
// })

$(document).ready(function(){
    $("#btn").click(function(){
        if($("#toggleText").is(':visible')){
            $('#toggleText').hide();
        }else{
            $("#toggleText").show()
        }
    })
})