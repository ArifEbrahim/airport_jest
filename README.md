# Airport in Jest

This is a repeat of the Airport exercise originally written in Ruby [here](https://github.com/ArifEbrahim/airport_challenge). The purpose of this exercise was to learn the test framework Jest and how to do the following:
- write tests with matchers
- mock entire modules
- stub methods & randomness
- perform dependancy injection 

This exercise was entirely self-driven and I had to use the Jest documentaiton and Google/Stack Overflow to troubleshoot problems.

My aim is to learn Jest ahead of learning to use React so that I am already familiar with the test framework. Previous exercises in JS relied on the browser version of Jasmine.

## How to use

Please se further details [here](https://github.com/ArifEbrahim/airport_JS).

## Test output

```
 PASS  __tests__/feature.test.js
  Feature Test:
    when not stormy
      ✓ planes can be instructed to land at an airport (3 ms)
      ✓ planes can be instructed to take off
      ✓ has a default capacity of 20 (16 ms)
      ✓ has a variable capacity (1 ms)
    when stormy
      ✓ planes are prevented from taking off 
      ✓ planes are prevented from landing 

 PASS  __tests__/airport.test.js
  Airport
    capacity
      ✓ it has no planes by default (2 ms)
      ✓ it has a default capacity of 20 (6 ms)
      ✓ has a variable capacity (1 ms)
    under normal conditions
      ✓ it can land planes
      ✓ it allows planes to take off (1 ms)
    under stormy conditions
      ✓ planes cannot take off (1 ms)
      ✓ planes cannot land

 PASS  __tests__/plane.test.js
  Plane
    ✓ it can land at an airport (1 ms)
    ✓ it can take off from an airport

 PASS  __tests__/weather.test.js
  Weather
    ✓ gives stormy sometimes (1 ms)

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------|---------|----------|---------|---------|-------------------
All files   |     100 |      100 |     100 |     100 |                   
 airport.js |     100 |      100 |     100 |     100 |                   
 plane.js   |     100 |      100 |     100 |     100 |                   
 weather.js |     100 |      100 |     100 |     100 |                   
------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        0.534 s, estimated 1 s
Ran all test suites.
```
