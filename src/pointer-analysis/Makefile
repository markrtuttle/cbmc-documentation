SRC = add_failed_symbols.cpp \
      goto_program_dereference.cpp \
      show_value_sets.cpp \
      value_set.cpp \
      value_set_analysis.cpp \
      value_set_analysis_fi.cpp \
      value_set_dereference.cpp \
      value_set_domain_fi.cpp \
      value_set_fi.cpp \
      # Empty last line

INCLUDES= -I ..

include ../config.inc
include ../common

CLEANFILES = pointer-analysis$(LIBEXT)

all: pointer-analysis$(LIBEXT)

###############################################################################

pointer-analysis$(LIBEXT): $(OBJ)
	$(LINKLIB)
