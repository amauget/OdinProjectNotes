/* Open-closed principle: software entities should be open for extension 
      but closed for modification. */

      class BooleanQuestion{
        constructor(description){
          this.description = description
        }
        printQuestionChoices(){
          console.log('1. True');
          console.log('2. False');
        }
      }
      class MultipeChoiceQuestion {
        constructor(description, options){
          this.description = description;
          this.options = options;
      
        }
        printQuestionChoices(){
          this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);           
          });
        }
      }
      class TextQuestion {
        constructor(description){
          this.description = description;
        }
        printQuestionChoices(){
          console.log('Answer: _______');
        }
      }

      class RangeQuestion {
        constructor(description){
          this.description = description;
        }
        printQuestionChoices(){
          console.log('Min: _________');
          console.log('Max: ________')
        }
      };
      
      printQuiz(){
        questions.forEach(question => {
          console.log(question.description);
          question.printQuestionChoices();  /* each object has its own variation of this function */
          console.log('');
        })
      }
      const questions = [
        new BooleanQuestion('this vid is useful'),
        new MultipeChoiceQuestion( 'What is your favorite language?',['CSS', 'HTML', 'JS', 'Python']),
        new TextQuestion('Describe your favorite JS feature'),
        new RangeQuestion('what is the speed limit in your city?')
      ]
      
      printQuiz(questions);