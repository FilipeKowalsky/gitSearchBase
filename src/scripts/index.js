/*import { profileUsuer } from "./profile,js";*/

const button = document.querySelector('.button_profile')

button.addEventListener('click', () =>{
  const input = document.querySelector('#search');
  const user = input.value.replaceAll(" ","");
  fetch(`https://api.github.com/users/${user}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro na resposta da API do GitHub');
      }
    })
    .then(data => {
      localStorage.setItem("profile", user);
      window.location.replace('./src/pages/profile.html')
    })
    .catch(error => {
      window.location.replace('./src/pages/error.html')
    });
});