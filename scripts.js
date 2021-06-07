// re-order the content for mobile 
const mediaQuery = window.matchMedia('(max-width: 900px)')
function handleMobileChange(mediaQuery) {
  if (mediaQuery.matches) {
    const threeClients = document.getElementById('three_clients');
    threeClients.id = 'three_clients_mob';
    const fourEdu = document.getElementById('four_edu');
    fourEdu.id = 'four_edu_mob';
    const contentDiv = document.getElementById('content');
    contentDiv.insertAdjacentElement('beforeend', fourEdu);
    contentDiv.insertAdjacentElement('beforeend', threeClients);

    //experience fade in
    const expDiv = document.querySelector('.exp');
    function obCallBack3(payload) {
      if (payload[0].isIntersecting) {
        expDiv.classList.remove('hide');
        expDiv.classList.add('show');
      } else {
        expDiv.classList.remove('show');
        expDiv.classList.add('hide');
      }
    }
    const ob2 = new IntersectionObserver(obCallBack3);
    ob2.observe(expDiv);
  }
}
mediaQuery.addListener(handleMobileChange);
handleMobileChange(mediaQuery);

// scroll animation
// clients
const clientsDiv = document.querySelector('.clients');
function obCallBack1(payload) {
  if (payload[0].isIntersecting) {
    clientsDiv.classList.remove('hide');
    clientsDiv.classList.add('show');
  } else {
    clientsDiv.classList.remove('show');
    clientsDiv.classList.add('hide');
  }
}
const ob1 = new IntersectionObserver(obCallBack1);
ob1.observe(clientsDiv);

// education
const eduDiv = document.querySelector('.edu');
function obCallBack2(payload) {
  if (payload[0].isIntersecting) {
    eduDiv.classList.remove('hide');
    eduDiv.classList.add('show');
  } else {
    eduDiv.classList.remove('show');
    eduDiv.classList.add('hide');
  }
}
const ob2 = new IntersectionObserver(obCallBack2);
ob2.observe(eduDiv);