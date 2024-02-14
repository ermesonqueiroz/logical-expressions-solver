export type Node = PropNode | BinaryOperationNode; 

export class PropNode {
  public readonly value: boolean;

  constructor(value: boolean) {
    this.value = value;
  }
}

export class BinaryOperationNode {
  public readonly left: PropNode | BinaryOperationNode;
  public readonly right: PropNode | BinaryOperationNode;

  constructor(left: Node, right: Node) {
    this.left = left;
    this.right = right;
  }
}

export class AndNode extends BinaryOperationNode {
  constructor(left: Node, right: Node) {
    super(left, right)
  }
}

export class OrNode extends BinaryOperationNode {
  constructor(left: Node, right: Node) {
    super(left, right)
  }
}
