var md__home_runner_work_cbmc_documentation_cbmc_documentation_doc_architectural_front_page =
[
    [ "Versions", "md__home_runner_work_cbmc-documentation_cbmc-documentation_doc_architectural_front-page.html#autotoc_md85", null ],
    [ "Report bugs", "md__home_runner_work_cbmc-documentation_cbmc-documentation_doc_architectural_front-page.html#autotoc_md86", null ],
    [ "Contributing to the code base", "md__home_runner_work_cbmc-documentation_cbmc-documentation_doc_architectural_front-page.html#autotoc_md87", null ],
    [ "License", "md__home_runner_work_cbmc-documentation_cbmc-documentation_doc_architectural_front-page.html#autotoc_md88", null ],
    [ "Overview of Documentation", "md__home_runner_work_cbmc-documentation_cbmc-documentation_doc_architectural_front-page.html#autotoc_md89", null ],
    [ "Compilation and Development", "compilation-and-development.html", [
      [ "Compilation", "compilation-and-development.html#compilation-and-development-section-compilation", [
        [ "For users:", "md__home_runner_work_cbmc-documentation_cbmc-documentation_doc_architectural_front-page.html#autotoc_md90", null ],
        [ "For contributors:", "md__home_runner_work_cbmc-documentation_cbmc-documentation_doc_architectural_front-page.html#autotoc_md91", null ],
        [ "Makefiles", "compilation-and-development.html#compilation-and-development-subsection-makefiles", null ],
        [ "CMake files", "compilation-and-development.html#compilation-and-development-subsection-cmake-files", null ],
        [ "Personal configuration", "compilation-and-development.html#compilation-and-development-subsection-personal-configuration", [
          [ "config.inc", "compilation-and-development.html#compilation-and-development-subsubsection-config-inc", null ],
          [ "Macro DEBUG", "compilation-and-development.html#compilation-and-development-subsubsection-macro-debug", null ]
        ] ]
      ] ],
      [ "Running tests", "compilation-and-development.html#compilation-and-development-section-running-tests", [
        [ "Regression tests", "compilation-and-development.html#compilation-and-development-subsection-regression-tests", [
          [ "Running regression tests with make", "compilation-and-development.html#compilation-and-development-subsubsection-running-regression-tests-with-make", null ],
          [ "Running regression tests with CTest", "compilation-and-development.html#compilation-and-development-subsubsection-running-regression-tests-with-ctest", null ],
          [ "Running individual regression tests directly with test.pl", "compilation-and-development.html#compilation-and-development-subsubsection-running-individual-regression-tests-directly-with-test-pl", null ]
        ] ],
        [ "Unit tests", "compilation-and-development.html#compilation-and-development-subsection-unit-tests", null ],
        [ "Test coverage", "compilation-and-development.html#compilation-and-development-subsection-coverage", null ],
        [ "Using a different SAT solver", "compilation-and-development.html#compilation-and-development-subsection-sat-solver", null ]
      ] ],
      [ "Documentation", "compilation-and-development.html#compilation-and-development-section-documentation", null ],
      [ "Formatting", "compilation-and-development.html#compilation-and-development-section-formatting", null ],
      [ "Linting", "compilation-and-development.html#compilation-and-development-section-linting", null ],
      [ "Time profiling", "compilation-and-development.html#compilation-and-development-section-time-profiling", null ]
    ] ],
    [ "Background Concepts", "background-concepts.html", [
      [ "Representations", "background-concepts.html#representations_section", [
        [ "AST", "background-concepts.html#AST_section", [
          [ "Symbol tables and variable disambiguation", "background-concepts.html#symbol_table_section", null ]
        ] ],
        [ "Intermediate Representations (IR)", "background-concepts.html#IR_section", null ],
        [ "Control Flow Graphs (CFG)", "background-concepts.html#CFG_section", null ],
        [ "SSA", "background-concepts.html#SSA_section", null ],
        [ "Field Sensitivity", "background-concepts.html#field_sensitivity_section", null ]
      ] ],
      [ "Analysis techniques", "background-concepts.html#analysis_techniques_section", [
        [ "Bounded model checking", "background-concepts.html#BMC_section", [
          [ "Propositional logic and SAT solving", "background-concepts.html#propositional_logic_subsubsection", null ],
          [ "Using SAT to reason about data: Bit vectors", "background-concepts.html#bitvector_subsubsection", null ],
          [ "How bounded model checking works", "background-concepts.html#bmc_subsubsection", null ],
          [ "Where to go from here", "background-concepts.html#smt_etc_subsubsection", null ]
        ] ],
        [ "Static analysis", "background-concepts.html#static_analysis_section", [
          [ "Abstract Interpretation", "background-concepts.html#abstract_interpretation_section", null ]
        ] ]
      ] ],
      [ "Glossary", "background-concepts.html#Glossary_section", [
        [ "Instrument", "background-concepts.html#instrument_subsection", null ],
        [ "Flattening and Lowering", "background-concepts.html#flattening_lowering_subsection", null ],
        [ "Verification Condition", "background-concepts.html#verification_condition_subsection", null ]
      ] ]
    ] ],
    [ "CBMC Architecture", "cbmc-architecture.html", [
      [ "Concepts", "cbmc-architecture.html#autotoc_md69", [
        [ "{C, java bytecode} → Parse tree → Symbol table → GOTO programs → GOTO program transformations → BMC → counterexample (goto_tracet) → printing", "cbmc-architecture.html#autotoc_md70", null ],
        [ "Instrumentation: goto functions → goto functions", "cbmc-architecture.html#autotoc_md71", null ],
        [ "Goto functions → BMC → Counterexample (trace)", "cbmc-architecture.html#autotoc_md72", null ],
        [ "Trace → interpreter → memory map", "cbmc-architecture.html#autotoc_md73", null ],
        [ "Goto functions → abstract interpretation", "cbmc-architecture.html#autotoc_md74", null ],
        [ "Executables (flow of transformations):", "cbmc-architecture.html#autotoc_md75", [
          [ "goto-cc", "cbmc-architecture.html#autotoc_md76", null ],
          [ "goto-instrument", "cbmc-architecture.html#autotoc_md77", null ],
          [ "cbmc", "cbmc-architecture.html#autotoc_md78", null ],
          [ "goto-analyzer", "cbmc-architecture.html#autotoc_md79", null ]
        ] ]
      ] ]
    ] ],
    [ "Folder Walkthrough", "folder-walkthrough.html", null ],
    [ "Code Walkthrough", "code-walkthrough.html", [
      [ "Data structures: core structures and AST", "code-walkthrough.html#data-structures-core-structures-and-ast-section", null ],
      [ "Data structures: from AST to GOTO program", "code-walkthrough.html#data-structures-from-ast-to-goto-program-section", null ],
      [ "Front-end languages: generating codet from multiple languages", "code-walkthrough.html#front-end-languages-generating-codet-from-multiple-languages-section", [
        [ "<tt>src/</tt>", "folder-walkthrough.html#autotoc_md80", null ],
        [ "<tt>doc/</tt>", "folder-walkthrough.html#autotoc_md81", null ],
        [ "<tt>regression/</tt>", "folder-walkthrough.html#autotoc_md82", null ],
        [ "<tt>unit/</tt>", "folder-walkthrough.html#autotoc_md83", null ],
        [ "Directory dependencies", "folder-walkthrough.html#autotoc_md84", null ],
        [ "language_filest, languaget classes:", "code-walkthrough.html#language-uit-section", null ],
        [ "C", "code-walkthrough.html#languages-c-section", null ],
        [ "C++", "code-walkthrough.html#languages-cpp-section", null ],
        [ "Java bytecode", "code-walkthrough.html#languages-java-section", null ]
      ] ],
      [ "Bmct class", "code-walkthrough.html#bmct-class-section", [
        [ "equation", "code-walkthrough.html#equation-section", null ]
      ] ],
      [ "Symbolic executors", "code-walkthrough.html#symbolic-executors-section", [
        [ "Symbolic execution", "code-walkthrough.html#symbolic-execution-section", null ]
      ] ],
      [ "Solvers infrastructure", "code-walkthrough.html#solvers-infrastructure-section", null ],
      [ "Static analysis APIs", "code-walkthrough.html#static-analysis-apis-section", null ]
    ] ],
    [ "Other Tools", "other-tools.html", [
      [ "Other Tools", "other-tools.html#autotoc_md101", null ]
    ] ],
    [ "Tutorials", "tutorial.html", [
      [ "CBMC Developer Tutorial", "tutorial.html#cbmc_tutorial", [
        [ "Initial setup", "tutorial.html#autotoc_md92", null ],
        [ "Whirlwind tour of the tools", "tutorial.html#autotoc_md93", [
          [ "Compiling with <tt>goto-cc</tt>", "tutorial.html#autotoc_md94", null ],
          [ "Viewing goto-programs", "tutorial.html#autotoc_md95", null ]
        ] ],
        [ "Learning about goto-programs", "tutorial.html#autotoc_md96", [
          [ "First steps with <tt>goto-instrument</tt>", "tutorial.html#autotoc_md97", null ],
          [ "Goto-program basics", "tutorial.html#autotoc_md98", null ]
        ] ]
      ] ]
    ] ]
];