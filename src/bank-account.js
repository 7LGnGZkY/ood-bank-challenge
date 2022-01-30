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
        date: date,
        credit: amount,
        debit: blank,
        balance: this.balance
      }

      this.transactions.push(deposit);
      for (let i=0; i<this.transactions.length; i++)
      return this.transactions[i]
  }

  withdrawMoney(date, amount) {
    this.balance -= amount

    const withdrawal = {
      date: date,
      credit: blank,
      debit: amount,
      balance: this.balance
    }

    this.transactions.push(withdrawal);
      for (let i=0; i<this.transactions.length; i++)
      return this.transactions[i]
  }


  printStatement() {
    
    const printHeader = "date || credit  || debit  || balance"

    const printTransactions = "" + this.transactions[0].date + divider + " " + (Math.round(this.transactions[0].credit * 100) / 100).toFixed(2) + " " + divider + "         " + divider + " " + (Math.round(this.balance * 100) / 100).toFixed(2);
      
    return `${printHeader}\n${printTransactions}`

  }

}

module.exports = BankAccount;