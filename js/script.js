
// random picture
function gantiganti(){
let gambar = document.getElementById("gambarganti");
let sepatu1 = document.getElementById('sepatu1');
let sepatu2 = document.getElementById('sepatu2');
let sepatu3 = document.getElementById('sepatu3')

let angkaRandom= Math.floor(Math.random() * 3) + 1;
if(angkaRandom === 1){
  gambar.innerHTML = '<img src="picture/1.png" alt=""/>';
  sepatu1.classList.add("sepatu1");
  sepatu2.classList.remove("sepatu2");
  sepatu3.classList.remove("sepatu3");
} else if(angkaRandom === 2){
  gambar.innerHTML = '<img src="picture/2.png" alt=""/>';
  sepatu1.classList.remove("sepatu1");
  sepatu2.classList.add("sepatu2");
  sepatu3.classList.remove("sepatu3");
}else{
  gambar.innerHTML = '<img src="picture/3.png" alt=""/>';
  sepatu1.classList.remove("sepatu1");
  sepatu2.classList.remove("sepatu2");
  sepatu3.classList.add("sepatu3");
}
}
setInterval(() => {
  gantiganti()
}, 2000);

// timer diskon
const targetDate = new Date('2024-12-25T23:59:59');

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('day').innerHTML = `${days} <p>days</p>`;
      document.getElementById('hour').innerHTML = `${hours} <p>hour</p>`;
      document.getElementById('minute').innerHTML = `${minutes} <p>minute</p>`;
      document.getElementById('second').innerHTML = `${seconds} <p>second</p>`;
      document.getElementById('harga').innerHTML = "RP. 50.000 > RP. 35.000";
    } else {
      document.getElementById('timer').innerHTML = 'Waktu sudah berakhir!';
      document.getElementById('harga').innerHTML = "RP. 50.000";
    }
  }

  // Pemanggilan pertama kali untuk menghindari penundaan satu detik
  updateCountdown();

//   auto refresh halaman
    function autorefresh(){
        setTimeout(() => {
            location.reload;
        }, 1000);
    }

  // Perbarui waktu setiap detik
  setInterval(updateCountdown, 1000);