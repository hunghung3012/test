$(document).ready(function () {
    fetch('https://api.qrserver.com/v1/read-qr-code/?fileurl=[https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=123]')
   
    .then((reponse) => {
        console.log(reponse);
    })
   
});