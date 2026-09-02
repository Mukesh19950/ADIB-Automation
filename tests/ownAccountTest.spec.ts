import { test } from '../fixtures/customFixture';


test('Login with Valid Credentails', async ({ loginPage, users, dashboardPage }) => {

    await loginPage.navigate();
    await loginPage.login(users.maker.username, users.maker.password, users.maker.question, users.maker.answer);
    await dashboardPage.verifyDashboard();
    await dashboardPage.clickPaymentMenu();
    

});