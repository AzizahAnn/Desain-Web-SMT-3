function hitung() {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const op = document.getElementById("operasi").value;
  let hasil;

  if (isNaN(a) || isNaN(b)) {
    hasil = "Harap isi kedua angka!";
  } else {
    switch (op) {
      case '+':
        hasil = a + b;
        break;
      case '-':
        hasil = a - b;
        break;
      case '*':
        hasil = a * b;
        break;
      case '/':
        hasil = b !== 0 ? a / b : "Tidak bisa dibagi 0!";
        break;
      default:
        hasil = "Pilih operasi!";
    }
  }

  document.getElementById("hasil").innerHTML = `Hasil: ${hasil}`;
}