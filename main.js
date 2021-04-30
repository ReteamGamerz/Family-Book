var image = ["Dad.png", "women.jpg", "Baby_Boy.jpg", "Brother.jpg" ];
var i = 0;
function nextslide() {
  if(i == 9)
    {
      i = 0;
   }
  document.getElementById("monkey").src = image[i];
  i++;
}