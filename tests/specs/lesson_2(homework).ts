/**
 - Try to implement as much tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 - don't forget about assertions
 */


// http://93.126.97.71:10082/index.php?route=account/return/add
describe("product return", function () {
    it("should be submited", function () {
        browser.url("/index.php?route=account/return/add")
        browser.pause(3000)

        const firstName = $('#input-firstname')
        firstName.setValue("Test")

        const lastName = $('#input-lastname')
        lastName.setValue('Test')

        const email = $('#input-email')
        const emailString = `test+${Date.now()}@test.com`
        email.setValue(emailString)

        const phone = $('#input-telephone')
        phone.setValue('0123456789')

        const orderId = $('#input-order-id')
        orderId.setValue('0123456789');

        const productName = $('#input-product')
        productName.setValue('Notebook')

        const productCode = $('#input-model')
        productCode.setValue('1234567890')

        const reasonForReturnOrderError = $("[name='return_reason_id'][value='3']")
        reasonForReturnOrderError.click()

        const productIsOpenedYes = $("[name='opened'][value='1']")
        productIsOpenedYes.click();

        const buttonSubmit = $('input[value="Submit"]')
        buttonSubmit.click()

        expect($('#content h1')).toHaveText('Product Returns', {
            wait: 3000
        })
    });
});


  // http://93.126.97.71:10082/index.php?route=account/voucher
describe("gift certificate", function () {
    it("can be purchased", function () {
        browser.url('/index.php?route=account/voucher')

        const recepientsName = $('#input-to-name')
        recepientsName.setValue('Test')

        const recepientsEmail = $('#input-to-email')
        const emailString = `test+${Date.now()}@test.com`
        recepientsEmail.setValue(emailString)

        const yourName = $('#input-from-name')
        yourName.setValue('Test')

        const yourEmail = $('#input-to-email')
        const yourEmailString = `test+${Date.now()}@test.com`
        yourEmail.setValue(yourEmailString)

        const giftCertificateThemeBirthday = $('[name="voucher_theme_id"][value="7"]')
        giftCertificateThemeBirthday.click()

        const agreenment = $('[name="agree"]')
        agreenment.click()

        const continueButton = $('[value="Continue"]')
        continueButton.click()

        expect($('#content h1')).toHaveText('Purchase a Gift Certificate', {
            wait: 3000
        })
    });
});


 // http://93.126.97.71:10082/index.php?route=information/contact
describe("contact us form", function () {
    it("should send messages to shop administration", function () {
        browser.url('/index.php?route=information/contact')

        const yourName = $('#input-name')
        yourName.setValue('Test User')

        const email = $('#input-email')
        const emailString = `test+${Date.now()}@test.com`
        email.setValue(emailString)

        const enquiry = $('#input-enquiry')
        enquiry.setValue('Test message')

        expect($('#content h1')).toHaveText('Contact Us', {
            wait: 3000
        })
    });
});


// Search items form
describe("search items", function () {
    it("should show results in case multiple items matches", function () {
        browser.url('/')
        browser.pause(2000)

        const searchInput=$('[name="search"]')
        searchInput.setValue('Mac')

        const searchButton=$('#search button')
        searchButton.click()

        expect($$('.product-thumb h4')).toHaveTextContaining('Mac',{wait:3000})
    });

    it("should redirect to 'no matching results' in case no items matched", function () {
        browser.url('/')
        browser.pause(2000)

        const searchInput=$('[name="search"]')
        searchInput.setValue('window phone')

        const searchButton=$('#search button')
        searchButton.click()

        expect($$('#content p:nth-of-type(2)')).toBePresent()
        expect($$('#content p:nth-of-type(2)')).toHaveText('There is no product that matches the search criteria.');
    });
});