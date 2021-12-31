// 0. Kita buat dulu functionnya
function getPilihanKomputer() {

	const comp = Math.random();

	// Kita bisa meperpendek baris kode kita dengan cara menghapus kurung kurawal karena 1 if bisa kita jadiakn 1 statement
	// lalu Variabel comp kita bisa ganti dengan return untuk megembalikan value
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';    
}

function getHasil(comp, player) {

    if( player == comp ) return 'SERI!';

    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';

    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';

    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!'; 
}

// 1. Kita akan menangkap gambar pada index
			/* Gajah */
/*const pGajah = document.querySelector('.gajah');

// 2. Kita akan berikan event ke gambar itu
pGajah.addEventListener('click', function() {

	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = pGajah.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);
	
	// Kita akan mengganti gambarnya
	const imgKomputer = document.querySelector('.img-komputer');

	// Kita ganti gambarnya dengan memanipulasi gambarnya
	imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

	// Kita masukkan hasilnya 
	const info = document.querySelector('.info');
	info.innerHTML = hasil;
});*/

			/* Orang */
/*const pOrang = document.querySelector('.orang');

// 2. Kita akan berikan event ke gambar itu
pOrang.addEventListener('click', function() {

	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = pOrang.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);
	
	// Kita akan mengganti gambarnya
	const imgKomputer = document.querySelector('.img-komputer');

	// Kita ganti gambarnya dengan memanipulasi gambarnya
	imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

	// Kita masukkan hasilnya 
	const info = document.querySelector('.info');
	info.innerHTML = hasil;
});*/

				/* Semut */
/*const pSemut = document.querySelector('.semut');

// 2. Kita akan berikan event ke gambar itu
pSemut.addEventListener('click', function() {

	const pilihanKomputer = getPilihanKomputer();
	const pilihanPlayer = pSemut.className;
	const hasil = getHasil(pilihanKomputer, pilihanPlayer);
	
	// Kita akan mengganti gambarnya
	const imgKomputer = document.querySelector('.img-komputer');

	// Kita ganti gambarnya dengan memanipulasi gambarnya
	imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

	// Kita masukkan hasilnya 
	const info = document.querySelector('.info');
	info.innerHTML = hasil;
});*/
// 3. Kita juga akan siapkan pilihan komputer dari komputer
// 4. Kita juga akan menyiapkan aturan dari suit jawanya












// Kita berikan sedikit animasi : Seolah - olah komputer mengacak dulu pilihannya agar program kita terlihat berfikir. Dan kita berikan jeda 1 detik saja
function putar() {

	const imgKomputer = document.querySelector('.img-komputer');

	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	// setInterval() berfungsi untuk melakukan sesuatu secara berulang - ulang selama Interval waktu tertentu.
	setInterval(function() {

		if (new Date().getTime() - waktuMulai > 1000) {
			
			// clearInterval() Berfungsi untuk memberhentikan setInterval();
			clearInterval();
			return;
		}

		imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');

		if (i == gambar.length) i = 0;

	}), 100;
}

















// Kita bisa mempersingkat penulisan Aturan Suwit jawa kita dengan cara menggunakan Perulangan
const pilihan = document.querySelectorAll('li img');

// Looping img
pilihan.forEach( function(index) {
	
	// Kita berikan event pada setiap elemen yang di-click
	index.addEventListener('click', function() {

		const pilihanKomputer = getPilihanKomputer();
		const pilihanPlayer = index.className;
		const hasil = getHasil(pilihanKomputer, pilihanPlayer);

		putar();

		setTimeout(function() {

			// Kita akan mengganti gambarnya
			const imgKomputer = document.querySelector('.img-komputer');

			// Kita ganti gambarnya dengan memanipulasi gambarnya
			imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

			// Kita masukkan hasilnya 
			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);
				
	});

});
