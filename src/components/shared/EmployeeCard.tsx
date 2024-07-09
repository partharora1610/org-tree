import React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

type EmployeeCardProps = {
  name: string
  position: string
  imageUrl: string
  nodeCount: number
  collapsed: boolean
  toggleCollapse: () => void
  selectNode: () => void
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  position,
  imageUrl,
  nodeCount,
  collapsed,
  toggleCollapse,
  selectNode,
}) => {
  return (
    <div
      className="relative flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-sm w-56 cursor-pointer py-4"
      onClick={selectNode}
    >
      <Avatar className="absolute top-[-22px] w-9 h-9">
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <div className="font-medium text-sm">{name}</div>
        <div className="text-gray-500 text-xs">{position}</div>
      </div>
      <div className="absolute bottom-[-6px] cursor-pointer bg-gray-900 text-white rounded-full text-xs font-semibold px-1 pr-1">
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation()
            toggleCollapse()
          }}
        >
          {nodeCount}
          {collapsed ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
