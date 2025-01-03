Tips and tricks of unit tests:
  
  test count should be as limited as possible without saccrificing effectiveness


<!-- Testing a function based on origin of message -->

Incoming Origin:
  Query: 
    Assert the resulting value based on the incoming message
  Command:
    Assert direct public side effects of incoming message

Sent to self values:
  DON'T TEST THESE.. They are contained, keep them that way.

Outgoing:
  Query: IGNORE QUERY

  Command: Expect to send
