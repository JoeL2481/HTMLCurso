const changeWidth = document.querySelector('#ChangeDisplay');
changeWidth.addEventListener("click", function(){
           document.querySelector('.First').style.border = "0.3em solid black";
           document.querySelector('.First').style.backgroundColor = "blue";
           document.querySelector('.Second').style.width = "100%";
           document.querySelector('.Second').style.border = "0.3em solid black";
           document.querySelector('.Second').style.backgroundColor = "blue";
           document.querySelector('.Third').style.width = "100%";
           document.querySelector('.Third').style.border = "0.3em solid black";
           document.querySelector('.Third').style.backgroundColor = "blue";

})

const ChangeBack = document.querySelector('#ChangeBack');
ChangeBack.addEventListener("click", function(){
        document.querySelector('.First').style.border = "none";
        document.querySelector('.First').style.backgroundColor = "";
        document.querySelector('.Second').style.width = "59.5%";
        document.querySelector('.Second').style.border = "none";
        document.querySelector('.Second').style.backgroundColor = "";
        document.querySelector('.Third').style.width = "39.5%";
        document.querySelector('.Third').style.border = "none";
        document.querySelector('.Third').style.backgroundColor = "";
})

/*
document.getElementById('javass').style.backgroundColor = "#ff0000";
*/