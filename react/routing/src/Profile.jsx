import { Outlet, Link, useParams } from "react-router-dom";
import Popeye from "./assets/Popeye";
import Spinach from "./assets/Spinach";
import DefaultProfile from "./DefaultProfile";


const Profile = () => {
  // const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <Link to='/'> Click to go home!</Link>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>

      
      <Link to='popeye'>Click Here to Meet Popeye!</Link>
      <Outlet /> 
            

      {/* {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )} */}
    </div>
  );
};

export default Profile;
