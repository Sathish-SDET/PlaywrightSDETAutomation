class InventoryPage
{
    constructor(page)
    {
        this.page = page;
        this.inventoryItems = page.locator(".inventory_item");
        this.itemPrices = page.locator(".inventory_item_price");
        //this.addToCartButtons = page.locator('button:has-text("Add to cart")');
        this.cartIcon = page.locator(".shopping_cart_link");
    }

// Adding all items to cart
    async addAllItemsToCart ()
    {
        const count = await this.inventoryItems.count();
        for(let i=0; i<count; i++)
        {
            //await this.addToCartButtons.nth(i).click();
            const item = await this.inventoryItems.nth(i); 
            const addButton = item.getByRole('button', {name: 'Add to cart'});
            if (await addButton.isVisible())
            { await addButton.click(); }
        }
    }
// Get all Item Prices 
    async getAllItemPrices()
    {
        const prices = [];
        const count = await this.itemPrices.count();
        for(let i=0; i<count;i++)
        {
            const priceText = await this.itemPrices.nth(i).textContent();
            prices.push(parseFloat(priceText.replace('$', '')));   //Remove the $ sign for all the prices and store in prices array
        }
        return prices;
    }
    
// Calculate total price
    async calculateTotalPrice()
    {
        const prices = await this.getAllItemPrices();
        return prices.reduce((acc,curr) => acc+curr,0);
    }    

// Add to cart
    async goToCart()
    {
        await this.cartIcon.click();
    }

}
module.exports = InventoryPage;