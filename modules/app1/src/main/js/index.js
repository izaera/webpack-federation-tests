import('app2/greetings').then(({ default: greetings }) => {
	const node = document.getElementById('_app1_');

	node.innerHTML = `
		${greetings()} from app1.js
	`;
});
