class Statement {
  // Accept array of transaction objects
  constructor(transactions) {
    this.transactions = transactions;
  }

  getStatement() {
    let balance = 0;
    let statementLines = [];

    for (const transaction of this.transactions) {
      let line = transaction.date + '||';

      if (transaction.amount > 0) {
        line += transaction.amount + '||||';
      } else {
        line += '||' + transaction.amount * -1 + '||';
      }
      balance += transaction.amount;
      line += balance;

      statementLines.unshift(line);
    }
    statementLines.unshift('date||credit||debit||balance');

    return statementLines.join('\n');
  }
}

module.exports = Statement;
