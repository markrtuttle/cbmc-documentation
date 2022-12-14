.PHONY: all jprover.dir test java-testing-utils-clean

# Source files for test utilities
SRC = $(CPROVER_DIR)/unit/unit_tests.cpp \
      # Empty last line

# Test source files
SRC += java_bytecode/ci_lazy_methods/lazy_load_lambdas.cpp \
       java_bytecode/expr2java.cpp \
       java_bytecode/goto_program_generics/generic_bases_test.cpp \
       java_bytecode/goto_program_generics/generic_parameters_test.cpp \
       java_bytecode/goto_program_generics/mutually_recursive_generics.cpp \
       java_bytecode/goto-programs/class_hierarchy_graph.cpp \
       java_bytecode/goto-programs/class_hierarchy_output.cpp \
       java_bytecode/goto-programs/remove_virtual_functions_without_fallback.cpp \
       java_bytecode/inherited_static_fields/inherited_static_fields.cpp \
       java_bytecode/java_bytecode_convert_class/add_java_array_types.cpp \
       java_bytecode/java_bytecode_convert_class/convert_abstract_class.cpp \
       java_bytecode/java_bytecode_convert_class/convert_java_annotations.cpp \
       java_bytecode/java_bytecode_convert_method/convert_initalizers.cpp \
       java_bytecode/java_bytecode_convert_method/convert_invoke_dynamic.cpp \
       java_bytecode/java_bytecode_convert_method/convert_method.cpp \
       java_bytecode/java_bytecode_instrument/virtual_call_null_checks.cpp \
       java_bytecode/java_bytecode_language/language.cpp \
       java_bytecode/java_bytecode_language/context_excluded.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_bounded_generic_inner_classes.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_derived_generic_class.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_functions_with_generics.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_array_class.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_class.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_class_with_generic_inner_classes.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_class_with_inner_classes.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_fields.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_functions.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_superclasses.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_generic_wildcard_function.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_nested_generics.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_recursive_generic_class.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_signature_descriptor_mismatch.cpp \
       java_bytecode/java_bytecode_parse_generics/parse_lvtt_generic_local_vars.cpp \
       java_bytecode/java_bytecode_parse_lambdas/java_bytecode_convert_class_lambda_method_handles.cpp \
       java_bytecode/java_bytecode_parse_lambdas/java_bytecode_parse_lambda_method_table.cpp \
       java_bytecode/java_bytecode_parser/parse_class_without_instructions.cpp \
       java_bytecode/java_bytecode_parser/parse_inner_class.cpp \
       java_bytecode/java_bytecode_parser/parse_java_annotations.cpp \
       java_bytecode/java_bytecode_parser/parse_java_attributes.cpp \
       java_bytecode/java_bytecode_parser/parse_java_class.cpp \
       java_bytecode/java_bytecode_parser/parse_java_field.cpp \
       java_bytecode/java_object_factory/gen_nondet_string_init.cpp \
       java_bytecode/java_object_factory/struct_tag_types.cpp \
       java_bytecode/java_replace_nondet/replace_nondet.cpp \
       java_bytecode/java_static_initializers/assignments_from_json.cpp \
       java_bytecode/java_static_initializers/java_static_initializers.cpp \
       java_bytecode/java_string_library_preprocess/convert_exprt_to_string_exprt.cpp \
       java_bytecode/java_trace_validation/java_trace_validation.cpp \
       java_bytecode/java_types/erase_type_arguments.cpp \
       java_bytecode/java_types/generic_type_index.cpp \
       java_bytecode/java_types/java_generic_symbol_type.cpp \
       java_bytecode/java_types/java_type_from_string.cpp \
       java_bytecode/java_string_literals.cpp \
       java_bytecode/java_utils_test.cpp \
       java_bytecode/java_virtual_functions/virtual_functions.cpp \
       java_bytecode/load_method_by_regex.cpp \
       pointer-analysis/custom_value_set_analysis.cpp \
       solvers/strings/string_constraint_instantiation/instantiate_not_contains.cpp \
       solvers/strings/string_refinement/dependency_graph.cpp \
       solvers/strings/string_refinement/string_symbol_resolution.cpp \
       util/expr_iterator.cpp \
       util/has_subtype.cpp \
       util/parameter_indices.cpp \
       util/simplify_expr.cpp \
       # Empty last line

