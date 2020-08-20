const login =
 `<div class="container">
   <input type="email"  placeholder="Email address" id="txtEmail" >
   <input type="password" placeholder="Password" id="txtPassword" >
   <h5 id="errorMessage"></h5>
   <h5 id="successMessage"></h5>
 
 <button  class="btn btn-action" id="btnLogin" onclick = "signIn()">Log in</button>
 <button  class="btn btn-secondary" id="btnSignUp" onclick="signUp()" >Sign up</button>
 
 <a href="#" onclick="onNavigate('/reset'); return false;">Reset Password</a>
 
 
 </div>`