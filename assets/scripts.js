document.querySelectorAll('.video-title').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.style.color = 'red';
    })
    item.addEventListener('mouseout', event => {
      item.style.color = 'black';
    })
  })
  
  document.querySelectorAll('.thumbnail').forEach(item => {
    item.addEventListener('click', event => {
      const videoTitle = item.closest('.video-container').querySelector('.video-title').innerText;
      alert("Hi,youtube welcomes you");
    })
  })
  
  document.querySelectorAll('.channel-icon').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.style.border = '2px solid blue';
    })
    item.addEventListener('mouseout', event => {
      item.style.border = 'none';
    })
  })
  
