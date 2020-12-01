let myFunction =() => {
  let x = document.getElementById("frm1");
  let email = document.getElementById("email");
  let zprava = document.getElementById("zprava");
  let text = "";
  let i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  event.preventDefault()
 console.log(`email:${email.value}` + `zprava:${zprava.value}`);
  x.reset();
};

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


