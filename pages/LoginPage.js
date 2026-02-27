class LoginPage 
{
    constructor(page)
    {
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("#login-button");
        this.errormessage = page.locator('[data-test="error"]');
    }

    async navigate()
    {
        await this.page.goto('/');
    }

    async login(user,pass)
    {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async getErrorText()
    {
        return await this.errormessage.textContent();
    }
}
module.exports = LoginPage;