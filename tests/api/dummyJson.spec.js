const {test,expect} = require('@playwright/test');
const APIClient = require('../../utils/apiClient');
const AuthHelper = require('../../utils/authHelper');

let token;

test.describe('Dummy JSON API - Bearer Token Flow', ()=>
{
    test.beforeAll(async ({request}) => 
    {
        token = await AuthHelper.dummyJSONBearerToken(request);
        console.log('Bearer Token:', token);
    });
    test('Get Authenticated User', async({request}) => 
    {
        const api = new APIClient(request);
        const response = await api.getUser(token);
        expect (response.status()).toBe(200);
        
        const body = await response.json();
        expect(body.username).toBe('emilys');
        console.log('Raw Text:' + await response.text());
    });
    test('Access Protected Endpoint without Token should fail', async({request}) => 
    {
        const api = new APIClient(request);
        const response = await api.getUser();
        console.log('Response status: ' + await response.status());
        console.log('Response text: ' + await response.text());
        expect(response.status()).toBe(401);
    })
    test('Access Protected Endpoint with Invalid Token should fail', async({request}) => 
    {
        const api = new APIClient(request);
        const response = await api.InvalidToken();
        console.log('Response status: ' + await response.status());
        console.log('Response text: ' + await response.text());
        expect(response.status()).toBe(401);
    })
})