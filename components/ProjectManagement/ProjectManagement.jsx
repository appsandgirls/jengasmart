import { Chart } from "react-google-charts"

// Utility function to convert days to milliseconds
/* const daysToMilliseconds = (days) => {
  return days * 24 * 60 * 60 * 1000
} */

const ProjectManagement = () => {
  // Define columns for Gantt chart
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ]

  // Define rows for Gantt chart
  const rows = [
    [
      "Research",
      "Find sources",
      new Date(2024, 10, 1),
      new Date(2024, 10, 5),
      null,
      100,
      null,
    ],
    [
      "Write",
      "Write paper",
      new Date(2024, 10, 6),
      new Date(2024, 10, 9),
      null,
      25,
      "Research",
    ],
    [
      "Edit",
      "Edit paper",
      new Date(2024, 10, 10),
      new Date(2024, 10, 13),
      null,
      50,
      "Write",
    ],
  ]

  // Prepare data for the chart
  const data = [columns, ...rows]

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Project Management</h2>
      <div style={{ marginTop: "20px" }}>
        <Chart
          chartType="Gantt"
          width="100%"
          height="400px"
          data={data}
          options={{
            height: 400,
            gantt: {
              trackHeight: 30,
            },
          }}
        />
      </div>
    </div>
  )
}

export default ProjectManagement
