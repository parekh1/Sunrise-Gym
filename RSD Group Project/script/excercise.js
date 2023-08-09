$(document).ready(() =>{
  $("#enduranceLink").click(() => {
    $("#endurance").toggle();
    $("#enduranceLink").css("color", "#ffc107");
    $("#eType1").animate(
      { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
      "1000"
    );
    $("#eType2").animate(
      { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
      "1000"
    );
    $("#eType3").animate(
      {
        borderWidth: "5px",
        padding: "+=10px",
        top: "+10px",
        borderRadius: "+20px",
      },
      "1000"
    );
  
    //   alert("hi");
  });
  $("#strengthLink").click(() => {
    $("#strength").toggle();
    $("#strengthLink").css("color", "#ffc107");
    $("#sType1").animate(
      { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
      "1000"
    );
    $("#sType2").animate(
      { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
      "1000"
    );
    $("#sType3").animate(
      { borderWidth: "5px", padding: "+=10px", borderRadius: "+20px" },
      "1000"
    );
    //   alert("hi");
  });
  
})// All members worked together for creating this page 