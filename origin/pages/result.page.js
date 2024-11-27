import { BasePage } from "./base.page"; 
import { allure } from "allure-playwright";
import { expect } from '@playwright/test';

class ResultPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchResult = this.page.locator('.result-item');
        this.searchClear = this.page.getByRole('link', { name: 'Очистить' });
    }

    async resultSearch(searchValue) {
        await allure.step(`Заголовок статьи содержит значение - "${searchValue}"`, async () => {
        await expect(this.searchResult.nth(0)).toHaveText(new RegExp(`.*${searchValue}.*`));
        });
    }
    async resultClear() {
        await allure.step("Очистить содержимое поля поиска", async () => {
        await this.searchClear.click();
        });
    }
}

export {ResultPage}; 