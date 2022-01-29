const divider = "||"
const blank = '         '

class BankAccount {
  constructor() {
      this.transactions = [];
      this.balance = 0;
  }

   depositMoney(date, amount) {
      this.balance += amount
      
      const deposit = {
        depositDate: date,
        dividerOne: divider,
        credit: amount,
        dividerTwo: divider,
        debit: blank,
        dividerThree: divider,
        balance: this.balance
      }

      this.transactions.push(deposit);
      for (let i=0; i<this.transactions.length; i++)
      return this.transactions[i]
  }

  withdrawMoney(date, amount) {
    this.balance -= amount

    const withdrawal = {
      depositDate: date,
      dividerOne: divider,
      credit: blank,
      dividerTwo: divider,
      debit: amount,
      dividerThree: divider,
      balance: this.balance
    }

    this.transactions.push(withdrawal);
      for (let i=0; i<this.transactions.length; i++)
      return this.transactions[i]
  }

  printStatement() {
    
  }

}

module.exports = BankAccount;