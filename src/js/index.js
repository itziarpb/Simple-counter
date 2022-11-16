//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter";
import "../styles/index.css";

let seconds=0;
setInterval (()=>{
	const one= Math.floor(seconds%10);
    const two= Math.floor((seconds/10)%10);
    const three= Math.floor((seconds/100)%10);
    const four= Math.floor((seconds/1000)%10);
	seconds++;
ReactDOM.render(<Counter
                    first={one} 
					second={two}
					third={three}
					fourth={four}
/>, document.querySelector("#app"));
},1000);


