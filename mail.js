let myFunction = () => {
  let x = document.getElementById('frm1');
  let email = document.getElementById('email');
  let zprava = document.getElementById('zprava');
  let text = '';
  let i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + '<br>';
  }
  event.preventDefault();

  console.log(`e-mail:${email.value}` + `zpráva:${zprava.value}`);
  x.reset();
};

// const emailData = {
//   email: "steve.ballmer@microsoft.com",
//   zprava: '',
// };

// var $form = $('form#test-form'),
//     url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

// $('#submit-form').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//   );
// })
