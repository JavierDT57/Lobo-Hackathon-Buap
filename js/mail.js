const firebaseConfig = {
  apiKey: "AIzaSyBS2tTVfLOpjrCfgCzEFerbMF7xqCH4nwM",
  authDomain: "conkigo-24303.firebaseapp.com",
  databaseURL: "https://conkigo-24303-default-rtdb.firebaseio.com",
  projectId: "conkigo-24303",
  storageBucket: "conkigo-24303.appspot.com",
  messagingSenderId: "979146498793",
  appId: "1:979146498793:web:f3af87ea14ab6bfd3c4678"
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