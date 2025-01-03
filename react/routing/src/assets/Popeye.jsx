import { Link } from "react-router-dom";

const Popeye = () => {
  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <Link to="/profile/spinach">Click here to visit Spinach!</Link> {/* links to parent*/}
    </>
  );
};

export default Popeye;
