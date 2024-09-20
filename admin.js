function generateLink() {
    // Mengambil nama dari input
    const name = document.getElementById("guestName").value.trim();
    
    // Jika nama kosong, tampilkan pesan peringatan
    if (!name) {
        alert("Please enter a guest name.");
        return;
    }

    // Menghasilkan link dengan parameter nama
    const baseUrl = "https://ZuldanTika.github.io/uji/";
    const generatedLink = `${baseUrl}?name=${encodeURIComponent(name)}`;

    // Menampilkan link yang dihasilkan
    const linkOutput = document.getElementById("generated-link");
    linkOutput.innerHTML = `Generated Link: <a href="${generatedLink}" target="_blank">${generatedLink}</a>`;
}

// Fungsi untuk menghapus semua komentar dari localStorage
function clearComments() {
    if (confirm('Are you sure you want to delete all comments?')) {
        localStorage.removeItem('comments');
        alert('All comments have been deleted.');
    }
}
