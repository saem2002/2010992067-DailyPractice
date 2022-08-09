function process(){

  var val=document.getElementById("digits").value;
  if(val==null ){
    alert("Enter a 5 digit number");
  }

  else{
  var sum=0;
  var l=val.toString().length;
  while(val>0){
    let rem=val%10;
    sum+=rem;
    val=val/10;
  }

  if(l==5){
    
    var borderRa=sum/5;
    document.getElementById("div1").style.height=sum*5+"px";
    document.getElementById("div1").style.width=sum*5+"px";
    document.getElementById("div1").style.borderRadius=borderRa+"px";
    document.getElementById("div1").style.color="black";
  }
  else{
    alert("Enter a 5 digit number only");
  }
}
  
}