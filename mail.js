// let myFunction =() => {
//   let x = document.getElementById("frm1");
//   let email = document.getElementById("email");
//   let zprava = document.getElementById("zprava");
//   let text = "";
//   let i;
//   for (i = 0; i < x.length ;i++) {
//     text += x.elements[i].value + "<br>";
//   }
//   event.preventDefault()
//  console.log(`email:${email.value}` + `zprava:${zprava.value}`);
//   x.reset();
// };

//  var $form = $('form#frm1'),
//  url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

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

const scriptURL = 'https://script.google.com/macros/s/AKfycby13YWyYR6_nPYk6awJwvSeVlKWNFia9jNmIAWBuY9m_elEBwwN/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

