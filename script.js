function firstWord(s) {
  // your code here
	a=s.trim().split(" ");   
	return a[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
