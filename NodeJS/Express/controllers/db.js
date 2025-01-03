const authors = [
    {id: 1, name: 'Aaron'},
    {id: 2, name: 'Lexi'},
    {id: 3, name: 'Sawyer'}
]

async function getAuthorId(id){
    return authors.find(author => author.id === id)
}

module.exports = { getAuthorId }

/* NOTE - This file must remain in the root of project */