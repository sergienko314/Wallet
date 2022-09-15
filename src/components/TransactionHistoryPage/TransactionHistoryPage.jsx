const TransactionHistoryPage = ({ changePageHandler, transactionType, transactions }) => {
  return (
    <>
      <h2>TransactionHistoryPage {transactionType}</h2>
      console.log(transactionType)

      <button
        type="button"
        onClick={() => {
          changePageHandler('main');
        }}
      >
        Back to Main
      </button>
      <ul>
      {transactions.map(()=>{
        return <li>
        <p>
          <span>date</span>
          <span>time</span>
        </p>
        <p>comment</p>
        <div>
          <p>summary</p>
          <p>currency</p>
        </div>
        <button type="button">...</button>
      </li>
      })}
      
      </ul>
        
    </>
  );
};

export default TransactionHistoryPage;
