import { useEffect, useState } from "react";
import "./App.css";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos",
  );

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
    "#F1948A",
    "#73C6B6",
  ];

  if (loading) {
    return <h2 className="message">Loading...</h2>;
  }

  if (error) {
    return <h2 className="message">Error: {error}</h2>;
  }

  return (
    <div className="app">
      <h1>Photos</h1>

      <div className="photo-grid">
        {data.slice(0, 50).map((photo, index) => (
          <div className="card" key={photo.id}>
            <div
              className="photo-box"
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            ></div>

            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
