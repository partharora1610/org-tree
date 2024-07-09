import React from "react"
import EmployeeCard from "./EmployeeCard"
import { OrgNode } from "@/utils/OrgNode"

type OrgNodeProps = {
  node: OrgNode
  toggleCollapse: (node: OrgNode) => void
  selectNode: (node: OrgNode) => void
  isSelected: boolean
}

const OrgNodeComponent: React.FC<OrgNodeProps> = ({
  node,
  toggleCollapse,
  selectNode,
  isSelected,
}) => {
  return (
    <div
      key={node.id}
      className={`flex flex-col border-2 items-center bg-gray-100 m-auto rounded-md ${
        isSelected ? "border-2 border-black" : ""
      }`}
    >
      <div className="flex items-center flex-col">
        <EmployeeCard
          name={node.name}
          position={node.position}
          imageUrl="https://github.com/shadcn.png"
          nodeCount={node.children.length}
          collapsed={node.collapsed}
          toggleCollapse={() => toggleCollapse(node)}
          selectNode={() => selectNode(node)}
        />
      </div>
    </div>
  )
}

export default OrgNodeComponent
