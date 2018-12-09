import '@webcomponents/webcomponentsjs';
import '../containers/main-container';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('main-container');
	document.body.appendChild(container);
	console.log(global.jsonData, window.jsonData)
	global.storage.dispatch({type: 'INIT',value: global.jsonData.num})
})
