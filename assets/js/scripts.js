var listClick = document.querySelector(".fa-list-ul");
var gridClick = document.querySelector(".fa-th");
var gridSheet = document.querySelector("#stylez");
var listSheet = document.querySelector("#stylezz");

listClick.addEventListener("click", function(){
  listSheet.disabled = false;
  gridSheet.disabled = true;

});

gridClick.addEventListener("click", function(){
  gridSheet.disabled = false;
  listSheet.disabled = true;
})
