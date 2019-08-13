'use strict'

var BASE_URL = 'http://172.28.31.239:3000/api/v1'

var $app = document.getElementById('app')

var state = {
  singers: [],
  singer: {}
}

getSingers()

function getSingers() {
  fetch(BASE_URL + '/singers', { method: 'GET' })
    .then(res => res.json())
    .then(data => setState({ singers: data }))
}
function getSinger(id) {
  fetch(BASE_URL + '/singers/' + id, { method: 'GET' })
    .then(res => res.json())
    .then(data => setState({ singer: data }))
}
function setState(newState) {
  state = { ...state, ...newState }
  renderSingers(state.singers)
  bindEvents()
}
function renderSingers(data) {
  $app.innerHTML = `
    <ul class="list_singer">
      ${data.map(singer => renderSinger(singer)).join('')}
    </ul>
  `
}
function renderSinger(data) {
  return `<li>
    <div class="singer_thumb">
      <img src="${data.img}" class="thumb_img">
    </div>
    <dl class="singer_info">
      <dt class="screen_out">노래 제목</dt>
      <dd class="txt_song">${data.song}</dd>
      <dt class="screen_out">가수 이름</dt>
      <dd class="txt_name">${data.name}</dd>
    </dl>
  </li>`
}
function bindEvents() {
  $app.querySelector('.list_singer').addEventListener('mouseover', function(e) {
    if(e.target.nodeName !== 'LI') return
    console.log('dd')
  })
}
