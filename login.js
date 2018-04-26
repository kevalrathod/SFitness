    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB8Zq7q6VBHLwPgLycPXXOW1Krz5HOSUB4",
      authDomain: "fitness-200610.firebaseapp.com",
      databaseURL: "https://fitness-200610.firebaseio.com",
      projectId: "fitness-200610",
      storageBucket: "fitness-200610.appspot.com",
      messagingSenderId: "1091201371886"
    };
    firebase.initializeApp(config);


    //get all element

    const txtEmail =document.getElementById('txtEmail');
    const txtPassword =document.getElementById('txtPassword');
    const btnLogin =document.getElementById('btnLogin');

    //Add Login Event
    btnLogin.addEventListener('click', e => {
      const email =txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise=auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));
    });
