'use strict';

$(function () {
    var jsonUrl = "http://leguralnie.pl/json/ogloszenia-json.json";

    var getData = function () {
        var myHtml = "";
        var output = $(".offers");

        $.ajax({
            url: jsonUrl,
            dataType: "json",
            success: function (response) {
                response.forEach(function (el, ind) {
                    console.log(el);
                    myHtml += "<div class='offer'>";
                    myHtml += "<figure class='offer__image'>";
                    myHtml += "<img src='" + el.image + "'>";
                    myHtml += "</figure>";
                    myHtml += "<div class='offer__description'>";
                    myHtml += "<small>ID: " + el.id + "</small>";
                    myHtml += "<h1>" + el.title + "</h1>";
                    myHtml += "<p>" + el.descripiot + "</p>";
                    myHtml += "<small>";
                    myHtml += "Kategoria: " + el.category + "<br>";
                    myHtml += "Miasto: " + el.city + "<br>";
                    myHtml += "Kontakt: " + el.contact + "<br>";
                    myHtml += "</small>"
                    myHtml += "</div>";
                    myHtml += "</div>";
                });
                output.html(myHtml);

            }
        })
    };

    var btn = $("#get");
    btn.on("click", function (e) {
        getData();
    });


});