import { test } from '@playwright/test';
import { allure } from "allure-playwright";
import { App } from '../origin/pages/app.page';

const url = 'https://www.tretyakovgallery.ru/';
let app;
let searchValue;

test('Повторное использование поиска', async ({ page }) => {
    await allure.tags ("searsh");
    await allure.owner("Akhatova");
    app = new App(page);
    searchValue = 'Пушкин';

    await app.mainPage.open(url); 
    await app.mainPage.search();
    await app.searchPage.fillsearchField(searchValue);
    await app.resultPage.resultSearch(searchValue);
    await app.resultPage.resultClear();
    
    searchValue = 'Италия';
    await app.searchPage.fillsearchField(searchValue);
    await app.resultPage.resultSearch(searchValue);
 
});

