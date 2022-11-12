
const btn = document.querySelector('.j-btn-test');



    btn.addEventListener('click', () => {
        alert(`Ширина экрана: ${window.screen.width}px, Высота экрана: ${window.screen.height}px`);
        alert(`Ширина экрана: ${window.screen.availWidth}px, Высота экрана: ${window.screen.availHeight}px`);
        alert(`Ширина экрана: ${window.outerWidth}px, Высота экрана: ${window.outerHeight}px`);
        alert(`Ширина экрана: ${window.innerWidth}px, Высота экрана: ${window.innerHeight}px`);
        alert(`Ширина экрана: ${document.documentElement.clientWidth}px, Высота экрана: ${document.documentElement.clientHeight}px`);
        alert(`Ширина экрана: ${document.documentElement.scrollWidth}px, Высота экрана: ${document.documentElement.scrollHeight}px`)
       });
  