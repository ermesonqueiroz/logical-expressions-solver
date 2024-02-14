import { Token, TokenType } from "./lexer";
import { AndNode, Node, OrNode, PropNode } from "./nodes";

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

    const expressionOperatorsTypes = [TokenType.AND, TokenType.OR];
    while (expressionOperatorsTypes.includes(this.currentToken().type)) {
      if (this.currentToken().type === TokenType.AND) {
        this.cursor++;
        result = new AndNode(result, this.parse_factor())
      } else if (this.currentToken().type === TokenType.OR) {
        this.cursor++;
        result = new OrNode(result, this.parse_factor())
      }
    }

    return result;
  }

  private parse_factor(): PropNode {
    const token = this.currentToken();

    if (this.currentToken().type === TokenType.BOOL) {
      this.cursor++;
      return new PropNode(token.value!);
    }

    throw new Error('Invalid expression');
  }
}
