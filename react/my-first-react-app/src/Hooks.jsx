import { useState } from "react"


export default function Counter(){
  const [title, setTitle] = useState('Title')
  const [paragraph, updateParagraph] = useState('This is my test paragraph.')

  // temporary state to hold form data prior to submission.
  const [formData, setFormData] = useState({
    title: 'Title',
    paragraph: 'This is my test paragraph.'
  })
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //Preserves all other current values of the data, instead of replacing everything with the next line.
      [name]: value, // Update form data based on input field name
    });
    console.log(value)
  };

  const handleSubmit = (e) =>{
    e.preventDefault()

    setTitle(formData.title)
    updateParagraph(formData.paragraph)
  }

  return(
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input type="text" name='title' id="title" value={formData.title} onChange={handleInputChange} />

      <label htmlFor="paragraph">Paragraph: </label>
      <input type="text" name='paragraph' id="paragraph" value={formData.paragraph} onChange={handleInputChange} />

      <button type='submit'>Submit</button>
    </form>

    </div>
  )




}