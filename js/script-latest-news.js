import data from "../json/news.json" assert { type: "json" };

for (var i = 0; i < data.content.length && i < 3; i++) {
    var newsElement = data.content[i];
    $('#latest-news-section').append(
        '<article class="col-lg-4 col-md-6">' + 
            '<div class="post-item">' +
                '<div class="media-wrapper">' +
                    '<img loading="lazy" src="images/news/' + newsElement["image"] + '" alt="News-' + newsElement["title"] + '" class="img-fluid">' +
                '</div>' +
                '<div class="content">' +
                    '<p><i class="bi bi-calendar"> ' + newsElement["date"] +'</i></p>'+
                    '<h3><a href="single-news.html?id=' + newsElement["id"] + '">' + newsElement["title"] + '</a></h3>' +
                    '<p>' + newsElement["body"] + '</p>' +
                    '<a class="btn btn-main" href="single-news.html?id=' + newsElement["id"] + '">Read more</a>' +
                '</div>' +
            '</div>' +
        '</article>'
    );
}