const {
    getAllCarts,
    getCartByCartId,
    addCart,
    modifyCart,
    removeCartByCartId
} = require('../service/cart-service');

const getCartsRoute = (server) => {
	server.get('/carts', (req, res, next) => {
		res.send(200, getAllCarts());
		return next();
	})
};

const getCartByCartIdRoute = (server) => {
	server.get('/carts/:cartId', (req, res, next) => {
		try {
			const cart = getCartByCartId(req.params.cartId);
			res.send(200, cart);
		} catch(error) {
			res.send(404);
		}

		return next();
	})
};

const updateCartRoute = (server) => {
	server.put('/carts/:cartId', (req, res, next) => {
		modifyCart(req.params);
		res.send(200);
		return next();
	})
};

const addCartRoute = (server) => {
	server.post('/carts', (req, res, next) => {
		const cart = req.params;
		addCart(cart);
		res.send(201);
		return next();
	})
};

const deleteCartRoute = (server) => {
	server.del('/carts/:cartId', (req, res, next) => {
		removeCartByCartId(req.params.cartId);
		res.send(204);
		return next();
	})
};

const initCartControllers = (server) => {
	getCartsRoute(server);
	getCartByCartIdRoute(server);
	addCartRoute(server);
	updateCartRoute(server);
	deleteCartRoute(server);
};

module.exports = {
	initCartControllers
};
