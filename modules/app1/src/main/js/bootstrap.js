import greetings1b from 'app1b/greetings';
import greetings2 from 'app2/greetings';
import isObject from 'is-object';

const node = document.getElementById('_app1_');

node.innerHTML = `
	app1b/greetings says: ${greetings1b()}
	<br>
	app2/greetings says: ${greetings2()}
	<br>
	is-object says: ${isObject()}
	<br>
`;