INCLUDES= -I ../src/ -I. -I $(CPROVER_DIR)/src -I $(CPROVER_DIR)/unit

include ../src/config.inc
include $(CPROVER_DIR)/src/config.inc
include $(CPROVER_DIR)/src/common

jprover.dir:
	$(MAKE) $(MAKEARGS) -C ../src

$(CPROVER_DIR)/unit/testing-utils/testing-utils$(LIBEXT): jprover.dir
	$(MAKE) $(MAKEARGS) -C $(CPROVER_DIR)/unit/testing-utils

java-testing-utils/java-testing-utils$(LIBEXT): jprover.dir
	$(MAKE) $(MAKEARGS) -C java-testing-utils

java-testing-utils-clean:
	$(MAKE) $(MAKEARGS) -C java-testing-utils clean

CPROVER_LIBS =../src/java_bytecode/java_bytecode$(LIBEXT) \
              ../src/miniz/miniz$(OBJEXT) \
              $(CPROVER_DIR)/src/ansi-c/ansi-c$(LIBEXT) \
              $(CPROVER_DIR)/src/cpp/cpp$(LIBEXT) \
              $(CPROVER_DIR)/src/json/json$(LIBEXT) \
              $(CPROVER_DIR)/src/json-symtab-language/json-symtab-language$(LIBEXT) \
              $(CPROVER_DIR)/src/linking/linking$(LIBEXT) \
              $(CPROVER_DIR)/src/util/util$(LIBEXT) \
              $(CPROVER_DIR)/src/big-int/big-int$(LIBEXT) \
              $(CPROVER_DIR)/src/goto-checker/goto-checker$(LIBEXT) \
              $(CPROVER_DIR)/src/goto-programs/goto-programs$(LIBEXT) \
              $(CPROVER_DIR)/src/goto-symex/goto-symex$(LIBEXT) \
              $(CPROVER_DIR)/src/goto-instrument/source_lines$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_basic_blocks$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_filter$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_instrument_assume$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_instrument_branch$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_instrument_condition$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_instrument_decision$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_instrument_location$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_instrument_mcdc$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_instrument_other$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/cover_util$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/reachability_slicer$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/nondet_static$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/full_slicer$(OBJEXT) \
              $(CPROVER_DIR)/src/goto-instrument/unwindset$(OBJEXT) \
              $(CPROVER_DIR)/src/pointer-analysis/pointer-analysis$(LIBEXT) \
              $(CPROVER_DIR)/src/langapi/langapi$(LIBEXT) \
              $(CPROVER_DIR)/src/xmllang/xmllang$(LIBEXT) \
              $(CPROVER_DIR)/src/assembler/assembler$(LIBEXT) \
              $(CPROVER_DIR)/src/analyses/analyses$(LIBEXT) \
              $(CPROVER_DIR)/src/solvers/solvers$(LIBEXT) \
              # Empty last line

OBJ += $(CPROVER_LIBS) \
       $(CPROVER_DIR)/unit/testing-utils/testing-utils$(LIBEXT) \
       java-testing-utils/java-testing-utils$(LIBEXT)

CATCH_TEST = unit_tests$(EXEEXT)
N_CATCH_TESTS = $(shell \
                  cat $$(find . -name "*.cpp" ) | \
                  grep -c -E "(SCENARIO|TEST_CASE)")

CLEANFILES = $(CATCH_TEST) java-testing-utils/java-testing-utils$(LIBEXT)

# only add a dependency for libraries to avoid triggering implicit rules, which
# would cause unnecessary rebuilds
$(filter %$(LIBEXT), CPROVER_LIBS): jprover.dir

all: $(CATCH_TEST)

clean: java-testing-utils-clean

test: $(CATCH_TEST)
	# Include hidden tests by specifying "*,[.]" for tests to count
	if ! ./$(CATCH_TEST) "*,[.]" -l | grep -q "^$(N_CATCH_TESTS) matching test cases" ; then \
	  ./$(CATCH_TEST) "*,[.]" -l ; fi
	./$(CATCH_TEST) ${TAGS}


###############################################################################

unit_tests$(EXEEXT): $(OBJ)
	$(LINKBIN)
