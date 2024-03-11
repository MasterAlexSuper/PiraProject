import { Form, Link, Route, useNavigate } from "react-router-dom";

const rightPas = {
   login: "alex",
   pasword: 123
}

export default function Login() {

   const navigate = useNavigate();
   const pasCheck = (e) => {
      e.preventDefault();

      let log = document.getElementById("1").value;
      let pas = document.getElementById("2").value;
      if (log == rightPas.login && pas == rightPas.pasword) {
         navigate('/App')
      } else {
         alert("WRONG")
      }
   }

   return (
      <>
         <div>
            <div className="login">
               <p>Login</p>
               <Form className="form" onSubmit={pasCheck}>
                  <input type="text" name="login" id="1" />
                  <input type="password" name="pasword" id="2" />
                  <input type="submit" value="Login in" id="3" />
               </Form>
            </div>
         </div>
      </>
   )
}