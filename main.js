document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.video-block').forEach(function (video) {
  var id = video.getAttribute('data-youtube');
  if (!id) return;
  video.addEventListener('click', function () {
    if (video.querySelector('iframe')) return;
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
    f.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    f.setAttribute('allowfullscreen', '');
    f.className = 'story-iframe';
    f.style.opacity = '0';
    f.addEventListener('load', function () { f.style.opacity = '1'; });
    video.appendChild(f);
  });
});
