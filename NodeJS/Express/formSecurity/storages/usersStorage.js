class UsersStorage { 
    constructor(){
        this.storage = []
        this.id = 0
    }

    addUser({ firstName, lastName }){
        let id = this.id

        this.storage[id] = { id, firstName, lastName }

        this.id ++
    }

    getUsers(){
        return Object.values(this.storage)
    }

    getUser(id){
        return this.storage[id]
    }

    updateUser(id, { firstName, lastName }){
        this.storage[id] = { id, firstName, lastName }
    }

    deleteUser(id){
        return this.storage.splice(id, 1)
    }
}

// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.

module.exports = new UsersStorage();