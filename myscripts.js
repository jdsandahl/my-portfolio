const newForm = document.getElementById("myForm");

const submitClicked = document.getElementById("btnSubmit");
const resetClicked = document.getElementById("btnReset");

submitClicked.addEventListener("click", NewSubmission);
resetClicked.addEventListener("click", ConfirmReset);

function NewSubmission() {
  const newName = document.getElementById("name").value;
  const newEmail = document.getElementById("mail").value;
  const newMessage = document.getElementById("msg").value;

  if (newName == "" || newEmail == "" || newMessage == "") {
    alert("Please complete all fields");
    return false;
  } else {
    alert(newName + ", " + newEmail + ", " + newMessage);
    newForm.submit();

    /*window.open('','formConfirmation', 'width=400, height=400, resizable,scrollbars');
        form.target = 'formConfirmation';*/
  }
}

function ConfirmReset() {
  if (confirm("Do you want to start over?")) {
    newForm.reset();
    alert("Form reset");
  } else {
    return false;
  }
}
