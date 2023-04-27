import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
	}
};

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h2>Count: {state.count}</h2>
			<button
				onClick={() => dispatch({ type: "increment" })}
				className=" bg-slate-600"
			>
				Increment
			</button>
			<button
				onClick={() => dispatch({ type: "decrement" })}
				className=" bg-purple-600"
			>
				Decrement
			</button>
		</div>
	);
};

export default UseReducer;
