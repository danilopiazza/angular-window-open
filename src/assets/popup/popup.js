document.getElementById('success').addEventListener('click', (event) => {
  closePopup('success', 'Hooray! 😄️');
});

document.getElementById('failure').addEventListener('click', (event) => {
  closePopup('failure', 'Oh, no! 😧️');
});

function closePopup(type, message) {
  window.opener.app.notifications.show(type, message, 'From Popup');
}
