const TransactionHistoryPage = ({ changePageHandler, transactionType }) => {
  return (
    <>
      <h2>TransactionHistoryPage {transactionType}</h2>

      <button
        type="button"
        onClick={() => {
          changePageHandler('main');
        }}
      >
        Back to Main
      </button>
    </>
  );
};

export default TransactionHistoryPage;
