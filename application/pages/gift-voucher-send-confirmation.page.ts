export class GiftVoucherConfirmationPage{

    hasSend(): boolean{
        return $('#common-success h1').isDisplayed();
    }

    getSuccessTitle(): string{
        return $('#common-success h1').getText();
    }
}