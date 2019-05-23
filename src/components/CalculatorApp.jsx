import React from "react";
import Result from "./Result.jsx";
import Display from "./Display.jsx";

export default class CalculatorApp extends React.Component {
    state = {
        view: "",
        result: ""
    };
    display = (itemClicked) => {
        this.setState((prevState) => ({
            view: prevState.view.concat("", itemClicked)
        }));
    };
    calculate = (resultCalculated) => {
        this.setState(() => ({
            result: resultCalculated
        }));
    };

    render() {
        return (
            <div>
			<Result 
			result={this.state.view}
			calculated={this.state.result}
			/>
			<Display
			display={this.display}
			result={this.state.result}
			calculate={this.calculate}
			view={this.state.view} 
			/>
			</div>
        );
    }
}