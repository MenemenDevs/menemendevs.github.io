$('#toggle').click(function(){
	$('.rotate').toggleClass('rotated');
})
$('#toggle-view').click(function(){
	$('.center').toggleClass('view');
})
// Mevcut sayfanın URL'sini kontrol et
fetch(window.location.href)
    .then(response => {
        if (!response.ok) {
            // Eğer sayfa bulunamazsa, 404 sayfasına yönlendir
            window.location.href = "https://menemendevs.github.io/404";
        }
    })
    .catch(() => {
        // Ağ hatası durumunda da 404 sayfasına yönlendir
        window.location.href = "https://menemendevs.github.io/404";
    });
