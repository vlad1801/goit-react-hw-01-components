import css from './TransactionsStyles.module.css'

const TransactionItem =({type, amount, currency}) => {
  return (
    <tr className={css.tableRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}


export default TransactionItem;