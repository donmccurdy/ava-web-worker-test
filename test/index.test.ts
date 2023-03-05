import test from 'ava';
import { getWorkerResult } from 'my-package';

test('my-package', async (t) => {
	const result = await getWorkerResult();
	t.is(result, 'result', 'received worker result');
});
