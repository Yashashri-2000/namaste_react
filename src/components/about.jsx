import User from "./user";
import UserClass from "./userClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <User name={"Yashashri (function)"}/> */}
      <UserClass name={"Yashashri (class)"} location={"Pune class"}/>
    </div>
  );
};
export default About;