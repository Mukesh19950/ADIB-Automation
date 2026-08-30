import { test } from '../fixtures/customFixture';


test('Login with Valid Credentails', async ({ loginPage, users }) => {

    await loginPage.navigate();
    await loginPage.login(users.maker.username, users.maker.password, users.maker.question, users.maker.answer);
    

});






