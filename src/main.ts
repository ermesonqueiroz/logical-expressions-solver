import { TruthTable } from "./truth-table";
import { solveLogicalExpression } from './solve-logical-expression';

export function mountTruthTable(expression: string): Record<string, boolean>[] {
  const propositions = expression
    .split('')
    .filter((char, index) => {
      const isLetter = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
      const isUnique = expression.split('').indexOf(char) === index;

      return isLetter && isUnique;
    })

  const table = new TruthTable(propositions);
  const resultWithOperator = table.mount().map((row) => {
    let expressionToSolve = expression;

    Object.entries(row).forEach(([key, value]) => {
      expressionToSolve = expressionToSolve.replaceAll(key, value ? 'V' : 'F')
    });

    return {
      ...row,
      [expression]: solveLogicalExpression(expressionToSolve)
    }
  });

  return resultWithOperator;
}

export { solveLogicalExpression };
