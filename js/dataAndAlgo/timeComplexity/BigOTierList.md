1st place: O(1)
  O(1) will always have a single step regardless of how many data components exist.

2nd place: O(log n)
  O(log n) methods are actually the least efficient when the data count is low, but as the name would 
  suggest, the curve flattens out (log) to very small increments as the data count doubles.
  Look at binary search ex from measuringTime.md

3rd: O(n)
  linear growth of steps to data count

4th: O(n2)
Avoid like the plague. 