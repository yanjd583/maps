document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('input[name="layer"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      document.getElementById('aaa').style.display = this.value === '1' ? 'block' : 'none';
      document.getElementById('iii').style.display = this.value === '2' ? 'block' : 'none';
      document.getElementById('uuu').style.display = this.value === '3' ? 'block' : 'none';
    });
  });
});

function botan() {
  const lineFigure = document.getElementById('line_figure');
  if (lineFigure.style.display === 'none') {
    lineFigure.style.display = 'block';
  } else {
    lineFigure.style.display = 'none';
  }
}