const firebaseConfig = {
    apiKey: "AIzaSyC40DnMWEHsrsxC7H1hSgx-1QnBDY_13ns",
    authDomain: "contkigo-1deee.firebaseapp.com",
    databaseURL: "https://contkigo-1deee-default-rtdb.firebaseio.com",
    projectId: "contkigo-1deee",
    storageBucket: "contkigo-1deee.appspot.com",
    messagingSenderId: "415045402647",
    appId: "1:415045402647:web:a1d9623730a17450531c52",
    measurementId: "G-RDQKCNYDLB"
  };

  // initial firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
 var contactformDB = firebase.database().ref('contactForm')
 document.getElementById('contactForm').addEventListener("submit",SubmitForm);


 function SubmitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('')
    var msgContent = getElementVal("msgContent");
    saveMessages(name, emailid, msgContent);


    //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
} 

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
 const getElementVal = (id) => {
    return document.getElementById(id).value;
  };