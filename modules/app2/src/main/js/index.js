import greetings from './greetings';

const node = document.getElementById('_app2_');

node.innerHTML = `
	${greetings()} from app2.js
`;
