const SchemaValidator = require("./schemaValidator");

class APIClient 
{
    constructor(request)
    {        this.request = request;    }

    // async post (endpoint,data,headers={})
    // {         return await this.request.post(endpoint, {data, headers});     }

    // async get (endpoint, headers={})
    // {        return await this.request.get(endpoint, {headers});    }

    // async put (endpoint,data,headers={})
    // {        return await this.request.put(endpoint, {data,headers});    }

    // async delete (endpoint,headers={})
    // {        return await this.request.delete(endpoint,{headers});    }

// Create Booking
    async createBooking(payload)
    {
        return await this.request.post('/booking',{data:payload});
    }

// Get Booking
    async getBooking(id,schema)
    {
        const response = await this.request.get(`/booking/${id}`);
        const body = await response.json();
        if (schema)
        {
            SchemaValidator.validate(body,schema);
        }
        return response;
    }

// Update Booking
    async updateBooking(id,payload,token)
    {
        return await this.request.put(`/booking/${id}`,
            {headers:
                {Cookie:`token=${token}`},
            data:payload});
    }

// Delete Booking
    async deleteBooking (id)
    {
        const basicAuth = Buffer.from('admin:password123').toString("base64");
        return await this.request.delete(`/booking/${id}`,
            {headers:
                {Authorization: `Basic ${basicAuth}`}});
    }

// Generate Bearer Token with DummyJSON
    async getUser(token)
    {
        return await this.request.get('https://dummyjson.com/user/me', 
            {
                headers: 
                    {Authorization: `Bearer ${token}` }
            }
        )
    }

// Fail - No Bearer Token created 
    async InvalidToken()
    {
        return await this.request.get('https://dummyjson.com/user/me', 
            {
                headers: 
                    {Authorization: 'Bearer Invalid Token' }
            }
        )
    }
}

module.exports = APIClient;