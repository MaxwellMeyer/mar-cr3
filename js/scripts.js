function mrRoboto(N) {
  let rogersArray = [];
  let neighborhood = [];
  let newNeighbor = " ";
  for (let i=0; i <= N; i ++) {
    rogersArray.push(i.toString());
    if (rogersArray[i].includes("3")) {
      neighborhood.push("Won't you be my neighbor?");
    }
    else if (rogersArray[i].includes("2")) {
      neighborhood.push("Boop! ");
    }
    else if (rogersArray[i].includes("1")) {
      neighborhood.push("Beep! ");
    }
    else {
      neighborhood.push(rogersArray[i]+ ",");
    }      
  } 
  return neighborhood
}
$(document).ready(function(){
  $("form#rogerForm").submit(function(event){
    event.preventDefault();
    let newNeighbor = $("input#username").val();
    let X =$("input#numb").val();
    let newSweater = mrRoboto(X);
    $("#mrRogers").text(newSweater);
    $("#newNeighbor").text(newNeighbor);
      $("#results").show();
  });
});