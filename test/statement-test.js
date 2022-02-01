const Statement = require('../src/statement');
const Transaction = require('../src/transaction');

describe('Statement', () => {
  it('Empty transaction (headers only)', () => {
    // set up
    const statement = new Statement([]);

    const expected = 'date||credit||debit||balance';
    // execute
    const result = statement.getStatement();
    // verify
    expect(result).toEqual(expected);
  });

  it('Single deposit', () => {
    // set up
    const deposit = new Transaction(100121, 1000);
    const transactions = [deposit];
    const statement = new Statement(transactions);

    const expected = 'date||credit||debit||balance\n100121||1000||||1000';
    // execute
    const result = statement.getStatement();
    // verify
    expect(result).toEqual(expected);
  });

  it('Single withdrawal', () => {
    // set up
    const withdrawal = new Transaction(140121, -500);
    const transactions = [withdrawal];
    const statement = new Statement(transactions);

    const expected = 'date||credit||debit||balance\n140121||||500||-500';
    // execute
    const result = statement.getStatement();
    // verify
    expect(result).toEqual(expected);
  });

  it('Deposits and withdrawals', () => {
    // set up
    const deposit = new Transaction(100121, 1000);
    const withdrawal = new Transaction(140121, -500);
    const transactions = [deposit, withdrawal];
    const statement = new Statement(transactions);

    const expected =
      'date||credit||debit||balance\n' + '140121||||500||500\n' + '100121||1000||||1000';
    // execute
    const result = statement.getStatement();
    // verify
    expect(result).toEqual(expected);
  });
});
