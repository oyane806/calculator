import React from "react";

const Result = (props) => (
	<div className="result__display">
		<p className="result">{props.result}
		<span className="result__calculated">{props.calculated}</span>
		</p>
	</div>
);

export default Result;