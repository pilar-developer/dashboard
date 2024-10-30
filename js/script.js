function toggleSidebar() {
    // Ambil elemen sidebar, header, dan konten
    const sidebar = document.getElementById('sidebar');
    const header = document.getElementById('header');
    const content = document.getElementById('content');

    // Tambah atau hapus kelas 'closed' untuk toggle
    sidebar.classList.toggle('closed');
    header.classList.toggle('closed');
    content.classList.toggle('closed');
}

// Menutup sidebar otomatis jika layar di bawah 768px saat halaman dimuat
function autoCloseSidebarOnMobile() {
    const sidebar = document.getElementById('sidebar');
    const header = document.getElementById('header');
    const content = document.getElementById('content');

        if (window.innerWidth < 768) {
                sidebar.classList.add('closed');
                header.classList.add('closed');
                content.classList.add('closed');
            }
        }

    // Panggil fungsi saat halaman dimuat
    window.addEventListener('load', autoCloseSidebarOnMobile);

    // Menutup sidebar otomatis saat ukuran layar berubah menjadi lebih kecil dari 768px
    window.addEventListener('resize', function () {
        if (window.innerWidth < 768) {
            autoCloseSidebarOnMobile();
        }
    });