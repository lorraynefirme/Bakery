const modal = document.querySelector('[data-modal="container"]')
const fechar = document.querySelector('[data-modal="fechar"]')
const itemClique = document.querySelectorAll('.bread-item')

fechar.addEventListener('click', event => {
  modal.classList.remove('ativo')
})


itemClique.forEach((item) => {
  item.addEventListener('click', event =>{
    const title = item.querySelector('.title-bread');
    const modalTitle = modal.querySelector('.modal-title');

    const paragrafo = item.querySelector('.paragrafo');
    const modalParagrafo = modal.querySelector('.modal-paragrafo');

    const imgBread = item.querySelector('.img-bread');
    const imgModal = modal.querySelector('.img-modal');

    imgModal.setAttribute('src',imgBread.getAttribute('src'));
    modalTitle.innerText = title.innerText;
    modalParagrafo.innerText = paragrafo.innerText;
    
    modal.classList.add('ativo')
    
  })
})

window.addEventListener('scroll', () =>{
  console.log(window.pageYOffset) 
  if(window.pageYOffset === 300){
    console.log('AAAAAAAA')
  }
})




