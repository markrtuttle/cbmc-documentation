#include <inttypes.h>

int main()
{
  unsigned char x;

  // signed, owing to promotion, and may overflow
  unsigned r = x << ((sizeof(unsigned) - 1) * 8 + 1);

  // signed, owing to promotion, and cannot overflow
  r = x << ((sizeof(unsigned) - 1) * 8 - 1);

  // unsigned
  r = (unsigned)x << ((sizeof(unsigned) - 1) * 8);

  // negative value or zero, not an overflow
  int s = -x << ((sizeof(int) - 1) * 8);

  // overflow
  s = 1 << x;

  // distance too far, not an overflow
  s = s << 100;

  // not an overflow in ANSI-C, but undefined in C99
  s = 1 << (sizeof(int) * 8 - 1);

  // overflow in an expression where operand and distance types are different
  uint32_t u32;
  int64_t i64 = ((int64_t)u32) << 32;

  return 0;
}
