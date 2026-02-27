const {test,expect} = require('@playwright/test');
const APIClient = require('../../utils/apiClient');
const AuthHelper = require('../../utils/authHelper');
const { createBookingPayload,updateBookingPayload } = require('../../test-data/bookingData');

test.describe('Restful Booker API - Clean Framework',() =>
{
    //let api;
    let token;
    let bookingID;
    
    test.beforeAll(async ({request}) => 
    {
        // const api = new APIClient(request);
        // const response = await api.post('/auth',{
        //     username: 'admin',
        //     password: 'password123'
        // });
        // const body = await response.json();
        // token = body.token;      
        
        token = await AuthHelper.generateToken(request);
        console.log('Generated Token: '+token);
    });

    test('Create Booking', async({request}) => {

        const api = new APIClient(request);
        const response = await api.createBooking(createBookingPayload);
        console.log('Status: ' + response.status());
        console.log('Raw Text:' + await response.text());
        const body = await response.json();
        bookingID = body.bookingid;

        expect(body.booking.firstname).toBe(createBookingPayload.firstname);
    });

    test('Get Booking', async ({request}) => 
    {
        const api = new APIClient(request);
        const response = await api.getBooking(bookingID);
        const body = await response.json();
        
        expect(body.firstname).toBe(createBookingPayload.firstname);
    });

    test('Update Booking', async({request}) =>
    {
        const api = new APIClient(request);
        const response = await api.updateBooking(bookingID,updateBookingPayload,token);
        const body = await response.json();

        expect(body.firstname).toBe(updateBookingPayload.firstname);
    });

    test('Delete Booking', async({request}) => 
    {
        const api = new APIClient(request);
        const response = await api.deleteBooking(bookingID)
       
        expect(response.status()).toBe(201);
        const text = await response.text();
        expect(text).toBe('Created');
    });
});