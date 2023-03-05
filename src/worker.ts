import { getResult } from './worker-lib';

addEventListener('message', (e: any) => {
	if (e.data === 'init') {
		postMessage(getResult());
	}
});
