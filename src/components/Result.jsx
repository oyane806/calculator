import React from "react";

const Result = (props) => (
	<div>
		<p>{props.result}</p>
		<span>{props.calculated}</span>
	</div>
);

export default Result;