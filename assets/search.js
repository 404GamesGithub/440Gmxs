document.getElementById('searchTerm').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      displayResults();
  }
});

function displayResults() {
  const inputField = document.getElementsByClassName('searchTerm'); 

  if (!inputField.value) { 
    alert("Say something!");
  } else {
    console.log(inputField.value)
    //document.getElementById("whatisearched").innerHTML = inputField.value;
      /*
      const modal = document.getElementById('modal');
      modal.style.display = 'block';
      const modalContent = modal.querySelector('.modal-content');
      modalContent.style.animation = 'none';
      modalContent.offsetHeight; 
      modalContent.style.animation = '';
      */
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}