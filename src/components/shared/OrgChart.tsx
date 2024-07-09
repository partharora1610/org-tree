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
    // No children found
    if (node.children.length === 0) return console.log("No children found")

    const nodeLevel = getLevel(node)

    // Check if the node is already selected
    const isSelected = selectedNodes.some(
      (selectedNode) => selectedNode.id === node.id
    )

    if (isSelected) {
      // If the node is already selected, filter out the node and any nodes below it
      const filteredNodes = selectedNodes.filter((n) => getLevel(n) < nodeLevel)
      setSelectedNodes(filteredNodes)
    } else {
      // Otherwise, filter out nodes that are on the same level or below the selected node
      const filteredNodes = selectedNodes.filter((n) => getLevel(n) < nodeLevel)
      setSelectedNodes([...filteredNodes, node])
      node.expandAncestors()
    }

    setData([...data])
  }

  return (
    <div className="container mx-auto p-4 flex flex-col gap-12">
      <div className="flex flex-col items-center">
        {data.map((node) => (
          <OrgNodeComponent
            key={node.id}
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
              <h2 className="text-base font-medium mb-4 text-center">
                {selectedNode.name}
              </h2>

              <div className="flex flex-wrap gap-10">
                {selectedNode.children.map((child) => (
                  <OrgNodeComponent
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
  )
}

export default OrgChart
{
  /* <div className="relative flex items-center justify-center py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative bg-white px-2 text-gray-500">
                  Content
                </div>
              </div> */
}
