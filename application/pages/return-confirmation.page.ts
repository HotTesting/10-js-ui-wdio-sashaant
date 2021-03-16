export class ReturnConfirmationPage {

    isOpened(): boolean {
        return $('h1=Product Returns').isDisplayed();
    }
}