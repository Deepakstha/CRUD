import React, { Component } from "react";

class Forms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
	}

	componentDidMount() {
		this.setState({
			username: "Deepak",
		});
	}

	usernameHandler = (event) => {
		this.setState({
			username: event.target.value,
		});
	};

	passwordHandler = (event) => {
		this.setState({
			password: event.target.value,
		});
	};
	render() {
		return (
			<div className="container">
				<input
					type="text"
					value={this.state.username}
					placeholder="Enter Username"
					className="border mb-4"
					onChange={this.usernameHandler}
				/>
				<br />
				<input
					type="password"
					value={this.state.password}
					placeholder="Password"
					className="border mb-4"
					onChange={this.passwordHandler}
				/>
				<br />
				<button className="btn"> Click Me</button>
			</div>
		);
	}
}

export default Forms;
