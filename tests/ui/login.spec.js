const {test,expect} = require('@playwright/test')
const LoginPage =   require('../../pages/LoginPage')
const { getExcelData } = require('../../utils/excelUtils')

const testData = getExcelData('./test-data/loginData.xlsx','Sheet1')

/* test('Valid Login Test', async({page}) => {
    
     const loginPage = new LoginPage(page);

     await loginPage.navigate();
     await loginPage.login("standard_user","secret_sauce");
   
     await expect(page).toHaveURL(/inventory/);

}); */
//test.describe('Login Data Driven Tests', () => {
    testData.forEach((data) => {
        test(`Login Test - ${data.username}`, async ({page}) => 
        {
            const loginPage = new LoginPage(page);

            await loginPage.navigate();
            await loginPage.login(data.username,data.password);
            
            if(data.expectedResult === 'success') {
                await expect(page).toHaveURL(/inventory/); 
            } else {
                await expect(loginPage.errormessage).toBeVisible();
            }
        });
    });
//});