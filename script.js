let mahasiswaList = [];
let dosenList = [];
let suratList = [];

document.addEventListener('DOMContentLoaded', () => {
  const mhsForm = document.getElementById('formMahasiswa');
  const dosenForm = document.getElementById('formDosen');
  const suratForm = document.getElementById('suratForm');

  if (mhsForm) {
    mhsForm.addEventListener('submit', e => {
      e.preventDefault();
      const nama = document.getElementById('namaMhs').value;
      const nrp = document.getElementById('nrpMhs').value;
      const tgl = document.getElementById('tglMhs').value;
      const fakultas = document.getElementById('fakultasMhs').value;
      const prodi = document.getElementById('prodiMhs').value;
      mahasiswaList.push({ nama, nrp, tgl, fakultas, prodi });
      updateList('daftarMahasiswa', mahasiswaList);
      mhsForm.reset();
    });
  }

  if (dosenForm) {
    dosenForm.addEventListener('submit', e => {
      e.preventDefault();
      const nama = document.getElementById('namaDosen').value;
      const nip = document.getElementById('nipDosen').value;
      const tgl = document.getElementById('tglDosen').value;
      const fakultas = document.getElementById('fakultasDosen').value;
      const prodi = document.getElementById('prodiDosen').value;
      dosenList.push({ nama, nip, tgl, fakultas, prodi });
      updateList('daftarDosen', dosenList);
      dosenForm.reset();
    });
  }

  if (suratForm) {
    suratForm.addEventListener('submit', e => {
      e.preventDefault();
      const nama = document.getElementById('namaSurat').value;
      const semester = document.getElementById('semester').value;
      const mk = document.getElementById('mataKuliah').value;
      const keperluan = document.getElementById('keperluan').value;
      suratList.push({ nama, semester, mk, keperluan });
      updateList('daftarSurat', suratList);
      suratForm.reset();
    });
  }

  if (document.getElementById('listSuratDosen')) {
    updateList('listSuratDosen', suratList);
  }

  if (document.getElementById('daftarSurat')) {
    updateList('daftarSurat', suratList);
    updateList('daftarMahasiswa', mahasiswaList);
    updateList('daftarDosen', dosenList);
  }
});

function updateList(elementId, list) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = JSON.stringify(item);
    container.appendChild(li);
  });
}