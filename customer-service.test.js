const uuid = require('uuid');

const {
    getAllCarts,
    getCustomerByCustomerId,
} = require('../../services/customer-service');
const {
    selectCustomers,
    selectCustomerByCartId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCarts', () => {
    let expectedFirstCustomer,
        expectedFirstCustomerId;

    beforeEach(() => {
        expectedFirstCustomerId = uuid.v4();

        expectedFirstCustomer = {
            customerId: expectedFirstCustomerId
        };

        selectCustomers.mockReturnValue({
            rows: [{
                'customerID': expectedFirstCustomerId
            }]
        });

        selectCustomerByCustomerId.mockReturnValue({
            'customerID': expectedFirstCustomerId
        });
    });

    it('should get all the customers', () => {
        const actualCustomers = getAllCustomers();

        expect(selectCustomers).toHaveBeenCalledTimes(1);

        expect(actualCustomers).toEqual([
            expectedFirstCustomer
        ]);
    });

    it('should get a customer by a specific customerId', () => {
        const actualCustomer = getCustomerByCustomerId(expectedFirstCartId);

        expect(selectCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCustomerByCustomerId).toHaveBeenCalledWith(expectedFirstCustomerId);

        expect(actualCustomer).toEqual(expectedFirstCustomer);
    });

});