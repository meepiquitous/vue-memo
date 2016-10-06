// import Vue from 'vue'
// import App from './App.vue'
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

$(window).on('resize load', () => {
  //
  const memoWidth = $('.memo').eq(0).width();
  $('.memo').height(memoWidth + 50);
  //
  let popupTargetHeight = $('.popup').width() + 50;
  $('.popup')
    .height(popupTargetHeight)
    .css('marginTop', -(popupTargetHeight / 2))
    .css('marginLeft', -(popupTargetHeight / 2));
  //
  $('#edit-text-content').height(popupTargetHeight - 64);
  $('#edit-doodle-content')
    .attr('width', popupTargetHeight - 50)
    .attr('height', popupTargetHeight - 50);

});

$('body').on('mousemove', (e) => {
  $('.memos')
    .css('background-position-x', Math.ceil(e.pageX / 30))
    .css('background-position-y', Math.ceil(e.pageY / 30));
});


const getDoodle = (canvasEle, imageData) => {
  // console.log(canvasEle.offsetLeft, canvas.offsetTop);
  let canvas = $(canvasEle);
  let colors = document.createElement('ul');
  $(colors)
    .html(`
      <li class="black"></li>
      <li class="green"></li>
      <li class="yellow"></li>
      <li class="red"></li>
      <li class="white"></li>
    `)
    .css('position')
  const colorTable = [
    {
      name: 'black',
      regularCode: '#222',
      opagueCode: 'rgb(189, 189, 189)',
    },
    {
      name: 'green',
      regularCode: '#5cb85c',
      opagueCode: 'rgb(206, 234, 206)',
    },
    {
      name: 'yellow',
      regularCode: '#f0ad4e',
      opagueCode: 'rgb(251, 231, 202)',
    },
    {
      name: 'red',
      regularCode: '#d9534f',
      opagueCode: 'rgb(244, 203, 202)',
    },
    {
      name: 'white',
      regularCode: '#fff',
      opagueCode: '#fff',
    },
  ];

}

getDoodle(document.getElementById('edit-doodle-content'), null)
