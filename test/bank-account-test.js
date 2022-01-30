const BankAccount = require("../src/bank-account.js");

describe("Bank Account", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  // Deposit
  // Accept amount and date
  // Add transaction to transactions array
  it("Deposit one", () => {
    const expected = { date: 100122, credit: 1000, debit: '         ', balance: 1000 };
    expect(bankAccount.depositMoney(100122, 1000)).toEqual(expected);
  })

  it("Deposit two (in isolation)", () => {
    const expected = { date: 130122, credit: 2000, debit: '         ', balance: 2000 };
    expect(bankAccount.depositMoney(130122, 2000)).toEqual(expected);
  })

  // Deposit one and two consecutively with updated balance
  it("Deposit consecutively", () => {
    const expected = [{ date: 100122, credit: 1000, debit: '         ', balance: 1000 }, { date: 130122, credit: 2000, debit: '         ', balance: 3000 }]
    bankAccount.depositMoney(100122, 1000)
    bankAccount.depositMoney(130122, 2000)
    expect(bankAccount.transactions).toEqual(expected)
  })

  // Withdrawal
  it("Withdraw", () => {
    const expected = { date: 140122, credit: '         ', debit: 500, balance: -500 };
    expect(bankAccount.withdrawMoney(140122, 500)).toEqual(expected);
  })

  // Deposit one and two and withdrawal consecutively
  it("Withdraw consecutively", () => {
    const expected = [{ date: 100122, credit: 1000, debit: '         ', balance: 1000 }, { date: 130122, credit: 2000, debit: '         ', balance: 3000 }, { date: 140122, credit: '         ', debit: 500, balance: 2500 }]
    bankAccount.depositMoney(100122, 1000)
    bankAccount.depositMoney(130122, 2000)
    bankAccount.withdrawMoney(140122, 500)
    expect(bankAccount.transactions).toEqual(expected);
  })

  // Print statement (a)
  it("Print statement for first deposit", () => {
    const expected = 
`date || credit  || debit  || balance`+'\n'+`100122|| 1000.00 ||         || 1000.00`
    bankAccount.depositMoney(100122, 1000)
    expect(bankAccount.printStatement()).toEqual(expected)
  })

})

