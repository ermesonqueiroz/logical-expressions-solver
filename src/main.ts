import { Interpreter } from "./interpreter";
import { Lexer } from "./lexer";
import { Parser } from "./parser";
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = () => rl.question('logic-calculator > ', (expression) => {
  const tokens = new Lexer(expression).tokenize();
  const tree = new Parser(tokens).parse();
  const result = new Interpreter().visit(tree)

  console.log(result);
  prompt();
});

prompt();
