const {
    getAllCustomers,
    getCustomerByCustomerId,
    addCustomer,
    modifyCustomer,
    removeCustomerByCustomerId
} = require('../service/customer-service');
const {getCartsByCustomerId} = require('../services/cart-service');

const getCustomersRoute = (server) => {
    server.get('/customers', (req, res, next) => {
        res.send(200, getAllCustomers());
        return next();
    })
};


const addCustomersRoute = (server) => {
    server.post('/customers', (req, res, next) => {
        const customer = req.params;
        addCustomer(customer);
        res.send(201);
        return next();
    })
};

const modifyCustomerRoute = (server) => {
    server.put('/customers/:customerId', (req, res, next) => {
        modifyCustomer(req.params);
        res.send(200);
        return next();
    })
};

const deleteCustomerRoute = (server) => {
    server.del('/customers/:customerId', (req, res, next) => {
        removeCustomerByCustomerId(req.params.customerId);
        res.send(204);
        return next();
    })
};

const getCustomerByCustomerIdRoute = (server) => {
    server.get('/customers/:customerId', (req, res, next) => {
        try {
            const customer = getCustomerByCustomerId(req.params.customerId);
            res.send(200, customer);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const initCustomerControllers = (server) => {
    getCustomersRoute(server);
    getCustomerByCustomerIdRoute(server);
    getCustomersCartsRoute(server);
    addCustomersRoute(server);
    modifyCustomerRoute(server);
    deleteCustomerRoute(server);
};

module.exports = {
    initCustomerControllers
};
