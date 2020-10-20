import('app2/greetings').then(({ default: greetings }) => {
	const node = document.getElementById('app1');

	node.innerHTML = `
		${greetings()} from app1.js
	`;
});
