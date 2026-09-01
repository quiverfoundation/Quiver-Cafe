document.getElementById('year').textContent = new Date().getFullYear();

var video = document.getElementById('storyVideo');
if (video) {
  var id = video.getAttribute('data-youtube');
  if (id) {
    video.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      f.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      f.setAttribute('allowfullscreen', '');
      f.className = 'story-iframe';
      video.innerHTML = '';
      video.appendChild(f);
    }, { once: true });
  }
}
