function volume_sphere() {
    //Write your code here
	volume.value = (4/3) * Math.PI * Math.pow(radius.value, 3);
} 
let cal = document.getElementById('submit');
cal.addEventListener("click",volume_sphere);
let radius = document.getElementById('radius');
let volume =  document.getElementById('volume');
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
