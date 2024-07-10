"use client"
import React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"
import { useParams } from "next/navigation"

type EmployeeCardProps = {
  name: string
  position: string
  imageUrl: string
  nodeCount: number
  collapsed: boolean
  toggleCollapse: () => void
  selectNode: () => void
  id: string
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  id,
  position,
  imageUrl,
  nodeCount,
  collapsed,
  toggleCollapse,
  selectNode,
}) => {
  const params = useParams()
  const slug = params.slug as unknown as string

  return (
    <div className="relative flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-sm w-56 cursor-pointer py-4">
      <Avatar className="absolute top-[-22px] w-9 h-9">
        <AvatarImage src={imageUrl} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <Link href={`${slug}/${id}`}>
          <div className="font-medium text-sm hover:underline hover:cursor-pointer">
            {name}
          </div>
        </Link>
        <div className="text-gray-500 text-xs">{position}</div>
      </div>
      <div
        className={`absolute bottom-[-6px] cursor-pointer  text-white rounded-full text-xs font-semibold px-1 pr-1 ${
          nodeCount != 0 ? "bg-gray-900" : "bg-gray-400"
        }`}
      >
        <div
          className={`flex items-center`}
          onClick={(e) => {
            e.stopPropagation()
            selectNode()
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
