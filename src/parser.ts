import { Token, TokenType } from "./lexer";
import { AndNode, BiconditionalNode, ImplicationNode, NegationNode, Node, OrNode, PropNode } from "./nodes";

export class Parser {
  private readonly tokens: Token[];
  private cursor = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.cursor = 0;
  }

  private currentToken(): Token {
    return this.tokens[this.cursor];
  }

  parse() {
    return this.parse_expression();
  }

  private parse_expression() {
    let result: Node = this.parse_factor();
    const expressionOperatorsTypes = [
      TokenType.AND,
      TokenType.OR,
      TokenType.IMPLICATION,
      TokenType.BICONDITIONAL
    ];

    while (expressionOperatorsTypes.includes(this.currentToken().type)) {
      if (this.currentToken().type === TokenType.AND) {
        this.cursor++;
        result = new AndNode(result, this.parse_factor())
      } else if (this.currentToken().type === TokenType.OR) {
        this.cursor++;
        result = new OrNode(result, this.parse_factor())
      } else if (this.currentToken().type === TokenType.IMPLICATION) {
        this.cursor++;
        result = new ImplicationNode(result, this.parse_factor())
      } else if (this.currentToken().type === TokenType.BICONDITIONAL) {
        this.cursor++;
        result = new BiconditionalNode(result, this.parse_factor())
      }
    }

    return result;
  }

  private parse_factor(): Node {
    const token = this.currentToken();

    if (this.currentToken().type === TokenType.BOOL) {
      this.cursor++;
      return new PropNode(token.value!);
    } else if (this.currentToken().type === TokenType.NEGATION) {
      this.cursor++;
      return new NegationNode(this.parse_factor())
    } else if (this.currentToken().type === TokenType.LPAREN) {
      this.cursor++;
      const result = this.parse_expression()
      this.cursor++;

      return result;
    }

    throw new Error('Invalid expression');
  }
}
