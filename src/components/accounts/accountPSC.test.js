
import { Account, AccountController } from './account.js';

describe('Account Tests', () => {
  const checkingAccount = new Account("Checking Account", 25);
  test('Check Account', () => {
    expect(checkingAccount.accountName).toEqual("Checking Account")
    expect(checkingAccount.balance).toEqual(25)
  });

  test('Check deposit', () => {
    checkingAccount.deposit(10);
    expect(checkingAccount.balance).toEqual(35);
  });

  test('Check withdrawal', () => {
    checkingAccount.withdrawal(30);
    expect(checkingAccount.balance).toEqual(5);
  });

  test('Check balance', () => {
    checkingAccount.showBalance();
    expect(checkingAccount.balance).toEqual(5);
  });
});

describe('Account Controller Tests', () => {
  const accountManager = new AccountController();

  test('Check Account creation', () => {
    accountManager.createAccount("Savings Account", 100)
    expect(accountManager.accountList[0].accountName).toEqual("Savings Account");
    expect(accountManager.accountList[0].balance).toEqual(100)
  });

  test('Check Account removal', () => {
    accountManager.removeAccount("Savings Account")
    expect(accountManager.accountList[0]).toEqual(undefined);
    expect(accountManager.accountList).toEqual([]);
  });

  test('Check Account Total', () => {
    accountManager.createAccount("Checking Account", 1000)
    accountManager.createAccount("Savings Account", 2000)
    expect(accountManager.totalAccounts()).toEqual(3000);
  });

  test('Check Account with Highest balance', () => {
    accountManager.highestAccount();
    expect(accountManager.highestAccount()).toEqual({ "accountName": "Savings Account", "balance": 2000 });
  });

  test('Check Account with Lowest balance', () => {
    accountManager.lowestAccount();
    expect(accountManager.lowestAccount()).toEqual({ "accountName": "Checking Account", "balance": 1000 });
  });

});





