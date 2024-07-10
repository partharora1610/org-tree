import { getAllOrgs } from "@/lib/actions/org.actions"
import Link from "next/link"
import React from "react"

export default async function Home() {
  const data = await getAllOrgs()

  return (
    <>
      <div className="mt-20 max-w-6xl m-auto">
        <div className="flex gap-4">
          {data.map((org) => (
            <Link href={`org/${org.slug}`}>
              <div key={org.id} className="cursor-pointer">
                <div className="w-80 font-medium mb-4 bg-gray-100 rounded px-4 py-2 border">
                  <p className="text-xs uppercase text-gray-500 mb-2">
                    Organization Name
                  </p>
                  <h2 className="text-base">{org.name}</h2>
                  <span className="text-xs font-normal text-gray-500">
                    {org.nodeCount} employees
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
