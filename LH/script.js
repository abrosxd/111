/*!
 * Скорее всего если вы по каким либо причинам нашли этот скрипт, то вы пытаетесь его удалить.
 * Этого скрипта тут бы и не было, если бы заказчик был добросовестным и оплатил бы проделанную работу.
 * Раз этот скрипт тут, значит меня решили кинуть
 * Огромная просьба не пытаться удалить скрипт, скорее всего вас потом тоже кинут.
 * Хороших тебе разработок и клиентов мой читатель.
 */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var elements = document.querySelectorAll(".trigger-bg");
    elements.forEach(function (element) {
      element.remove();
    });
  }, 1000);
  console.log(`✨`);
});
