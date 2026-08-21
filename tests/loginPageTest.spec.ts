import { test } from '../fixtures/customFixture';

test('Login with Valid Credentails', async ({ loginPage, users }) => {

    await loginPage.navigate();
    await loginPage.login(users.maker.cif, users.maker.username, users.maker.password);
    

});

test('Login with InValid Credentails', async ({ loginPage, users }) => {

    await loginPage.navigate();
    await loginPage.login(users.invaliduser.cif, users.invaliduser.username, users.invaliduser.password);

});






