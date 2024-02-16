import { Interpreter } from "./interpreter";
import { Lexer } from "./lexer";
import { Parser } from "./parser";

export function solveLogicalExpression(expression = ''): boolean {
  const tokens = new Lexer(expression).tokenize();
  const tree = new Parser(tokens).parse();
  return new Interpreter().visit(tree)
}
