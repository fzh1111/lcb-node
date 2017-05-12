var curr = 1;
function changepic(){
	if(curr<2){
		curr++;
		}else{
			curr=1;
			}
	var imgobj = document.getElementById("banner");
		imgobj.src = "images/banner0"+curr+".jpg";
		this.fadeIn;
		this.fadeOut;
		setTimeout(changepic,2000);
	}
	
window.onload = function(){
	setTimeout(changepic,2000);
}