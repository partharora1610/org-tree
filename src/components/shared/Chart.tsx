import React from "react"
import OrgChart from "./OrgChart"

const OrgChartContainer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Organization Chart</h1>
      <OrgChart />
    </div>
  )
}

export default OrgChartContainer
