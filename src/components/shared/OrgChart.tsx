"use client"

import React, { useState, useEffect } from "react"
import { OrgNode } from "@/utils/OrgNode"
import OrgNodeComponent from "./OrgNodeComponent"
import { getOrgData } from "@/lib/actions/org.actions"
import { useParams } from "next/navigation"

const buildOrgTree = (data: any[]): OrgNode => {
  const nodes = new Map<string, OrgNode>()

  for (const item of data) {
    const node = new OrgNode(item.id, item.name, item.position, item.parentId)
    nodes.set(node.id, node)
  }

  let root: OrgNode | null = null

  for (const node of nodes.values()) {
    if (node.parent) {
      const parentNode = nodes.get(node.parent.id)
      if (parentNode) {
        parentNode.addChild(node)
      }
    } else {
      root = node
    }
  }

  if (!root) {
    throw new Error("Root node not found")
  }

  return root
}

const OrgChart: React.FC = () => {
  const params = useParams()
  const [data, setData] = useState<OrgNode[]>([])
  const [selectedNodes, setSelectedNodes] = useState<OrgNode[]>([])
  const slug = params.slug as unknown as string

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrgData({ slug })
      if (!data) return console.log("No data found")

      const root = buildOrgTree(data)
      setData([root])

      setSelectedNodes([root])
    }

    fetchData()
  }, [])

  const toggleCollapse = (node: OrgNode) => {
    node.collapsed = !node.collapsed
    setData([...data])
  }

  const getLevel = (node: OrgNode): number => {
    let level = 0
    let current = node
    while (current.parent) {
      level++
      current = current.parent
    }
    return level
  }

  const selectNode = (node: OrgNode) => {
    if (node.children.length === 0) return console.log("No children found")

    const nodeLevel = getLevel(node)

    const isSelected = selectedNodes.some(
      (selectedNode) => selectedNode.id === node.id
    )

    if (isSelected) {
      const filteredNodes = selectedNodes.filter((n) => getLevel(n) < nodeLevel)
      setSelectedNodes(filteredNodes)
    } else {
      const filteredNodes = selectedNodes.filter((n) => getLevel(n) < nodeLevel)
      setSelectedNodes([...filteredNodes, node])
      node.expandAncestors()
    }

    setData([...data])
  }

  return (
    <div>
      <h1 className="text-base font-semibold mb-4">Organization Chart</h1>
      <div className="max-w-6xl p-4 flex flex-col gap-16 bg-[#f7f7f7] ">
        <div className="flex flex-col items-center">
          {data.map((node) => (
            <OrgNodeComponent
              key={node.id}
              id={node.id}
              node={node}
              toggleCollapse={toggleCollapse}
              selectNode={selectNode}
              isSelected={selectedNodes.includes(node)}
            />
          ))}
        </div>
        {selectedNodes.length > 0 && (
          <>
            {selectedNodes.map((selectedNode) => (
              <div key={selectedNode.id}>
                <h2 className="text-sm font-medium uppercase mb-6 text-center text-gray-500">
                  {selectedNode.name}
                </h2>

                <div className="flex flex-wrap gap-10">
                  {selectedNode.children.map((child) => (
                    <OrgNodeComponent
                      id={child.id}
                      key={child.id}
                      node={child}
                      toggleCollapse={toggleCollapse}
                      selectNode={selectNode}
                      isSelected={selectedNodes.includes(child)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default OrgChart
