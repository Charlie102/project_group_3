                                                /////////////////start product page////////////////////////
// Start: Categories Slide-Box
$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
// End: Categories Slide-Box

// json code
$(document).ready(function () {
  var data = [];
  $.getJSON("js/footer.json", function (items) {
    data = items;

    showImage(data);
  });


  //Start: Detail-Item Modal
  $(document).on("click", ".productImg", function () {
    let id = $(this).data("id");

    let product = data.filter((ele) => ele.pdid == id);

    showModal(product[0]);
    $("#showModal").modal("show");
  });
  //End: Detail-Item Modal



  // Start: JSON Code / truyền data từ JSON file
  function showImage(items) {
    let s = [];

    $.each(items, function (e, json) {

      s.push(`<div class="element_gifts" data-name="${json.pdname}" data-id="${json.pdid}" data-item="${json.pdcatogery}" data-brand="${json.pdbrand}" data-detail1="${json.detail1}" data-detail2="${json.detail2}" data-detail3="${json.detail3}" data-detail4="${json.detail4}" data-detail5="${json.detail5}">
            
            <img src="${json.pdimage}" data-id="${json.pdid}" class="productImg" alt=""><br>
                        
            <hr>
            <p></p>${json.pdname}</p>
            <p>${json.pdbrand}</p>
            </div>
            `);
    });
    $("#products").html(s.join(" "));
    element_gifts = document.querySelectorAll(".element_gifts");
    // End: JSON CODE
  }
});

//Modal
function showModal(json) {
  let s = `
    <div class="row">
        <div class="col-sm-7 col-md-7 col-lg-7">
            <div><img src="${json.pdimage}" style="width: 95%; border: 3px solid black"  alt=""></div>
        </div>
        <div class="col-sm-5 col-md-5 col-lg-5 modal-item-detail">
            <h3 style="color: black; text-align: center;"><b>${json.pdname}</b></h3>
            <hr>
            <p><b>Price:</b> ${json.pdprice}</p>
            <p><b>ID:</b> ${json.pdid}</p>
            <p><b>Catogery:</b> ${json.pdcatogery}</p>
            <p><b>Brands:</b> ${json.pdbrand}</p>
            <p><b></b> ${json.detail1}</p>
            <p><b></b> ${json.detail2}</p>
            <p><b></b> ${json.detail3}</p>
            <p><b></b> ${json.detail4}</p>
            <p><b></b> ${json.detail5}</p>
            
        </div>
    </div>           
    `;

  $(".modal-item").html(s);
}

//START FILTER CATEGORIES

var element_gifts = document.querySelectorAll(".element_gifts");
const filter_button = document.querySelectorAll("#filter_button .filter");
const filter_brand = document.querySelectorAll(".filter-brand");
//console.log(filter_button);

//FILLTER BY EVENT CLICK id#filter_button

filter_button.forEach(function (e) {
  e.addEventListener("click", function (e1) {
    //Click to get data filter
    let button_filter = e1.target.dataset.filter;
    //console.log(button_filter);
    element_gifts.forEach(function (e2) {
      let element_filter = e2.dataset.item;

      if (button_filter === element_filter || button_filter === "all") {
        e2.style.display = "block";
      } else {
        e2.style.display = "none";
      }
    });
  });
});

//FILTER BY BRANDS
filter_brand.forEach(function (e) {
  e.addEventListener("click", function (e1) {
    let button_brand = e1.target.dataset.filter;
    //console.log(button_brand);
    element_gifts.forEach(function (e2) {
      let element_filter = e2.dataset.brand;
      //console.log(element_filter);

      if (button_brand === element_filter || button_brand === "all") {
        e2.style.display = "block";
      } else {
        e2.style.display = "none";
      }
    });
  });
});
