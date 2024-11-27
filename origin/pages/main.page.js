import { BasePage } from "./base.page"; 
import { allure } from "allure-playwright";

class MainPage extends BasePage{
    constructor (page) {
    super(page);
        this.searchButton = this.page.getByLabel('Поиск');
    }

    async search () {
        await allure.step("Нажать иконку поиска в верхней панели", async () => {
        await this.searchButton.click();
        });
    }
}

export {MainPage};