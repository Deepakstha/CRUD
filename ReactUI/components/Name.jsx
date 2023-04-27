import React, { Component } from "react";

class Name extends Component {
	constructor() {
		super();
		this.state = {
			name: "Deepak Shrestha",
		};
	}

	render() {
		return <h1 className=" text-5xl">My name is {this.state.name}</h1>;
	}
}

export default Name;
