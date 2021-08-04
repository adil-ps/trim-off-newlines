import * as assert from 'assert';
import trimOffNewlines from './index.js';

it('should trim off \\r', () => {
	assert.strictEqual(trimOffNewlines('\runicorns'), 'unicorns');
	assert.strictEqual(trimOffNewlines('unicorns\r\r'), 'unicorns');
	assert.strictEqual(trimOffNewlines('unicorns\r'), 'unicorns');
});

it('should trim off \\n', () => {
	assert.strictEqual(trimOffNewlines('\nunicorns'), 'unicorns');
	assert.strictEqual(trimOffNewlines('\n\n\n\nunicorns\n\n'), 'unicorns');
	assert.strictEqual(trimOffNewlines('unicorns\n'), 'unicorns');
});

it('should trim off \\r\\n', () => {
	assert.strictEqual(trimOffNewlines('\r\n\r\n\r\nunicorns'), 'unicorns');
	assert.strictEqual(trimOffNewlines('\r\nunicorns\r\n'), 'unicorns');
	assert.strictEqual(trimOffNewlines('unicorns\r\n\r\n\r\n\r\n\r\n\r\n'), 'unicorns');
});
