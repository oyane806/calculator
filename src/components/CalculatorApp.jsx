import React from "react";
import Result from "./Result.jsx";
import Display from "./Display.jsx";

export default class CalculatorApp extends React.Component {
	state = {
		result: 0
	};
	display = (itemClicked) => {
		this.setState(() => ({
			result: itemClicked
		}));
	};

	render() {
		return (
			<div>
			<Result result={this.state.result}/>
			<Display
			display={this.display} />
			</div>
			);
	}
}