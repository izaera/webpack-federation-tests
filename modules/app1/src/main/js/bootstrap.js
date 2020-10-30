import greetings from 'app2/greetings';
import isObject from 'is-object';

const node = document.getElementById('_app1_');

node.innerHTML = `
	${greetings()} from app1.js
	<br>
	${isObject}
`;
