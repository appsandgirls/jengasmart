import { Timeline } from "react-gantt-timeline"

const GanttChart = () => {
  const data = [
    { start: new Date(), end: new Date(Date.now() + 86400000), name: "Task 1" },
    {
      start: new Date(),
      end: new Date(Date.now() + 172800000),
      name: "Task 2",
    },
  ]

  return <Timeline data={data} />
}

export default GanttChart
