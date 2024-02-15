export type Node = PropNode | BinaryOperationNode | UnaryOperationNode; 

export class PropNode {
  public readonly value: boolean;

  constructor(value: boolean) {
    this.value = value;
  }
}

export class BinaryOperationNode {
  public readonly left: Node;
  public readonly right: Node;

  constructor(left: Node, right: Node) {
    this.left = left;
    this.right = right;
  }
}

export class AndNode extends BinaryOperationNode {
  constructor(left: Node, right: Node) {
    super(left, right);
  }
}

export class OrNode extends BinaryOperationNode {
  constructor(left: Node, right: Node) {
    super(left, right);
  }
}

export class ImplicationNode extends BinaryOperationNode {
  constructor(left: Node, right: Node) {
    super(left, right);
  }
}

export class BiconditionalNode extends BinaryOperationNode {
  constructor(left: Node, right: Node) {
    super(left, right);
  }
}

export class UnaryOperationNode {
  public readonly child: Node;

  constructor(child: Node) {
    this.child = child;
  }
}

export class NegationNode extends UnaryOperationNode {
  constructor(child: Node) {
    super(child);
  }
}
