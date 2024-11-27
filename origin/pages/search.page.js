import { BasePage } from "./base.page"; 
import { allure } from "allure-playwright";

class SearchPage extends BasePage{
    constructor (page) {
    super(page);
        this.searchField = this.page.getByPlaceholder('Что вы ищете?');
        this.searchFieldButton = this.page.locator('form').getByLabel('Поиск');
    }

    async fillsearchField(searchValue) {
        await allure.step("Заполнить поле поиска значением", async () => {
        await this.searchField.click();
        await this.searchField.fill(searchValue);
        await this.searchFieldButton.click();
        });
    }
}

export {SearchPage};
