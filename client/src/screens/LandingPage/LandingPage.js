import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./LandingStyles.css";

const LandingPage = () => {
  return (
    <div className="main text-center">
      <Container>
        {/* <Row> */}
        <div className="intro-text">
          <div>
            <h1 className="title">Welcome to Shop</h1>
            {/* <p className="subtitle">One Safe place for all your notes.</p> */}
          </div>
          <div className="buttonContainer">
            <Link to="/login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Signup
              </Button>
            </Link>
          </div>
        </div>
        {/* </Row> */}
      </Container>
    </div>
  );
};

// function LandingPage({ history }) {
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   useEffect(() => {
//     if (userInfo) {
//       history.push("/mynotes");
//     }
//   }, [history, userInfo]);

//   return (
//     <div className="main">
//       <Container>
//         <Row>
//           <div className="intro-text">
//             <div>
//               <h1 className="title">Welcome to Note Zipper</h1>
//               <p className="subtitle">One Safe place for all your notes.</p>
//             </div>
//             <div className="buttonContainer">
//               <Link to="/login">
//                 <Button size="lg" className="landingbutton">
//                   Login
//                 </Button>
//               </Link>
//               <Link to="/register">
//                 <Button
//                   variant="outline-primary"
//                   size="lg"
//                   className="landingbutton"
//                 >
//                   Signup
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </div>
//   );
// }

export default LandingPage;
