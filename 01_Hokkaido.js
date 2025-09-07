document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('input[name="option"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      document.getElementById('aaa').style.display = this.value === '1' ? 'block' : 'none';
      document.getElementById('iii').style.display = this.value === '2' ? 'block' : 'none';
      document.getElementById('uuu').style.display = this.value === '3' ? 'block' : 'none';
    });
  });
});