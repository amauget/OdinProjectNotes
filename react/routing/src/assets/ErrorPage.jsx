import { Link } from 'react-router-dom'

const ErrorPage = () =>{
    return(
        <div>
            <h1>Oh no! This route doesn't exist.</h1>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default ErrorPage