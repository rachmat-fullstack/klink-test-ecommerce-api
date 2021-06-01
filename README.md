# Environment
Windows 10 <br>
Node JS v16.2.0 <br>
NPM 7.15.0 <br>
DB MySQL <br>

# Library
Lihat di dependencies dengan menjalankan command <code>npm init -y</code> di node js atau open file "package.json" di dalam directory project

# Cara Install dan Menjalankan API
1. Clone source code dari repo ini  <br>
2. Buat database MySQL dengan nama "klink_test_ecommerce_api"
3. Import/Restore database file klink_test_ecommerce_api.sql pada directory project <br>
4. Install redis server di perangkat Anda dan jalankan service redis server <br>
5. Install node js dan arahkan ke directory project "klink-test-ecommerce-api". Lalu ketik command <code>node index</code> untuk menjalankan API ini. <br>
6. Install postman dan jalankan API dibawah ini : <br> <br>

API MASTER PRODUCT <br>
GET		http://localhost:5000/products			// Menampilkan semua data product <br>
GET		http://localhost:5000/products/:id		// Menampilkan data product berdasarkan id <br>
POST	http://localhost:5000/products			// Membuat product baru <br>
PUT		http://localhost:5000/products/:id		// Update data product berdasarkan id <br>
DELETE	http://localhost:5000/products/:id		// Hapus data product berdasarkan id <br>

API TRANSACTION <br>
POST	http://localhost:5000/add-to-cart		// Add product ke dalam Cart	(with redis) <br>
POST	http://localhost:5000/show-cart-item	// Menampilkan semua product dari Cart	(with redis) <br>
POST	http://localhost:5000/checkout			// Simpan product dari Cart ke dalam Databases <br>
POST	http://localhost:5000/payment-status	// Konfirmasi pembayaran, jika status "PAID" maka otomatis mengurangi jumlah stok product <br>

