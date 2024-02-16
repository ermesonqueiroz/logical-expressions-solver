export class TruthTable {
  private propositions: string[];
  private propositionCursor: number;
  private cursor: number;
  private currentValue: boolean;

  constructor(propositions: string[]) {
    this.propositions = propositions;
    this.propositionCursor = propositions.length;
    this.cursor = 0;
    this.currentValue = true;
  }

  private stepLength() {
    return Math.max(this.propositionCursor * 2, 1);
  }

  private advancePropositionCursor() {
    this.propositionCursor--;
  }

  private advance() {
    this.cursor++;
  }

  private resetCursor() {
    this.cursor = 0;
  }

  private switchCurrentValue() {
    this.currentValue = !this.currentValue;
  }

  private tableLength() {
    return 2 ** this.propositions.length;
  }

  private mountColumns() {
    return this.propositions.map(() => {
      this.advancePropositionCursor();

      return Array
        .from({ length: this.tableLength() })
        .map(() => {
          if (this.cursor >= this.stepLength()) {
            this.resetCursor();
            this.switchCurrentValue();
          }

          this.advance();
          return this.currentValue;
        });
    });
  }

  private attachColumnsToRows(columns: boolean[][]) {
    return Array
      .from({ length: this.tableLength() })
      .map((_, rowIndex) => {
         const row = this.propositions.map((proposition, colIndex) => [proposition, columns[colIndex][rowIndex]])
         return Object.fromEntries(row);
      })
  }

  mount() {
    const columns = this.mountColumns();
    return this.attachColumnsToRows(columns);
  }
}