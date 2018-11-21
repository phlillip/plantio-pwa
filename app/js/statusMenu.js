// Automatic menu
let menuBtn = document.getElementById('openMenu');

if (menuBtn !== null){
  menuBtn.addEventListener('click', function(){
    document.querySelector('.content-footer.auto').classList.toggle('menu-open');

    if(document.querySelector('.content-footer.auto').classList.contains('menu-open'))
    {
      document.querySelector('#menuIcon').classList.replace('fa-bars', 'fa-times')
    }
    else {
      document.querySelector('#menuIcon').classList.replace('fa-times', 'fa-bars')
    }
  });

}
