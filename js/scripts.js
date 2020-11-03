const contactLink = document.querySelector('.contact-us');
const writeUsModal = document.querySelector('.modal-write-us');
const writeUsForm = writeUsModal.querySelector('.write-us-form');
const writeUsName = writeUsModal.querySelector('#your-name');
const writeUsEmail = writeUsModal.querySelector('#your-email');
const writeUsText = writeUsModal.querySelector('#message-text');
const writeUsClose = writeUsModal.querySelector('.modal-close');

const mapLink = document.querySelector('.index-map-link');
const mapModal = document.querySelector('.modal-map');
const mapClose = mapModal.querySelector('.modal-close');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

// Modal Contact

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsModal.classList.add('modal-show');
  if (!storageName && storageEmail) {       
    writeUsEmail.value = storageEmail;
    writeUsName.focus();
  } else if (storageName && storageEmail) {    
    writeUsName.value = storageName;        
    writeUsEmail.value = storageEmail;
    writeUsText.focus();
  } else {
    writeUsName.focus();
  }
});

writeUsForm.addEventListener('submit', function (evt) {
  if (!writeUsEmail.value) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal-error');
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    writeUsModal.classList.add('modal-error');
    writeUsEmail.classList.add('valid-error');
    writeUsEmail.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', writeUsName.value);
      localStorage.setItem('email', writeUsEmail.value); 
    }
  }
});

writeUsClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove('modal-show');
  writeUsModal.classList.remove('modal-error');
  writeUsEmail.classList.remove('valid-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsModal.classList.contains('modal-show')) {
      evt.preventDefault();
      writeUsModal.classList.remove('modal-show');
      writeUsModal.classList.remove('modal-error');
      writeUsEmail.classList.remove('valid-error');
    }
  }
});

// Modal Map

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
      if (mapModal.classList.contains('modal-show')) {
        evt.preventDefault();
        mapModal.classList.remove('modal-show');
    }
  }
});

