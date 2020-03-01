const {
    selectCartItems,
    selectCartItemByCartItemId,
    selectCartItemsByCartId

} = require('../repositories/cartItem-repository');

const mapToModel = (cartItem) => ({
    cartItemId: cartItem['cartItemId'],
    cartId: cartItem['cartId'],
    itemId: cartItem['itemId'],
    quantity: cartItem['quantity']
});

const getAllCartItems = () => {
    const {rows} = selectCartItems();

    return rows.map(mapToModel);
};

const getCartItemByCartItemId = (cartItemId) => {
    const cartItem = selectCartItemByCartItemId(itemId);

    return mapToModel(cartItem);
};

const getCartItemsByCartId = (cartId) => {
    const {rows} = selectCartItemsByCartId(cartId);

    return rows.map(mapToModel);
}

module.exports = {
    getAllCartItems,
    getCartItemByCartItemId,
    getCartItemsByCartId
};