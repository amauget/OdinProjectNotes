class CustomNotFoundErr extends Error{
    constructor(message){
        this.message = message
        this.statusCode = 404

        //So the error is neat when stringified.. NotFoundError is much easier to find and recognize
        this.name = 'NotFoundError'
    }

}

module.export = CustomNotFoundErr