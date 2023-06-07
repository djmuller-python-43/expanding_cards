const panels = document.querySelectorAll('.panel');


// Whenever you click on a panel
// The active class will first be removed from
// the previous active panel and add active class 
// to the currently clicked panel.
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })
})

const removeActiveClasses = () => {
  panels.forEach(
    panel => {
      panel.classList.remove('active')
  })
}