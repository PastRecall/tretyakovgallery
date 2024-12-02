import { BasePage } from "./base.page"; 
import { allure } from "allure-playwright";

class ResultPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchResult = this.page.locator('.result-item');
        this.searchClear = this.page.getByRole('link', { name: 'Очистить' });
    }

    async resultClear() {
        await allure.step("Очистить содержимое поля поиска", async () => {
        await this.searchClear.click();
        });
    }
}

export {ResultPage}; 