import Worker from 'web-worker';

const workerURL = new URL('./worker.ts', import.meta.url);
const worker = new Worker(workerURL, { type: 'module' });

export async function getWorkerResult(): Promise<unknown> {
	return new Promise((resolve) => {
		const onMessage = (e: any) => {
			resolve(e.data);
			worker.removeEventListener(onMessage);
		};
		worker.addEventListener('message', onMessage);
		worker.postMessage('init');
	});
}
