
//当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载。
document.addEventListener('DOMContentLoaded', function () {
  initDate()
  initAudio()
});


function initDate() {
  const h2 = document.querySelectorAll('.content section div h2');
  const length = h2.length;
  setInterval(() => {
    for (let i = 0; i < length; i++) {
      h2[i].innerHTML = new Date().toLocaleString();
    }
  }, 1000);
}

function initAudio() {
  console.log('ji11');
  const myAudio = document.querySelector('#my-audio')
  myAudio.play()
  console.log(myAudio);
}