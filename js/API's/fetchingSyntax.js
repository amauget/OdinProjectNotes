/* fetching apis:
  XMLHttpRequest() is outdated and lengthy
  new method is fetch()
  */
//  ex.
fetch('https://url.com/som/url')
  .then(function(response){
    //successful response
  })
  .catch(function(err){
    //error 404 :( 
  }) 