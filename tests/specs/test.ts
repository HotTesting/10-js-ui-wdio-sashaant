let items = [
    {title:'iPod Classic'},
    {title:'iPod Nano'},
    {title:'iPod Shuffle'},
    {title:'iPod Touch'}
]

let user = {
    email: 'wishtest@gmail.com',
    password: 'wishtest@gmail.com'

}
beforeEach(function() {
    browser.deleteAllCookies();
});

let wishlist = function(item){
    const content = $('#content')
    console.log(`Test for ${item.title}`)
    browser.url('/mp3-players');
    let itemPage = content.$( `.product-thumb [alt="${item.title}"]`);
    itemPage.click();
    browser.pause(1000)

    const wishButton = $('#content i[class="fa fa-heart"]')
    wishButton.click()
    browser.pause(500)

    const alert = $('[class="alert alert-success alert-dismissible"] > :nth-child(2)')
    expect(alert).toHaveText(`${item.title}`)

    const alertComparisonButton= $('[class="alert alert-success alert-dismissible"] > :nth-child(3)')
    alertComparisonButton.click()
    browser.pause(1000)

    expect($('h2')).toHaveText('My Wish List',{wait:2000, interval:200})
    expect($('.table-responsive .text-left :nth-of-type(1)')).toHaveText(`${item.title}`)

    const removeButton = $('[class = "btn btn-danger"]')
    removeButton.click()
    browser.pause(1000)
    expect(content.$('p')).toHaveText('Your wish list is empty.',{wait:2000, interval:200})
}


let addingToCart = function(item){
    console.log(`Test for ${item.title}`)
    browser.url('/mp3-players');
    const content = $('#content')
    let itemPage = content.$( `.product-thumb [alt="${item.title}"]`);
    itemPage.click();
    browser.pause(1000)

    const head = $('#product-product h1')
    expect(head).toHaveText(`${item.title}`)

    const addToCartButton = $('#product-product #button-cart')
    addToCartButton.click()
    browser.pause(500)

    const cartButton = $('span#cart-total')
    cartButton.click()
    browser.pause(1000)

    expect($('.text-left')).toHaveText(`${item.title}`)

    const viewCart = $('.text-right a:nth-child(1)')
    viewCart.click()

    expect(content.$('h1')).toHaveTextContaining('Shopping Cart',{wait:2000, interval:200})

    const removeButton = content.$('[class="btn btn-danger"]')
    removeButton.click()
    browser.pause(1000)
    expect(content.$('p')).toHaveText('Your shopping cart is empty!',{wait:2000, interval:200})
}

let comparisonFunction = function (item) {
    console.log(`Test for ${item.title}`)
    browser.url('/mp3-players');
    const content = $('#content')
    let itemPage = content.$( `.product-thumb [alt="${item.title}"]`);
    itemPage.click();
    browser.pause(1000)

    const comparisonButton= $('[class="fa fa-exchange"]')
    comparisonButton.click()
    browser.pause(1000)

    const alert = $('[class="alert alert-success alert-dismissible"] > :nth-child(2)')
    expect(alert).toHaveText(`${item.title}`)

    const alertComparisonButton= $('[class="alert alert-success alert-dismissible"] > :nth-child(3)')
    alertComparisonButton.click()
    browser.pause(1000)


    expect($('#product-compare h1')).toHaveText('Product Comparison')
    expect($('tr>td>a')).toHaveText(`${item.title}`)

    const removeButton = $('a=Remove')
    removeButton.click()
    browser.pause(1000)

    expect($('#content p')).toHaveText('You have not chosen any products to compare.',{wait:2000, interval:200})
}

let login = function () {
    browser.url('/');
    const myAccount =$('[title="My Account"]')
    myAccount.click()
    browser.pause(500)
    const login = $('[class="dropdown-menu dropdown-menu-right"]').$('a=Login')
    login.click()
    const content = $('#content')

    const userEmail = content.$('#input-email')
    userEmail.setValue(`${user.email}`)

    const userPassword = content.$('#input-password')
    userPassword.setValue(`${user.password}`)

    const loginSubmit = content.$('[type="submit"]')
    loginSubmit.click()
    browser.pause(500)
    browser.url('/mp3-players');
}

describe('Guest user', function () {

    items.map(item => {
        it(`${item.title} can be added to cart by guest user`, function () {
            addingToCart(item)
        })

        it(`${item.title} be selected for comparison by guest`, function () {
            comparisonFunction(item)
        })
    })

})

describe('Registered user', function () {
beforeEach(function () {
    login()
    }
)
    items.map(item => {

        it(`${item.title} can be added to wishlist by registered user`, function () {
            wishlist(item)
        })

        it(`${item.title} can be added to cart by registered user`, function () {
            addingToCart(item)
        })

        it(`${item.title} be selected for comparison by registered user`, function () {
            comparisonFunction(item)
        })
    })

})