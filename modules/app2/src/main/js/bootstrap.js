import greetings from './greetings';
import isObject from 'is-object';

const node = document.getElementById('_app2_');

node.innerHTML = `
	./greetings says: ${greetings()}
	<br>
	is-object says: ${isObject()}
	<br>
`;
