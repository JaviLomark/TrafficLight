import React, { useState } from "react";

const Home = () => {
	const[encendido, setEncendido] = useState("")
	const[borrar, setBorrar] = useState("")

	function changeColor(){
		let colorRandon = Math.floor(Math.random()*3)

		if (colorRandon == 0){
			setEncendido("red");
		}else if (colorRandon == 1){
			setEncendido("yellow");
		}else{
			setEncendido("green");
		}
	}

	return (
		<div>
			<div className="traffic">
				<div id="red"
					className={encendido == "red" ? "ilum" : "no"}
					onClick={() =>setEncendido("red")}>
				</div>

				<div id="yellow"
					className={encendido == "yellow" ? "ilum" : "no"}
					onClick={() =>setEncendido("yellow")}>
				</div>

				<div id="green"
					className={encendido == "green" ? "ilum" : "no"}
					onClick={() =>setEncendido("green")}>
				</div>
			</div>
				<div id="mybutton">
					<button onClick={changeColor}>Cambiar</button>
				</div>
		</div>
	);
};


export default Home;
