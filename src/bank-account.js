const divider = "||"

class BankAccount {
  constructor() {
      this.transactions = [];
      this.balance = 0;
  }

   depositMoney(date, amount) {
      
      const deposit = {
        depositDate: date,
        dividerOne: divider,
        credit: '         ',
        dividerTwo: divider,
        debit: amount,
        dividerThree: divider,
        balance: this.balance
      }

      this.transactions.push(deposit);
     
      return this.transactions[0]
  }

}

module.exports = BankAccount;