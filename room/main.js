/*
		Designed by: Jarlan Perez
		Original image: https://www.artstation.com/artwork/VdBllN

*/


const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${ y * 4  + 75}deg)
        rotateZ(${ -x * 12  + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);

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
