/* FUNCTION: __error */

// This is used on MacOS to return the address of a
// variable used for the errno macro.

__CPROVER_thread_local int __CPROVER_errno;

int *__error(void)
{
  return &__CPROVER_errno;
}

/* FUNCTION: __errno_location */

// This is used on Linux to return the address of a
// variable used for the errno macro.

__CPROVER_thread_local int __CPROVER_errno;

int *__errno_location(void)
{
  return &__CPROVER_errno;
}

/* FUNCTION: _errno */

// This is used on Windows to return the address of a
// variable used for the errno macro.

__CPROVER_thread_local int __CPROVER_errno;

int *_errno(void)
{
  return &__CPROVER_errno;
}

/* FUNCTION: __errno */

// This has been spotted in CYGWIN

__CPROVER_thread_local int __CPROVER_errno;

extern int *__errno(void)
{
  return &__CPROVER_errno;
}

/* FUNCTION: ___errno */

// This has been spotted on Solaris

__CPROVER_thread_local int __CPROVER_errno;

extern int *___errno(void)
{
  return &__CPROVER_errno;
}
