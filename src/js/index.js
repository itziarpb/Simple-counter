//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter";
import "../styles/index.css";

let seconds=0;
let one=0;
let two=0;
let three=0;
let four=0;

setInterval (()=>{
	one= Math.floor(seconds%10);
    two= Math.floor((seconds/10)%10);
    three= Math.floor((seconds/100)%10);
    four= Math.floor((seconds/1000)%10);
	seconds++;
ReactDOM.render(<Counter
                    first={one} 
					second={two}
					third={three}
					fourth={four}
/>, document.querySelector("#app"));
},1000);



