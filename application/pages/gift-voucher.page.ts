import { GiftVoucherComponents } from "./components/gift-voucher.components";

export class GiftVoucherPage{

    giftVoucherComponents: GiftVoucherComponents;
    constructor(){
        this.giftVoucherComponents = new GiftVoucherComponents();
    }

    open(url: string){
        browser.url(url);
    }

    hasOpened(): boolean{
        return $('#account-voucher h1').isDisplayed();
    }

    fillGiftVoucherForm(data: IGiftVoucher){

        this.giftVoucherComponents.recipientsNameInput.setValue(data.recipientsName);
        this.giftVoucherComponents.recipientsEmailInput.setValue(data.recipientsEmail);
        this.giftVoucherComponents.yourNameInput.setValue(data.yourName);
        this.giftVoucherComponents.yourEmailInput.setValue(data.yourEmail);
        this.giftVoucherComponents.reasonRadioselector(data.giftTheme);
        this.giftVoucherComponents.messageInput.setValue(data.message);
        this.giftVoucherComponents.giftAmountInput.setValue(data.amount);

    }

    acceptTermsAndContinue(){
        this.giftVoucherComponents.acceptContiotionsCheckbox.click();
        this.giftVoucherComponents.continueButton.click();
    }


}
