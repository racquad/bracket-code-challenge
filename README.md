# Bracked Code Challenge

Given a string of multiple types of brackets,

```
([([[]]())]{})
```

write a function to check if this string of brackets is well-formed.

A string of brackets is considered well-formed if:
- Every open bracket has a corresponding closing bracket and vice versa.
- Every closing bracket is of the same type as the opening bracket.

Well-formed examples:
- ()
- ([]{})
- ((()))# not well-formed
- (]    # wrong bracket type
- ([]   # missing closing bracket
- ())   # extra closing bracket
