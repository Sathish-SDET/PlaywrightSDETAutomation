class AuthHelper 
{
    static async generateToken(request)
    {
        const response = await request.post('/auth',{
            data: {
            username: 'admin',
            password: 'password123'
            }
        });
        if (response.status() !== 200) 
        {  throw new Error('Token Generation Failed');  }
        
        const body = await response.json();
        return body.token;
    }
    static async dummyJSONBearerToken(request)
    {
        const response = await request.post('https://dummyjson.com/user/login',
            {
                headers: 
                    {'Content-Type':'application/json'},
                data:
                    {username: 'emilys',
                     password: 'emilyspass'}
            }
        );
        if (response.status() !==200)
        {
            throw new Error ('Dummy JSON Login failed');
        }
        const body = await response.json();
        return body.accessToken; // Important: DummyJSON returns accessToken

    }
}
module.exports = AuthHelper;
