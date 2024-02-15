import { AndNode, ImplicationNode, Node, OrNode, PropNode } from "./nodes";

export class Interpreter {
  visit(node: Node) {
    const visitor = this[`visit${node.constructor.name}` as keyof this] as (node: Node) => boolean;
    return visitor.call(this, node);
  }

  visitPropNode(node: PropNode): boolean {
    return node.value;
  }

  visitAndNode(node: AndNode): boolean {
    return this.visit(node.left) && this.visit(node.right);
  }

  visitOrNode(node: OrNode): boolean {
    return this.visit(node.left) || this.visit(node.right);
  }

  visitImplicationNode(node: ImplicationNode): boolean {
    return !(this.visit(node.left) && !this.visit(node.right));
  }
}