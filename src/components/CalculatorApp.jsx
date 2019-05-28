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
    clear = () => {
    	this.setState(() => ({
    		view: "",
    		result: ""
    	}));
    };
    equal = () => {
    	this.setState(() => ({
    		result: eval(this.state.view)
    	}));
    };

    render() {
        return (
            <div className="container">
			<Result 
			result={this.state.view}
			calculated={this.state.result}
			/>
			<Display
			display={this.display}
			result={this.state.result}
			equal={this.equal}
			view={this.state.view}
			clear={this.clear}
			/>
			</div>
        );
    }
}