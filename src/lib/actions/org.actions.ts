"use server"
import prisma from "@/db"

interface GetOrgData {
  slug: string
}

export const getAllOrgs = async () => {
  try {
    const data = await prisma.organization.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: { orgNodes: true },
        },
      },
    })

    return data.map((org) => ({
      id: org.id,
      name: org.name,
      slug: org.slug,
      nodeCount: org._count.orgNodes,
    }))
  } catch (error) {
    return []
  }
}

export const getOrgData = async ({ slug }: GetOrgData) => {
  try {
    const organization = await prisma.organization.findFirst({
      where: {
        slug,
      },
    })

    if (!organization) return null

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

export const getOrgNodeData = async ({ id }: { id: string }) => {
  try {
    const data = await prisma.orgNode.findFirst({
      where: {
        id,
      },
    })

    return data
  } catch (error) {
    return null
  }
}
