const elemment=document.getElementByld("order");
const myname=document.getElementByld("myanmar");
const add=document.getElement("add");
element.addEventListener("click",myFunction);
function myFunction(){
	if(myname.value==""||add.value==""){
		alert("Form is empty");

	}else{
		window.location.assign("./index.html")
	}
}
