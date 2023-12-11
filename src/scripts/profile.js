async function profileUsuer(user){
  await fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const header = document.querySelector('header');
      const profile = document.createElement('div');
      const img = document.createElement('img');
      const title = document.createElement('h1');
      const button = document.createElement('button')

      profile.classList.add('profile_container')
      title.classList.add('title_primary')
      title.textContent = data.name;
      img.setAttribute('src', data.avatar_url)
      button.classList.add('button_user')
      button.innerHTML = "Trocar de usuário";

      header.appendChild(profile)
      profile.appendChild(img)
      profile.appendChild(title)
      header.appendChild(button)

      button.addEventListener('click', ()=>{
        window.location.replace('../../index.html')
      })
  })
    
  await fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        const section = document.querySelector('section')
        const card = document.createElement('div')
        const title = document.createElement('h2')
        const paragraph = document.createElement('p')
        const buttonRepos = document.createElement('a')

        card.classList.add('card')
        title.classList.add('title_secondary')
        title.textContent = element.name;
        paragraph.classList.add('text')
        paragraph.textContent = element.description ? element.description : "Sem descrição!"
        buttonRepos.classList.add('button_repos')
        buttonRepos.innerHTML = "Repositório"
        buttonRepos.target = '_blank'
        buttonRepos.href = element.html_url

        section.appendChild(card)
        card.appendChild(title)
        card.appendChild(paragraph)
        card.appendChild(buttonRepos)
    });
  })
}
let user = localStorage.getItem("profile");

profileUsuer(user)
 /*window.location.replace*/