/* Open-closed principle: software entities should be open for extension 
      but closed for modification. */

function printQuiz(questions){
  questions.forEach(question => {
    console.log(question.description);
    /* switch cases often indicate a violation of open-closed principle */
    switch(question.type){
      case 'boolean':
        console.log('1. True');
        console.log('2. False');
        break;
      
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        })
        break;

      case 'text':
        console.log('Answer: __________');
        break;
        case 'range': /* This shouldn't have to be added when type "range" is added to questions */
        console.log('Minimum __________');;
        console.log('Maximum ___________');
    }
    console.log('');
})
}
const questions = [
  {
    type: 'boolean',
    description: 'this video is useful.'
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language?',
    options: ['CSS', 'HTML', 'JS', 'Python']
  },
  {
    type: 'text',
    description: 'Describe your favorite JS feature.'
  },
  { /* added after function created. */
    type:'range',
    description: 'What is the speed limit in your city?'
  }
]

printQuiz(questions);