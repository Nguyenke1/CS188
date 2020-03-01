const uuid = require('uuid');

let cartItems = [
    {
        'cartItemId': uuid.v4(),
        'cartId': 'abf5cd03-7bf4-49e9-8f0b-380f90c86ec1'
        'itemId': 'def5cd03-7bf4-49e9-8f0b-380f90c86ec1'
        'quantity': 20
    },

    {
        'cartItemId': uuid.v4(),
        'cartId': 'acf5cd03-7bf4-49e9-8f0b-380f90c86ec1'
        'itemId': '504550bc-d21e-43c3-8767-0c1bd59a173c'
        'quantity': 10
    }

];

const selectCustomers = () => ({
    rows: customers,
    error: new Error(),
    driver: 'postgres'
});

const selectCartItemByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cartItemId'] === cartId);

const selectCartItemsByCartId = (cartId) => ({
    rows: cartItems.filter((cartItem) => cartItem['cartId'] === cartItemId)
});

module.exports = {
    selectCartItems,
    selectCartItemsByCartItemId,
    selectCartItemsByCartId
};