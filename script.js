console.log("Berhasil Terhubung");

const inputNamaProduk = document.querySelector("#product-name");
const previewNama = document.querySelector("#preview-name");
const inputHargaProduk = document.querySelector("#product-price");
const previewHarga = document.querySelector("#preview-price");
const inputDeskripsi = document.querySelector("#product-desc");
const previewDeskripsi = document.querySelector("#preview-desc");
const inputLokasi = document.querySelector("#product-location");
const previewLokasi = document.querySelector("#preview-location");
const inputKategori = document.querySelector("#product-category");
const previewKategori = document.querySelector("#preview-category");
const inputGambar = document.querySelector("#product-image");
const previewGambar = document.querySelector("#preview-image");

inputNamaProduk.addEventListener("input", function () {
    const value = inputNamaProduk.value.trim();
    previewNama.textContent = value || "Isi dari Nama Produk";
});

inputHargaProduk.addEventListener("input", function () {
    const value = inputHargaProduk.value.trim();
    previewHarga.textContent = value ? `Rp ${value}` : "Rp [Harga Produk]";
});

inputDeskripsi.addEventListener("input", function () {
    const value = inputDeskripsi.value.trim();
    previewDeskripsi.textContent = value || "Isi Deskripsi Produk";
});

inputLokasi.addEventListener("input", function () {
    const value = inputLokasi.value.trim();
    previewLokasi.textContent = value ? `Lokasi: ${value}` : "Lokasi: [Lokasi Produk]";
});

inputKategori.addEventListener("input", function () {
    const value = inputKategori.value.trim();
    previewKategori.textContent = value || "Isi dari Kategori Produk";
});

inputGambar.addEventListener("change", function () {
    const file = inputGambar.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
        previewGambar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        previewGambar.src = "gambarproduk.jpg";
    }
});
