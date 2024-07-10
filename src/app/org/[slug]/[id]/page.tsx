import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { getOrgNodeData } from "@/lib/actions/org.actions"

const Page = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  const id = params.id as unknown as string
  const data = await getOrgNodeData({ id })

  if (!data) return null

  return (
    <div className="px-4 mt-20">
      <div className="grid grid-cols-10 gap-6 w-full">
        <div className="px-9 py-7 bg-white border shadow-lg rounded-xl col-span-8">
          <div className="flex flex-col">
            <ProfileHeader name={data.name} position={data.position} />
            <DividerComponent />
            <OrgTeam />
            <DividerComponent />
            <ProfileTimeline />
          </div>
        </div>
        <div className="min-w-2xl col-span-2">
          <div className="px-4 py-4">
            <p className="text-base font-semibold">Related People</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileHeader = ({
  name,
  position,
}: {
  name: string
  position: string
}) => {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>{position}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button className="px-8 py-1">Contact</Button>
          <ProfileDropwdown />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[13px] text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus minus architecto ex consectetur laudantium sed fugit
          consequuntur, placeat illum quisquam sint earum id, sit cum libero
          eligendi alias molestias explicabo, non accusamus dolores repellendus
          minima corporis. Ut odio temporibus voluptatem adipisci cumque
          sapiente, iusto aliquam veritatis molestiae! Architecto, voluptates
          ut.
        </p>
      </div>

      <div>
        <p className="text-[13px] text-gray-900 font-semibold mb-2">Links</p>
        <div className="flex gap-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="w-4 h-4 bg-gray-300 rounded-full items-center"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

const DividerComponent = () => {
  return <div className="w-full h-[1px] bg-gray-200 mt-8 mb-6"></div>
}

const OrgTeam = () => {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900 mb-4">Teams</h3>
      <div className="flex gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-gray-100 w-96 px-4 py-4 rounded-md">
            <h4 className="font-semibold text-sm">Founding Team</h4>
            <p className="text-[13px] text-gray-500">7 members</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const ProfileDropwdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size="icon" className="bg-white border hover:bg-gray-100">
          <MoreHorizontal className="text-gray-900" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const ProfileTimeline = () => {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900 mb-4">Timeline</h3>
      <div className="flex gap-3 items-center">
        <div className="w-9 h-9 bg-gray-300 rounded"></div>
        <div>
          <h3 className="text-sm font-medium">Founder & CEO</h3>
          <p className="text-xs text-gray-500">2010 - Present</p>
        </div>
      </div>
    </div>
  )
}

export default Page
