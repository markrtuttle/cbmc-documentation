default: tests.log

include ../../src/config.inc
include ../../src/common

test:
	@../test.pl -e -p -c '../chain.sh $(exe) ../../../src/symtab2gb/symtab2gb ../../../src/goto-instrument/goto-instrument'

tests.log:
	@../test.pl -e -p -c '../chain.sh $(exe) ../../../src/symtab2gb/symtab2gb ../../../src/goto-instrument/goto-instrument'

clean:
	@for dir in *; do \
		$(RM) tests.log; \
		if [ -d "$$dir" ]; then \
			cd "$$dir"; \
			$(RM) *.out *.gb; \
			cd ..; \
		fi \
	done
