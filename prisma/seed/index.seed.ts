import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function zerodha() {
  const organization = await prisma.organization.create({
    data: {
      name: "Zerodha",
      slug: "zerodha",
    },
  })

  const orgData = {
    id: "1",
    name: "Nithin Kamath",
    position: "Founder & CEO",
    parentId: null,
    orgId: organization.id,
  }

  const nodes = [
    {
      id: "2",
      name: "Nikhil Kamath",
      position: "Co-founder & CFO",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "3",
      name: "Austin Prakesh",
      position: "Director, Strategy",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "4",
      name: "Kailash Nadh",
      position: "CTO",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "5",
      name: "Venu Madhav",
      position: "COO",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "6",
      name: "Hanan Delvi",
      position: "CCO",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "7",
      name: "Karthik Rangappa",
      position: "Chief of Education",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "8",
      name: "Seema Patil",
      position: "Director",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "9",
      name: "Salman Quraishi",
      position: "Head of Sales",
      parentId: "1",
      orgId: organization.id,
    },
    {
      id: "10",
      name: "Anil Maddala",
      position: "Senior Associate Vice President",
      parentId: "2",
      orgId: organization.id,
    },
    {
      id: "11",
      name: "Mohammed Jawaad",
      position: "Associate Vice President",
      parentId: "2",
      orgId: organization.id,
    },
    {
      id: "12",
      name: "Pawan Tripathi",
      position: "Senior Associate Vice President",
      parentId: "3",
      orgId: organization.id,
    },
    {
      id: "13",
      name: "Sagar Gudekote",
      position: "Associate Vice President",
      parentId: "3",
      orgId: organization.id,
    },
    {
      id: "14",
      name: "Nithin Pai",
      position: "Lead Engineer",
      parentId: "4",
      orgId: organization.id,
    },
    {
      id: "15",
      name: "Akshata Kelvakar",
      position: "Senior Manager",
      parentId: "4",
      orgId: organization.id,
    },
    {
      id: "16",
      name: "Vinay Kumar C",
      position: "Assistant Vice President",
      parentId: "4",
      orgId: organization.id,
    },
    {
      id: "17",
      name: "Rohit Sharma",
      position: "Manager",
      parentId: "8",
      orgId: organization.id,
    },
    {
      id: "18",
      name: "Shivani Singh",
      position: "Assistant Manager",
      parentId: "8",
      orgId: organization.id,
    },
    {
      id: "19",
      name: "Parth Arora",
      position: "CTO",
      parentId: "18",
      orgId: organization.id,
    },
  ]

  await prisma.orgNode.create({
    data: orgData,
  })

  for (const node of nodes) {
    await prisma.orgNode.create({
      data: node,
    })
  }
}

async function indixOrg() {
  const organization = await prisma.organization.create({
    data: {
      name: "Indix",
      slug: "indix",
    },
  })

  const orgData = {
    id: "20",
    name: "Sanjay Parthasarathy",
    position: "Founder & CEO",
    parentId: null,
    orgId: organization.id,
  }

  const nodes = [
    {
      id: "21",
      name: "Sridhar Venkatesh",
      position: "VP of Product",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "22",
      name: "Satya Kaliki",
      position: "Architecture & Engineering",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "23",
      name: "Mark Alan Schneider",
      position: "General Counsel and VP Business Operations",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "24",
      name: "John O’Rourke",
      position: "VP of Marketing",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "25",
      name: "Ron Strandin",
      position: "VP of Sales",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "26",
      name: "Heather Redman",
      position: "VP of Operations",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "27",
      name: "John Rake",
      position: "VP of Customer Success",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "28",
      name: "Rajesh Muppalla",
      position: "Director of Engineering",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "29",
      name: "Sameer Brij Verma",
      position: "Board Observer",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "30",
      name: "Vignesh Ramamurthy",
      position: "VP of Engineering",
      parentId: "20",
      orgId: organization.id,
    },
    {
      id: "31",
      name: "Ashwanth Kumar",
      position: "Software Engineer",
      parentId: "28",
      orgId: organization.id,
    },
    {
      id: "32",
      name: "Mohan",
      position: "Software Engineer",
      parentId: "28",
      orgId: organization.id,
    },
    {
      id: "33",
      name: "Reema",
      position: "Software Engineer",
      parentId: "28",
      orgId: organization.id,
    },
    {
      id: "34",
      name: "Praveen",
      position: "Software Engineer",
      parentId: "28",
      orgId: organization.id,
    },
  ]

  await prisma.orgNode.create({
    data: orgData,
  })

  for (const node of nodes) {
    await prisma.orgNode.create({
      data: node,
    })
  }
}

zerodha()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
