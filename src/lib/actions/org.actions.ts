"use server"
import prisma from "@/db"

interface GetOrgData {
  slug: string
}

export const getOrgData = async ({ slug }: GetOrgData) => {
  try {
    console.log({ slug })

    const organization = await prisma.organization.findFirst({
      where: {
        slug,
      },
    })
    console.log({ organization })

    const data = await prisma.orgNode.findMany({
      where: {
        orgId: organization?.id,
      },
      select: {
        id: true,
        name: true,
        position: true,
        parentId: true,
      },
    })
    console.log({ data })

    return data
  } catch (error) {
    console.log({ error })
    return null
  }
}

export const getNodes = async () => {
  try {
    const data = await prisma.orgNode.findMany({
      select: {
        id: true,
        name: true,
        position: true,
        parentId: true,
      },
    })

    return data
  } catch (error) {
    return null
  }
}
