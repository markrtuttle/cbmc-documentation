#include <assert.h>
#include <stdlib.h>

void main()
{
  // special value of the invalid pointer (object bits = 1 and offset = 0), as
  // checked for by __CPROVER_is_invalid_pointer()
  char *p = (size_t)1 << (sizeof(char *) * 8 - 8);
  __CPROVER_assert(
    __CPROVER_is_invalid_pointer(p), "INVALID pointer, so passing");
  int i;
  __CPROVER_assert(
    __CPROVER_is_invalid_pointer(&i), "VALID pointer, so failing");
}
