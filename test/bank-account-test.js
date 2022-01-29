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
    const expected = { depositDate: 100122, dividerOne: '||', credit: 1000, dividerTwo: '||', debit: '         ', dividerThree: '||', balance: 1000 };
    expect(bankAccount.depositMoney(100122, 1000)).toEqual(expected);
  })

  it("Deposit two (in isolation)", () => {
    const expected = { depositDate: 130122, dividerOne: '||', credit: 2000, dividerTwo: '||', debit: '         ', dividerThree: '||', balance: 2000 };
    expect(bankAccount.depositMoney(130122, 2000)).toEqual(expected);
  })

  // Deposit one and two consecutively with updated balance
  it("Deposit consecutively", () => {
    const expected = [{ depositDate: 100122, dividerOne: '||', credit: 1000, dividerTwo: '||', debit: '         ', dividerThree: '||', balance: 1000 }, { depositDate: 130122, dividerOne: '||', credit: 2000, dividerTwo: '||', debit: '         ', dividerThree: '||', balance: 3000 }]
    bankAccount.depositMoney(100122, 1000)
    bankAccount.depositMoney(130122, 2000)
    expect(bankAccount.transactions).toEqual(expected)
  })

  it("Withdraw", () => {
    const expected = { depositDate: 140122, dividerOne: '||', credit: '         ', dividerTwo: '||', debit: 500, dividerThree: '||', balance: -500 };
    expect(bankAccount.withdrawMoney(140122, 500)).toEqual(expected);
  })

  // Deposit one and two and withdrawal consecutively
  it("Withdraw consecutively", () => {
    const expected = [{ depositDate: 100122, dividerOne: '||', credit: 1000, dividerTwo: '||', debit: '         ', dividerThree: '||', balance: 1000 }, { depositDate: 130122, dividerOne: '||', credit: 2000, dividerTwo: '||', debit: '         ', dividerThree: '||', balance: 3000 }, { depositDate: 140122, dividerOne: '||', credit: '         ', dividerTwo: '||', debit: 500, dividerThree: '||', balance: 2500 }]
    bankAccount.depositMoney(100122, 1000)
    bankAccount.depositMoney(130122, 2000)
    bankAccount.withdrawMoney(140122, 500)
    expect(bankAccount.transactions).toEqual(expected);
  })

  // Deposit
  // Accept amount and date
  // Add transaction to transactions array
  // it("Withdrawal", () => {
  //   const expected = { depositDate: 100122, dividerOne: '||', credit: 1000, dividerTwo: '||', debit: '         ', dividerThree: '||', balance: 1000 };
  //   expect(bankAccount.depositMoney(100122, 1000)).toEqual(expected);
  // })

})

// Date must be eight characters
