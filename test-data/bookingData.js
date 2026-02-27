module.exports = {
  createBookingPayload: 
  {
    firstname: 'Sathish',
    lastname: 'Shankaran',
    totalprice: 500,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-03-01',
      checkout: '2026-03-05'
    },
    additionalneeds: 'Breakfast'
  },

  updateBookingPayload: 
  {
    firstname: 'UpdatedName',
    lastname: 'Shankaran',
    totalprice: 700,
    depositpaid: false,
    bookingdates: {
      checkin: '2026-04-01',
      checkout: '2026-04-05'
    },
    additionalneeds: 'Dinner'
  }
};
