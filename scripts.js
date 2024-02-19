const navigateTo = (route) => {
  const appContent = document.getElementById('appContent');
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
        .then(data => {
          appContent.innerHTML = data;
          loadMap();
        });
      break;
    default:
      fetch('pages/home/index.html')
        .then(response => response.text())
        .then(data => appContent.innerHTML = data);
  }
}

navigateTo('home');