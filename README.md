# Logical Expressions Solver

A simple logical expressions parser

Features:
- [x] Parse `CONJUNCTION` operator
- [x] Parse `DISJUNCTION` operator
- [x] Parse `IMPLICATION` operator
- [x] Parse `NEGATION` operator
- [x] Parse `BICONDITIONAL` operator
- [x] Parse Parentheses

## Operators

| NAME          | SYMBOL | ASCII CODE |
|---------------|--------|------------|
| CONJUNCTION   | ∧      | 8743       |
| DISJUNCTION   | ∨      | 8744       |
| IMPLICATION   | →      | 8594       |
| NEGATION      | ¬      | 172        |
| BICONDITIONAL | ↔      | 8596       |

## Configuration

Required tools:
- Node & NPM

### Running the project

```bash
# Clone this project
git clone git@github.com:ermesonqueiroz/logical-expressions-solver.git

# Access the project path
cd logical-expression-solver

# Install the denpendencies
npm install

# Transpile the code to JavaScript
npx tsc

# Execute the program
node dist/main.js
```

## License

This project is under [MIT](./LICENSE) license
