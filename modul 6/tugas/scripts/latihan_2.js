let aktif = false;

function ubahTampilan() {
  const targets = document.querySelectorAll(".target");
  targets.forEach(item => {
    if (!aktif) {
      item.classList.add("highlight");
    } else {
      item.classList.remove("highlight");
    }
  });
  aktif = !aktif;
}