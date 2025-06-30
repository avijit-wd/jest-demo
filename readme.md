## Structure of a properly written unit test:

AAA principle
-arrange
-act
-assert

    setup
    teardown

## Test properties

- only
- skip
- concurrent
- todo

## Test mode

--watchAll

# TDD

Failing Test -> Passing Test -> Change/Add logic

# Password Checker TDD

A password is invalid if

- length is less than 8 chars
- has no uppercase letter
- has no lowercase letter

Requirement 2

- return the reasons that make a password invalid

Requirement 3

- refactor
- Admin Password should also contain a number
