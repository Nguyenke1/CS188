const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const bobId = uuid.v4();
    const customerBob = {
        customerId: bobId,
        firstName: 'Bobby',
        lastName: 'Bob',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+1(515)555-5555'
    };

    const customerCharms = {
        customerId: uuid.v4(),
        firstName: 'Lucky',
        lastName: 'Charms',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+1(777)777-7777'
    };

    const customerTitor = {
        customerId: uuid.v4(),
        firstName: 'John',
        lastName: 'Titor',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+1(666)666-6666'
    };

    let customers = [customerBob, customerCharms, customerTitor];

    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            return customers;
        }
    });

    server.route({
        method: 'GET',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        }
    });

    server.route({
        method: 'POST',
        path: '/customers',
        handler: (request, h) => {
            const customer = request.payload;
            const existingCust = customers.find((cust) => cust.customerId === customer.customerId);

            if (existingCust) {
                return h.response(existingCust).code(303);
            } else {
                customers.push(customer);

                return h.response(customer).code(201);
            }

        }
    });

    server.route({
        method: 'DELETE',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

            if (!customer) {
                return h.response().code(404);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.customerId !== customerId) {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    server.route({
        method: 'PUT',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const updatedCustomer = request.payload;

            if (customerId !== updatedCustomer.customerId) {
                return h.response().code(409);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.customerId === customerId) {
                    newCustomers.push(updatedCustomer);
                } else {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
