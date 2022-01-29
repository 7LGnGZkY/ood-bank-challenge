const BankAccount = require("../src/bank-account.js");

describe("Bank Account", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  // Deposit
  // Accept amount and date
  // Add transaction to transactions array
  // 
  it("Deposit", () => {
    const expected = { depositDate: 140122, dividerOne: '||', credit: '         ', dividerTwo: '||', debit: 500, dividerThree: '||', balance: 0 };
    expect(bankAccount.depositMoney(140122, 500)).toEqual(expected);
  })

})

// Date must be eight characters
