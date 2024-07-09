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

const Page = () => {
  return (
    <div className="px-4 mt-20">
      <div className="grid grid-cols-10 gap-6 w-full">
        <div className="px-7 py-7 bg-white border shadow-lg rounded-xl col-span-8">
          <div className="flex flex-col">
            <ProfileHeader />
            <DividerComponent />
            <OrgTeam />
            <DividerComponent />
            <ProfileTimeline />
          </div>
        </div>
        <div className="bg-gray-200 min-w-2xl col-span-2">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
            dolorum praesentium perferendis illum sapiente, dolor velit
            doloribus consequatur. Alias, consequuntur adipisci officiis
            veritatis omnis,
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileHeader = () => {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://cdn.theorg.com/d7ec2e03-e733-4ad9-99eb-ef82d9ec2814_thumb.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h2 className="text-2xl font-semibold">Venu Madhav</h2>
            <p>Founder & CEO at Zerodha</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button className="px-8 py-1">Contact</Button>
          <ProfileDropwdown />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[13px] text-gray-500">
          Venu is the backbone of Zerodha taking care of operations and ensuring
          that we are compliant to rules and regulations. He has over a dozen
          certifications in financial markets and is also proficient in
          technical analysis. Workouts, cycling, and adventuring is what he does
          outside of Zerodha.
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
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
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
          <p className="text-xs text-gray-500">10 years</p>
        </div>
      </div>
    </div>
  )
}

export default Page
