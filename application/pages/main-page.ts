export class HomePage {

    get searchInput() {
        return $('[placeholder="Search"]');
    }

    get searchButton() {
        return $("#search button");
    }

    get searchResult(){
        return $$("h4 a");
    }

    hasSearch(): boolean{
        return $('#product-search  h2').isDisplayed();
    }

    open(url: string){
        browser.url(url);
    }

    isOpen(): boolean{
        return $('#logo a').isDisplayed();
    }

    get noSearchResultMessage(){
        return $('p=There is no product that matches the search criteria.')
    }
}