import { loadMap } from './pages/campuscoqui/scripts';

function navigateTo(route) {
  appContent = document.getElementById('appContent');
  switch (route) {
    case 'home':
      fetch('pages/home/index.html')
        .then(response => response.text())
        .then(data => appContent.innerHTML = data);
    break;
    case 'test':
      fetch('pages/test/index.html')
        .then(response => response.text())
        .then(data => appContent.innerHTML = data);
    break;
    case 'campuscoqui':
      fetch('pages/campuscoqui/index.html')
        .then(response => response.text())
        .then(data => appContent.innerHTML = data);
      import('pages/campuscoqui/scripts.js')
        .then(module =>  {
          loadMap();
        });
    break;
    default:
      fetch('pages/home/index.html')
        .then(response => response.text())
        .then(data => appContent.innerHTML = data);
  }
}