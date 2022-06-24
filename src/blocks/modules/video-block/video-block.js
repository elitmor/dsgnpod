let data = Array.from(document.querySelectorAll('.cards .cards__item')),
  step = 6,
  item = 0;

data.slice(step).forEach((e) => (e.style.display = 'none'));
item += step;

document.querySelector('#more').addEventListener('click', function () {
  let tmp = data.slice(item, item + step);
  tmp.forEach((e) => (e.style.display = 'block'));
  item += step;

  if (tmp.length <= 6) this.remove();
});
