import { MainPage, SearchPage, ResultPage} from './index';

class App {
    constructor(page) {
        this.mainPage = new MainPage(page);
        this.searchPage = new SearchPage(page);
        this.resultPage = new ResultPage(page);
    }
}
export {App};