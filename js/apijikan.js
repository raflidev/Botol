

$.getJSON('https://api.jikan.moe/v3/season/2020/winter', function (data) {
    let datalist = data.anime;
    let header = data.season_name + " " + data.season_year;
    let content = '';

    $.each(datalist, function (i, list) {

        content += `
            <div class="col-sm-12 col-md-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${list.image_url}" alt="${list.title}">
                    <div class="card-body">                    
                        <div class="badge badge-secondary">${list.type} | ${(list.episodes == null ? '?' : list.episodes)} eps | ${list.source}</div >                    
                    <h5 class="card-title">${list.title}</h5>
                    </div >
                </div >
            </div >
        `
    });

    $('#list-content').html(content)
    $('#header').html(header)
});