import { ContactUsPage } from "./pages/contact-us.page";
import { GiftVoucherConfirmationPage } from "./pages/gift-voucher-send-confirmation.page";
import { GiftVoucherPage } from "./pages/gift-voucher.page";
import { HomePage } from "./pages/main-page";
import { ReturnConfirmationPage } from "./pages/return-confirmation.page";
import { ReturnPage } from "./pages/return.page";

export class App {
    returnPage: ReturnPage;
    returnConfirmation: ReturnConfirmationPage;
    giftVoucherPage: GiftVoucherPage;
    giftVoucherConfirmation: GiftVoucherConfirmationPage;
    contactUS: ContactUsPage;
    homePage: HomePage;

    constructor(){
        this.returnPage = new ReturnPage();
        this.returnConfirmation = new ReturnConfirmationPage();
        this.giftVoucherPage = new GiftVoucherPage();
        this.giftVoucherConfirmation = new GiftVoucherConfirmationPage();
        this.contactUS = new ContactUsPage();
        this.homePage = new HomePage();
    }
}