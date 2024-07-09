export class OrgNode {
  id: string
  name: string
  position: string
  parent?: OrgNode
  children: OrgNode[]
  collapsed: boolean

  constructor(id: string, name: string, position: string, parentId?: string) {
    this.id = id
    this.name = name
    this.position = position
    this.parent = undefined
    this.children = []
    this.collapsed = true

    if (parentId) {
      this.parent = new OrgNode(parentId, "", "")
    }
  }

  addChild(child: OrgNode) {
    this.children.push(child)
    child.parent = this
  }

  expandAncestors() {
    let ancestor = this.parent
    while (ancestor) {
      ancestor.collapsed = false
      ancestor = ancestor.parent
    }
  }
}
