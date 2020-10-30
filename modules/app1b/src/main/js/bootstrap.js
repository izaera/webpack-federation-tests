import greetings2 from 'app2/greetings';
import isObject from 'is-object';

const node = document.getElementById('_app1b_');

node.innerHTML = `
	app2/greetings says: ${greetings2()}
	<br>
	is-object says: ${isObject()}
	<br>
`;
