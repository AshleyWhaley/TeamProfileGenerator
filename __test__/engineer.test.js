const Engineer = require("../lib/engineer");

describe('engineer', () => {
    describe('const prop', () => {
        it('should return correct form of data from const', () => {
            const test = new Engineer('six', 6, 'six');

            expect(typeof test.name).toBe('string');
            expect(typeof test.ID).toBe('number');
            expect(typeof test.email).toBe('string');

        });

        it('should return the name, id, and email from the const', () => {
            const test = new Engineer('Ashley', 666, 'crustybeauty@email.com');

            expect(typeof test.name).toBe('Ashley');
            expect(typeof test.ID).toBe(666);
            expect(typeof test.email).toBe('crustybeauty@email.com');
        });
    });

    describe('getName', () => {

        it('should return the name of the employee', () => {
            const test = new Engineer('Ashley', 666, 'crustybeauty@email.com');

        expect(test.getName()).toBe('Ashley');
        });
    });

    describe('getID', () => {

        it('should return ID of employee', () => {
            const test = new Engineer('Ashley', 666, 'crustybeauty@email.com');

        expect(test.getID()).toBe('666');
        });
    });

    describe('getEmail', () => {

        it('should return email of employee', () => {
            const test = new Engineer('Ashley', 666, 'crustybeauty@email.com');

        expect(test.getEmail()).toBe('crustybeauty@email.com');
        });
    });

    describe('getRole', () => {

        it('should return role of employee', () => {
            const test = new Engineer('Ashley', 666, 'crustybeauty@email.com');

        expect(test.getRole()).toBe('Engineer');
        });
    });
});