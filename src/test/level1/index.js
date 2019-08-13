'use strict'

const BASE_URL = 'http://172.28.31.239:3000/api/v1'

const $app = document.getElementById('app')

let state = {
  singers: []
}

getSingers()

function getSingers() {
  fetch(BASE_URL + '/singers', { method: 'GET' })
    .then(res => res.json())
    .then(data => setState({ singers: data }))
}
function voteSinger(id) {
  fetch(BASE_URL + '/singers/vote/' + id, { method: 'PATCH' })
    .then(res => res.json())
    .then(() => getSingers())
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
  return `<li data-key="${data.id}">
    <div class="singer_thumb">
      <img src="${data.img}" class="thumb_img">
    </div>
    <dl class="singer_info">
      <dt class="screen_out">노래 제목</dt>
      <dd class="txt_song">${data.song}</dd>
      <dt class="screen_out">가수 이름</dt>
      <dd class="txt_name">${data.name}</dd>
      <dt class="screen_out">투표 수</dt>
      <dd class="txt_name">${data.hit}</dd>
    </dl>
  </li>`
}
function bindEvents() {
  $app.querySelector('.list_singer').addEventListener('mouseover', function(e) {
    if (e.target.nodeName !== 'LI') return
    const id = e.target.getAttribute('data-key')
    if (!id) return
    voteSinger(id)
  })
}
