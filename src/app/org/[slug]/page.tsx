import OrgChartContainer from "@/components/shared/Chart"
import React from "react"

const Page = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  return (
    <div>
      <OrgChartContainer />
    </div>
  )
}

export default Page
