const uuid = require('uuid');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
    let firstCustomerId,
        secondCustomerId,
        thirdCustomerId,
        fourthCustomerId,
        expectedCustomerId,
        expectedFirstCustomer,
        expectedSecondCustomer,
        expectedThirdCustomer,
        expectedFourthCustomer;

    beforeEach(() => {
        firstCustomerId = '44ef41f4-485b-44d6-8635-7418e026be89';
        secondCustomerId = '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3';
        thirdCustomerId = '66ef41f4-485b-44d6-8635-7418e026be89';
        fourthCustomerId = '7781858f-a20e-4ada-9ccf-dd3e2cea0eb3';


        expectedFirstCustomer = {
            'customerId': firstCustomerId,
        };
        expectedSecondCustomer = {
            'customerId': secondCustomerId,
        };

        expectedThirdCustomer = {
            'customerId': thirdCustomerId,
        };
        expectedFourthCustomer = {
            'customerId': fourthCustomerId,
        };
    });

    describe('selectCustomers', () => {
        it('should return all the customers', () => {
            const actualCustomers = selectCustomers();
            const [actualFirstCustomer, actualSecondCustomer, actualThirdCustomer, actualFourthCustomer] = actualCustomers.rows;

            expect(actualFirstCustomer).toEqual(expectedFirstCustomer);
            expect(actualSecondCustomer).toEqual(expectedSecondCustomer
            expect(actualThirdCustomer).toEqual(expectedThirdCustomer);
            expect(actualFourthCustomer).toEqual(expectedFourthCustomer);        
        });
    });

    describe('selectCustomerByCustomerId', () => {
        it('should return a specific customer by customerId', () => {
            const actualFirstCustomer = selectCustomerByCustomerId(firstCustomerId);

            expect(actualFirstCustomer).toEqual({
                'customerID': expectedCustomerId
            });

            const actualSecondCustomer = selectCustomerByCustomerId(secondCustomerId);

            expect(actualSecondCustomer).toEqual({
                'customerID': expectedCustomerId
            });

            const actualThirdCustomer = selectCustomerByCustomerId(thirdCustomerId);

            expect(actualThirdCustomer).toEqual({
                'customerID': expectedCustomerId
            });

            const actualFourthCustomer = selectCustomerByCustomerId(fourthCustomerId);

            expect(actualFourthCustomer).toEqual({
                'customerID': expectedCustomerId
            });
        });
    });
});