
function work(event,target){
    var value =  event.target.value;
    target.src='CX/CX_Microwave_'+value+'.jpg';

}

var range = document.getElementById('range');
var image = document.getElementById('target');

range.addEventListener("input", (event) => {
  work(event,image);
});

