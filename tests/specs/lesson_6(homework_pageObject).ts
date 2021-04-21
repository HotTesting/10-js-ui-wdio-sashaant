import { App } from "../../application/application";
import { giftReason } from "../../testData/gift-certificate-reasons";
import { returnReason } from "../../testData/return-reason";

describe("Product return", function () {
  returnReason.map((elem) => {
    it(`can be submited with reason ${elem.returnName}`, function () {
      const app = new App();

      app.returnPage.open("/index.php?route=account/return/add");
      browser.waitUntil(() => app.returnPage.isOpened(), {
        timeoutMsg: "Expected return page is opened",
      });

      app.returnPage.fillReturnForm({
        firstName: Math.random().toString(36).substring(3),
        lastName: Math.random().toString(36).substring(3),
        email: `${Math.random().toString(36).substring(3)}@mail.mail`,
        telephone: `+${Math.random().toString().slice(2, 11)}`,
        orderId: `#${Math.random().toString().slice(2, 7)}`,
        productName: Math.random().toString(36).substring(3),
        productCode: Math.random().toString(36).substring(3),
        quantity: "10",
        returnReason: elem.elemNumber,
        otherDetails: Math.random().toString(36).substring(3),
      });

      app.returnPage.submitReturnForm();

      browser.waitUntil(() => app.returnConfirmation.isOpened(), {
        timeoutMsg: "Expected return page is opened",
      });
    });
  });
});

describe("Gift Certificate", function () {
  giftReason.map((reason) => {
    it(`can be purchased with gift Theme: ${reason.giftReason}`, function () {
      const app = new App();

      app.giftVoucherPage.open("/index.php?route=account/voucher");
      browser.waitUntil(() => app.giftVoucherPage.hasOpened(), {
        timeoutMsg: "Expected return page is opened",
      });

      app.giftVoucherPage.fillGiftVoucherForm({
        recipientsName: Math.random().toString(36).substring(3),
        recipientsEmail: `${Math.random().toString(36).substring(3)}@mail.mail`,
        yourName: Math.random().toString(36).substring(3),
        yourEmail: `${Math.random().toString(36).substring(3)}@mail.mail`,
        giftTheme: reason.elemValue,
        message: Math.random().toString(36).substring(3),
        amount: "10",
      });

      app.giftVoucherPage.acceptTermsAndContinue();

      browser.waitUntil(() => app.giftVoucherConfirmation.hasSend(), {
        timeoutMsg: "Expected return page is opened",
      });

      expect(app.giftVoucherConfirmation.getSuccessTitle()).toEqual(
        "Purchase a Gift Certificate"
      );
    });
  });
});

describe("Contact us form", function () {
  it("must send messages to shop administration", function () {
    const app = new App();

    app.contactUS.open('/index.php?route=information/contact');
    browser.waitUntil(() => app.contactUS.hasOpened(), {
      timeoutMsg: "Expected return page is opened",
    });

    app.contactUS.fillContactUsFormAndSubmit({
        yourName: Math.random().toString(36).substring(3),
        emailAdress: `${Math.random().toString(36).substring(3)}@mail.mail`,
        enquiry: Math.random().toString(36).substring(3)
    })

    expect($('#content h3')).not.toBeVisible();
  });
});

describe("Items search", function () {
  it("should show results in case multiple items matches", function () {
    const app= new App();
    const searchRule ='MacBook'

    app.homePage.open('/');
    app.homePage.searchInput.setValue(searchRule);
    app.homePage.searchButton.click();

    browser.waitUntil(() => app.homePage.hasSearch(), {
      timeoutMsg: "Expected return page is opened",
    });

    expect(app.homePage.searchResult).toHaveTextContaining(searchRule);
  });

  it("should redirect to 'no matching results' in case no items matched", function () {
    const app= new App();
    const searchRule ='OLOLOLO';
    const noSearchResultMessage = 'There is no product that matches the search criteria.'
    
    app.homePage.open('/');
    app.homePage.searchInput.setValue(searchRule);
    app.homePage.searchButton.click();

    app.homePage.noSearchResultMessage.isDisplayed();
    expect(app.homePage.noSearchResultMessage).toHaveTextContaining(noSearchResultMessage);

  });
});
