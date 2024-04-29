import React from "react";
import { useState } from "react";


const Home = () => {
	const [counter, setCounter] = useState(0);
	const [userInput, setUserInput] = useState("")
	function handleClick() {
		setCounter(counter => counter + 5);

	}

	return (
		
		<div className="text-center">
			<h1 className="text-center mt-5">Count: {counter}</h1>
			<button onClick ={() => {
				handleClick();
				handleClick();
				handleClick();
			}}>Add 1</button>
			<div>
				<h1>Your name is {userInput ? userInput : "NULL"}</h1>
				<div>
					<input 
						text="text"
						value={userInput}		
						placeholder="Enter First Name"
						onChange={e => setUserInput(e.target.value)}
						/>
				</div>
			</div>
		</div>
	);
};

export default Home;
