import React from "react";
import ReactDOM from "react-dom";

declare const module: any;

function render() {
	const { App } = require('./App');
	ReactDOM.render(<App />, document.getElementById('content'));
}

render();

if (module.hot) {
	module.hot.accept(render);
}
