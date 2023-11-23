const Table = (props) => {
  return (
    <div>
      <table className="mx-auto mt-5 fs-1 text-light">
        <thead>
          <tr>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((totalpricing) => (
            <tr key={totalpricing.totalprice}>
              <td>{totalpricing.totalprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
