var a = '';
var b = '';
var num = [];
var ans;

function sendNum(digit){

	num.push(digit);

	if(num.length != 1){
		a = '';
		document.getElementById('calc').innerHTML = a;		
	}


	for(i=0; i<num.length ; i++){
		a = a + num[i];			
	}

document.getElementById('calc').innerHTML = a;
}

function equalTo(){
	document.getElementById('calc').innerHTML = '';

	for(i=0; i<num.length ; i++){

		b += num[i];						
	}

	ans = eval(b);	

	document.getElementById('calc').innerHTML = ans;		

	while(num.length > 0){
    	num.pop();				
	}

	num.push(ans.toString());

}

function clearScr(){
	document.getElementById('calc').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				
	}

	a ='';	
	b ='';
}