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