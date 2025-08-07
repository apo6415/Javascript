/*
  The "Gas Station Problem" is a classic coding challenge where you have a circular route with n gas stations. 
  You're given two arrays: gas (amount of gas at each station) and cost (cost to travel to the next station). 
  You start with an empty tank and need to find a starting station from which you can complete a full circle back to that station without running out of gas. 
  Here's how you can approach this problem using JavaScript:

1. Problem Description
Input: Two arrays, gas and cost, represent the gas available at each station and the cost to travel to the next station, respectively.
Output: The starting station's index (0-indexed) if a complete circular tour is possible; otherwise, return -1.
Constraint: If a solution exists, it is guaranteed to be unique. 

2. Example
Given gas = [1,2,3,4,5] and cost = [3,4,5,1,2]. 
If starting at station 3 (index 3), fill up with 4 units of gas. The tank is now 4.
Travel to station 4: 4 - 1 (cost) + 5 (gas) = 8 units of gas remain.
Travel to station 0: 8 - 2 (cost) + 1 (gas) = 7 units of gas remain.
Travel to station 1: 7 - 3 (cost) + 2 (gas) = 6 units of gas remain.
Travel to station 2: 6 - 4 (cost) + 3 (gas) = 5 units of gas remain.
Travel back to station 3: 5 (cost) = 0 units of gas remain. The circuit is successfully completed.
Output: 3
*/
