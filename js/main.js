window.setTimeout("waktu()", 1000);

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("jam").innerHTML = (waktu.getHours() < 10 ? '0' : '') + waktu.getHours() + " : " + (waktu.getMinutes() < 10 ? '0' : '') + waktu.getMinutes() + " : " + (waktu.getSeconds() < 10 ? '0' : '') + waktu.getSeconds() + " WIB";
}


$.ajax({
    url: 'https://muslimsalat.com/bekasi/3.json',
    type: 'get',
    dataType: 'jsonp',
    data: {
        'key': 'd8ad83287916e7112107d7e508f20ad9'
    },
    success: function (result) {
        $('#subuh').html("Subuh " + result['items'][0]['shurooq'])
        $('#dzuhur').html("Dhuzur " + result['items'][0]['dhuhr'])
        $('#azhar').html("Azhar " + result['items'][0]['asr'])
        $('#maghrib').html("Maghrib " + result['items'][0]['maghrib'])
        $('#isya').html("Isya " + result['items'][0]['isha'])
    }
});



$('#btn-jadwal').on('click', function () {
    $.getJSON('https://muslimsalat.com/bekasi/3/weekly.json?callback=?&key=d8ad83287916e7112107d7e508f20ad9', function (data) {
        let jadwal = data['items'];
        let header = `
        <div class='container'>
        <table class="table table-sm">
            <tbody>
            <thead>
            <tr>
                <th scope="col">Tanggal</th>
                <th scope="col">Subuh</th>
                <th scope="col">Fajar</th>
                <th scope="col">Dzuhur</th>
                <th scope="col">Ashar</th>
                <th scope="col">Maghrib</th>
                <th scope="col">Isya</th>
            </tr>
            </thead>
        `;
        let content = '';
        let footer = `
        </tbody>
          </table>
          </div>
        `;

        $.each(jadwal, function (i, list) {
            console.log(list);
            content += `
              <tr>
                <td>`+ list['date_for'] + `</td>
                <td>`+ list['fajr'] + `</td>
                <td>`+ list['shurooq'] + `</td>
                <td>`+ list['dhuhr'] + `</td>
                <td>`+ list['asr'] + `</td>
                <td>`+ list['maghrib'] + `</td>
                <td>`+ list['isha'] + `</td>
              </tr>
            
            `
        });

        $('#jadwal-sholat').html(header + content + footer)
    });
});