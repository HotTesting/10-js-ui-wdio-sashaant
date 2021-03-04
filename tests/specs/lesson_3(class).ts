describe('Website', () => {

    it('should open', () => {
        console.log(browser.sessionId)
        browser.setWindowSize(1280, 800)

        browser.url('/');
        // expect($('#logo')).toBeDisplayed();
        // browser.pause(3000);
        console.time('Session restart took')
        browser.reloadSession()
        console.log(browser.sessionId)
        console.log('*** Session restart took ***')
        console.timeEnd('Session restart took')
    });

    // it('How to clear local storage', function () {
    //     browser.execute(function () {
    //         window.localStorage.clear();
    //         window.sessionStorage.clear();
    //     })
    // })

    it('How to clear local storage', function () {
        browser.pause(5000)
        try {
            browser.execute(function () {
                window.localStorage.clear();
                window.sessionStorage.clear();
            })
        } catch (err) {
            console.error('Failed to clear local and session storage')
        }
    })
})
