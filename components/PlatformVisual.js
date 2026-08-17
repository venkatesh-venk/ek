import styles from "./PlatformVisual.module.css";

const visuals = {
  dashboard: {
    title: "Program Dashboard",
    rows: [
      { label: "Active Engagements", value: "12", trend: "+2" },
      { label: "On-track Milestones", value: "94%", trend: "↑" },
      { label: "Open Risks", value: "3", trend: "↓" },
    ],
    bars: [72, 88, 65, 91, 78],
  },
  banking: {
    title: "Core Banking Monitor",
    rows: [
      { label: "Daily Transactions", value: "2.4M", trend: "Live" },
      { label: "System Uptime", value: "99.97%", trend: "↑" },
      { label: "Compliance Score", value: "100%", trend: "✓" },
    ],
    bars: [95, 98, 92, 99, 97],
  },
  aviation: {
    title: "Flight Operations",
    rows: [
      { label: "Active Flights", value: "847", trend: "Live" },
      { label: "On-time Performance", value: "91.2%", trend: "↑" },
      { label: "Crew Utilization", value: "87%", trend: "→" },
    ],
    bars: [80, 92, 88, 85, 91],
  },
  cloud: {
    title: "Cloud Infrastructure",
    rows: [
      { label: "Workloads Migrated", value: "186", trend: "+14" },
      { label: "Cost Reduction", value: "35%", trend: "↓" },
      { label: "DR Readiness", value: "Active", trend: "✓" },
    ],
    bars: [60, 75, 82, 90, 95],
  },
  analytics: {
    title: "Analytics Hub",
    rows: [
      { label: "Data Pipelines", value: "48", trend: "Active" },
      { label: "Fraud Alerts (24h)", value: "127", trend: "↓" },
      { label: "Reports Generated", value: "1.2K", trend: "↑" },
    ],
    bars: [55, 70, 85, 78, 92],
  },
};

export default function PlatformVisual({ type = "dashboard" }) {
  const v = visuals[type] || visuals.dashboard;

  return (
    <div className={styles.wrap}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <span /><span /><span />
          <span className={styles.winTitle}>{v.title}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.metrics}>
            {v.rows.map((r) => (
              <div key={r.label} className={styles.metric}>
                <span className={styles.metricLabel}>{r.label}</span>
                <span className={styles.metricValue}>{r.value}</span>
                <span className={styles.metricTrend}>{r.trend}</span>
              </div>
            ))}
          </div>
          <div className={styles.chart}>
            {v.bars.map((h, i) => (
              <div key={i} className={styles.barWrap}>
                <div className={styles.bar} style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.glow} />
    </div>
  );
}
