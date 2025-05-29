import { useEffect, useState } from "react";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const authToken = localStorage.getItem("auth_token");

  useEffect(() => {
    if (!authToken) {
      setError("You must be logged in to view transactions.");
      return;
    }
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:3939/transactions", {
        headers: {
          Authorization: `${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const data = await response.json();
      setTransactions(data.transactions);
    } catch (e:any) {
      setError(e.message);
    }
  };
  return (
    <div className="mx-auto p-4">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Transactions</div>
          <div className="card-body">
            {transactions?.length > 0 ? (
              <ul className="list-group">
                {transactions.map((transaction:any, index) => (
                  <li key={index} className="list-group-item">
                    {transaction?.description} - ${transaction?.amount}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted">No transactions found.</p>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4">

      </div>
    </div>
  );
};

export default Dashboard;
