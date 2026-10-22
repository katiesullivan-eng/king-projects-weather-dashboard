export default function handler(req, res) {
  const alerts = [
    {
      id: "1",
      type: "Flood Warning",
      severity: "Warning",
      location: "Nueces County, TX",
      expires: "2026-10-22T18:00:00Z"
    },
    {
      id: "2",
      type: "Flash Flood Watch",
      severity: "Watch",
      location: "San Patricio County, TX",
      expires: "2026-10-22T21:00:00Z"
    }
  ];

  res.status(200).json({
    stats: {
      activeAlerts: alerts.length,
      warningClass: alerts.filter(a => a.severity === "Warning").length,
      statesAffected: 1,
      countiesAffected: 2
    },
    alerts
  });
}
