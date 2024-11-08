// Fungsi untuk menampilkan dan menyembunyikan bagian halaman
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Fungsi pencarian untuk Struktur Jabatan
function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const listItems = document.querySelectorAll("#staffList li");

    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "" : "none";
    });
}

// Menampilkan beranda saat pertama kali dimuat
window.onload = () => {
    showSection('home');
};
￼Enter
