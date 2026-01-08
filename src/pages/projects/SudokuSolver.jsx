const SudokuSolver = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6">
          Sudoku Solver
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-neutral-400 mb-12">
          Backtracking-based solver for NxN Sudoku puzzles
        </p>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            This project implements a recursive backtracking algorithm capable
            of solving Sudoku puzzles of arbitrary size. The solver enforces
            Sudoku constraints at each step to prune invalid branches early
            and efficiently explore the solution space.
          </p>
        </section>

        {/* Algorithm */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Algorithm
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-neutral-300">
            <li>Select the next empty cell</li>
            <li>Try all valid numbers for that cell</li>
            <li>Recursively attempt to solve the updated board</li>
            <li>Backtrack if a conflict is encountered</li>
          </ul>
        </section>

        {/* Complexity */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Github Link
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            https://github.com/ManushPatell/SudokuSolver
          </p>
        </section>

      </div>
    </div>
  );
};

export default SudokuSolver;
