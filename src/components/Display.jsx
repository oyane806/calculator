import React from "react";

export default class Display extends React.Component {
    display = (e) => {
        const itemClicked = e.target.name;
        this.props.display(itemClicked);
    }
    render() {
        return (
        <div>
        <div>
        <button name="AC" onClick={this.props.clear}> AC </button>
 		<button name="-" onClick={this.display}>+/-</button>
 		<button name="/100" onClick={this.display}>%</button>
 		<button name="/" onClick={this.display}>/</button>
        </div>
        <div>
 		<button name="7" onClick={this.display}> 7 </button>
 		<button name="8" onClick={this.display}>8</button>
 		<button name="9" onClick={this.display}>9</button>
 		<button name="*" onClick={this.display}>x</button>
 		</div>
 		<div>
 		<button name="4" onClick={this.display}> 4 </button>
 		<button name="5" onClick={this.display}>5</button>
 		<button name="6" onClick={this.display}>6</button>
 		<button name="-" onClick={this.display}>-</button>
 		</div>
 		<div>
 		<button name="1" onClick={this.display}> 1 </button>
 		<button name="2" onClick={this.display}>2</button>
 		<button name="3" onClick={this.display}>3</button>
 		<button name="+" onClick={this.display}>+</button>
 		</div>
 		<button name="0" onClick={this.display}>0</button>
 		<button name="." onClick={this.display}>.</button>
 		<button name="=" onClick={this.props.equal}>=</button>
 		</div>
        );
    }
}