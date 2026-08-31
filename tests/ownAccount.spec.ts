import { test } from '../fixtures/customFixture';



test('Own Account Transfer', async ({ loginPage, users, ownAccount }) => {

    await loginPage.navigate();
    await loginPage.login(users.maker.username, users.maker.password, users.maker.question, users.maker.answer);
    await ownAccount.performOAT();
    
});