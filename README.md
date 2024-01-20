# Bracked Code Challenge

## What you need to do

Given a string of multiple types of brackets,

```
([([[]]())]{})
```

write a function to check if this string of brackets is well-formed. You should use Typescript for this assessment.

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

## Preparation

Clone this repository and install its dependencies.

```
$ npm i
```

This will install typescript alongside with Jest. Open index.ts file and write your function.

There's already a unit test prepared. Your goal is to have it passed 100%.

```
$ npm run test
```
