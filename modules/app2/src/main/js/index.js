import greetings from './greetings';

const node = document.getElementById('app2');

node.innerHTML = `
	${greetings()} from app2.js
`;
