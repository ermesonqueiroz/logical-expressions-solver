import readline from 'readline';
import { TruthTable } from "./truth-table";
import { solveLogicalExpression } from './solve-logical-expression';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = () => rl.question('logic-calculator > ', (expression) => {
  const propositions = expression
    .split('')
    .filter(char => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);

  const table = new TruthTable(propositions);
  const resultWithOperator = table.mount().map((row) => {
    let expressionToSolve = expression;

    Object.entries(row).forEach(([key, value]) => {
      expressionToSolve = expressionToSolve.replace(key, value ? 'V' : 'F')
    });

    return {
      ...row,
      [expression]: solveLogicalExpression(expressionToSolve)
    }
  })
  

  console.table(resultWithOperator);
  prompt();
});

prompt();
