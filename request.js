var form = document.getElementById("form");
		
form.addEventListener("change", updateFormTotals);

function updateFormTotals(){
	var result = 0;
	var style="style";
	var tip="tip";
	var s = document.getElementsByClassName(style);
	for (i=0; i < s.length; i++){
		if (s[i].checked){
			result = Number(s[i].value);
		}
	}
	var s = document.getElementsByClassName(tip);
	for (i=0; i < s.length; i++){
		if (s[i].checked && result>0){
			result *= (1 + s[i].value / 100);
		}
	}
	
	result = result.toFixed(2);
	
	var totalElem = document.getElementById("total");
	totalElem.innerHTML = result;
}// JavaScript Document