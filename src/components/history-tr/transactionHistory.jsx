export const TransactionHistory = ({ items }) => {
  return (
    <table className="table-transactio">
      <thead className="table-name">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="">
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className="table-type-name">{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
