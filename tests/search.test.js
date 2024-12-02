import { test } from '@playwright/test';
import { allure } from "allure-playwright";
import { App } from '../origin/pages/app.page';
import { expect } from '@playwright/test';

const url = 'https://www.tretyakovgallery.ru/';
let app;
let searchValue;

test('Повторное использование поиска', async ({ page }) => {
    await allure.tags ("search");
    await allure.owner("Akhatova");
    app = new App(page);
    searchValue = 'Пушкин';

    await app.mainPage.open(url); 
    await app.mainPage.search();
    await app.searchPage.fillsearchField(searchValue);
    await allure.step(`Заголовок статьи содержит значение - "${searchValue}"`, async () => {
    await expect(app.resultPage.searchResult.nth(0)).toHaveText(new RegExp(`.*${searchValue}.*`));
    });
    await app.resultPage.resultClear();
    searchValue = 'Италия';
    await app.searchPage.fillsearchField(searchValue);
    await allure.step(`Заголовок статьи содержит значение - "${searchValue}"`, async () => {
    await expect(app.resultPage.searchResult.nth(0)).toHaveText(new RegExp(`.*${searchValue}.*`));
    });
});

