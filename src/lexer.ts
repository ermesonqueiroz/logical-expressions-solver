export enum TokenType {
  IMPLICATION = 'IMPLICATION',
  BOOL = 'BOOL',
  AND = 'AND',
  OR = 'OR',
  NEGATION = 'NEGATION',
  BICONDITIONAL = 'BICONDITIONAL',
  LPAREN = 'LPAREN',
  RPAREN = 'RPAREN',
  EOF = 'EOF'
}

export interface Token {
  type: TokenType;
  value?: boolean;
}

export class Lexer {
  private expression: string = '';
  private currentIndex = 0;

  constructor(expression: string) {
    this.expression = expression.replace(/\s+/g, '');
  }

  currentChar() {
    return this.expression[this.currentIndex];
  }

  tokenize(): Token[] {
    this.currentIndex = 0;
    const tokens: Token[] = [];

    while (this.currentIndex < this.expression.length) {
      switch(this.currentChar().charCodeAt(0)) {
        case 8594:
          tokens.push({ type: TokenType.IMPLICATION });
          break;
        case 8743:
          tokens.push({ type: TokenType.AND });
          break;
        case 8744:
          tokens.push({ type: TokenType.OR });
          break;
        case 40:
          tokens.push({ type: TokenType.LPAREN });
          break;
        case 41:
          tokens.push({ type: TokenType.RPAREN });
          break;
        case 86:
          tokens.push({ type: TokenType.BOOL, value: true });
          break;
        case 70:
          tokens.push({ type: TokenType.BOOL, value: false });
          break;
        case 172:
          tokens.push({ type: TokenType.NEGATION });
          break;
        case 8596:
          tokens.push({ type: TokenType.BICONDITIONAL });
          break;
        default:
          throw new Error(`Illegal character '${this.currentChar()}'`);
      }

      this.currentIndex++;
    }

    tokens.push({ type: TokenType.EOF });
    return tokens;
  }
}
