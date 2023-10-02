const message = "Loading...";
const errorMessage = "Can't display the data";
const Vedkumar1 = () => {
  $.getJSON("team.json", function (data) {
    $.each(data.members, function (index, obj) {
      $("#team").append("<h2>" + obj.name + "</h2>");
      $("#team").append("<h5>" + obj.position + "</h5>");
      $("#team").append("<p>" + obj.bio + "</p>");
    });
  });
};
const Vedkumar2  = () => {
  $.ajax({
    type: "GET",
    url: "team.json",
    dataType: "json",
    beforeSend: function () {
      $("#team").append("<p>" + mssg + "</p>");
    },
    success: function (response) {
        $("#team").empty();
        $.each(response.members, function (index, obj) {
          $("#team").append("<h2>" + obj.name + "</h2>");
          $("#team").append("<h5>" + obj.position + "</h5>");
          $("#team").append("<p>" + obj.bio + "</p>");
        });
    },
    error: function () {
      $("#team").append("<p>" + errorMssg + "</p>");
    }
  });
};
$(document).ready(function () {
  // Vedkumar1();
  // Vedkumar2();
});