
  function signUp(){
        
        var email = document.getElementById("txtEmail");
        var password = document.getElementById("txtPassword");
        
        return new Promise((resolve, reject) => {
 firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then(res => {
    resolve(res);
  }, err => reject(err));


}).then(res => {
  console.log(res);
  
  
    successMessage.innerHTML="";
    errorMessage.innerHTML="";


  
},
err => {
  console.log(err);
  errorMessage.innerHTML = err.message;
  successMessage.innerHTML="";

})

    }
    
    
    
    function signIn(){
        
        var email = document.getElementById("txtEmail");
        var password = document.getElementById("txtPassword");
        
        return new Promise((resolve, reject) => {
 firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then(res => {
    resolve(res);
  }, err => reject(err));


}).then(res => {
  console.log(res);
  
  
    successMessage.innerHTML="";
    errorMessage.innerHTML="";


  
},
err => {
  console.log(err);
  errorMessage.innerHTML = err.message;
  successMessage.innerHTML="";

})

        
        
        
        
    }
    

    function resetPassword(resolve,reject){
        var email = document.getElementById("txtEmail");
        
        return new Promise((resolve, reject) => {
 firebase.auth().sendPasswordResetEmail(email.value)
  .then(res => {
    resolve(res);
  }, err => reject(err));


}).then(res => {
  console.log(res);
  
  
    successMessageR.innerHTML="Link has been sent to your email address.";
    errorMessageR.innerHTML="";


  
},
err => {
  console.log(err);
  errorMessageR.innerHTML = err.message;
  successMessageR.innerHTML="";

})

        
}
          
    
    
    
    function signOut(){
        
        auth.signOut();
        alert("Signed Out");
        
    }
    
    
    
    auth.onAuthStateChanged(function(user){
        
        if(user){
            
           
            document.getElementById("btnLogout").removeAttribute("hidden")
            //Take user to a different or home page
            
            
            
              
           
              subscribemyPost();
            
            //is signed in
            
            
            
        }else{
            document.getElementById("btnLogout").setAttribute("hidden",true)
            
            subscribePost();
            
            //no user is signed in
          
        }
        
        
        
    });