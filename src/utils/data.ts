import { OrgNode } from "./OrgNode"

export const orgData = new OrgNode(
  "1",
  "Nithin Kamath",
  "Founder & CEO",
  undefined
)
const nikhilKamath = new OrgNode("2", "Nikhil Kamath", "Co-founder & CFO", "1")
const austinPrakesh = new OrgNode(
  "3",
  "Austin Prakesh",
  "Director, Strategy",
  "1"
)
const kailashNadh = new OrgNode("4", "Kailash Nadh", "CTO", "1")
const venuMadhav = new OrgNode("5", "Venu Madhav", "COO", "1")
const hananDelvi = new OrgNode("6", "Hanan Delvi", "CCO", "1")
const karthikRangappa = new OrgNode(
  "7",
  "Karthik Rangappa",
  "Chief of Education",
  "1"
)
const seemaPatil = new OrgNode("8", "Seema Patil", "Director", "1")
const salmanQuraishi = new OrgNode("9", "Salman Quraishi", "Head of Sales", "1")

const anilMaddala = new OrgNode(
  "10",
  "Anil Maddala",
  "Senior Associate Vice President",
  "2"
)
const mohammedJawaad = new OrgNode(
  "11",
  "Mohammed Jawaad",
  "Associate Vice President",
  "2"
)
const pawanTripathi = new OrgNode(
  "12",
  "Pawan Tripathi",
  "Senior Associate Vice President",
  "3"
)
const sagarGudekote = new OrgNode(
  "13",
  "Sagar Gudekote",
  "Associate Vice President",
  "3"
)

const nithinPai = new OrgNode("14", "Nithin Pai", "Lead Engineer", "4")
const akshataKelvakar = new OrgNode(
  "15",
  "Akshata Kelvakar",
  "Senior Manager",
  "4"
)
const vinayKumarC = new OrgNode(
  "16",
  "Vinay Kumar C",
  "Assistant Vice President",
  "4"
)

const rohitSharma = new OrgNode("17", "Rohit Sharma", "Manager", "8")
const shivaniSingh = new OrgNode(
  "18",
  "Shivani Singh",
  "Assistant Manager",
  "8"
)

const parthArora = new OrgNode("19", "Parth Arora", "CTO", "8")

// Add children to top-level nodes
orgData.addChild(nikhilKamath)
orgData.addChild(austinPrakesh)
orgData.addChild(kailashNadh)
orgData.addChild(venuMadhav)
orgData.addChild(hananDelvi)
orgData.addChild(karthikRangappa)
orgData.addChild(seemaPatil)
orgData.addChild(salmanQuraishi)

// Add children to second-level nodes
nikhilKamath.addChild(anilMaddala)
nikhilKamath.addChild(mohammedJawaad)
austinPrakesh.addChild(pawanTripathi)
austinPrakesh.addChild(sagarGudekote)
kailashNadh.addChild(nithinPai)
kailashNadh.addChild(akshataKelvakar)
kailashNadh.addChild(vinayKumarC)
seemaPatil.addChild(rohitSharma)
seemaPatil.addChild(shivaniSingh)
shivaniSingh.addChild(parthArora)
