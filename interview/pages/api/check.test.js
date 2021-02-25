
const { findServer } = require('./findServer');
const fetch = require('jest-fetch-mock');

describe('Testing APIs', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});
	
	it('Random server URL online', () => {
		fetch.mockResponseOnce(
			() => new Promise(resolve => resolve({
				"url": "https://gitlab.com",
				"priority": 4
			}))
		)
		try {
			findServer().then(server => {
				expect(server).toEqual({"url": "https://gitlab.com", "priority": 4})
			}).catch(error => {
				throw error.message;
			});
		} catch (e) {
			throw e;
		}
	});
});
