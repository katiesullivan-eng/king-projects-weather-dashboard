import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/alerts")
      .then(res => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <div style={{ padding: 20, color: "white", background: "#0B1F3A", height: "100vh" }}>
      <h2>King Projects – Flood Dashboard</h2>
      <p>Active Alerts: {data?.stats?.activeAlerts ?? "--"}</p>
      <p>Counties Affected: {data?.stats?.countiesAffected ?? "--"}</p>

      <h3>Alerts</h3>
      {data?.alerts?.map(alert => (
        <div key={alert.id} style={{ marginBottom: 10 }}>
          <strong>{alert.type}</strong> — {alert.location}
        </div>
      )) || "Loading..."}
    </div>
  );
}
