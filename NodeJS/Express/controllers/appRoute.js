const CustomNotFoundErr = require('../errors/customNotFoundErr')


//"next()" points
/* 
    no arg next() will pass control to nex middleware function
    w/ an err arg will pass control to error middleware function "next(new Error('arg'))"
    'string' arg passes to matching route 
    

*/


app.use((req, res, next) => {
    throw new Error('OH NO!!')
})

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function

// app.use((err, req, res, next) => {
//     //regardless of use, all 4 params MUST be provided.
//     console.error(err);
//     res.status(err.statusCode || 500).send(err.message)
//   });

