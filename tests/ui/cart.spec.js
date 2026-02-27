const {test,expect} = require('@playwright/test')
const LoginPage = require('../../pages/LoginPage')
const InventoryPage = require('../../pages/InventoryPage');


test('Add all products and validate price', async({page}) => 
{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user','secret_sauce');

    const Total = await inventoryPage.calculateTotalPrice();
    console.log('Calculated Total: ' + Total);

    await inventoryPage.addAllItemsToCart();
    await inventoryPage.goToCart();

    await expect(page).toHaveURL(/cart/);  

});