//Tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Side nav
const navSideBtn = document.getElementById('navSideToggle');
navSideBtn.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-toggled');
  document.body.classList.toggle('nav-is-default');
});

// Profile 
$(document).ready(function () {
  $('#sidebardropdown').hide();
  $('#sidebarbtn').click(function () {
    $('#sidebardropdown').slideToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });

  $('.showbottom').click(function() {
    //$('.hideme').hide();  
    if ($(this).hasClass('active')) {    
      $(this).removeClass('active');
       $('.hideme').slideUp();
    } else {
      // $('.hideme').slideUp();
      $('.showbottom').removeClass('active');
      $(this).addClass('active');
      $(this).next().filter('.hideme').slideDown();
    }
  });


  // subnav 
  $('.subnav').hide();
  $('.sidedropdown').click(function (event) {
    $(this).find('.subnav').slideToggle("slow");
  $(this).toggleClass('open');
    $('.sidedropdown').not(this).removeClass('open').find('.subnav').slideUp("slow");
    event.stopPropagation();
  });
  // $(document).click(function () {
  //   $('.subnav').slideUp("slow");
  // });
});

// close button
// $('.close').click(function () {
//   $('.subscription-box').hide();
// });

// jquery product-container x
$(document).ready(function() {
	$('.close').on('click', function(){
	    $(this).closest('.close-box').hide()
	}); 
});

$(document).ready(function() {
	$('.close').on('click', function(){
	    $('#quick-reply-preview').hide();
	}); 
});


$(function() {
  $('.content').hide();
  $('#selectField').change(function() {
     $('.content').hide();
     $('#' + $(this).val()).show();
  });
});



//Chart 
var ctx = document.getElementById("conversationsChart");
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Total", "Free", 'Paid'],
    datasets: [{
      borderRadius: 15,
      barPercentage: 0.9,
      data: [26, 6, 20],
      padding: 5,
      backgroundColor: ['#ffcf26', '#47cbbd', '#f35e82',]
    }]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          borderDash: [4, 2],
          color: "#ccc"
        },
        ticks: {
          beginAtZero: true
        },
      }],
      yAxes: [{
        gridLines: {
          borderDash: [4, 2],
          color: "#ccc",
          display: false
        },
        barPercentage: 0.60,
      }],
    }
  }
});

// notificationChart
var ctx = document.getElementById("notificationChart");
var myChart1 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [['Message', 'templates'], 'Contacts', 'Messages', ['Marketing', 'notifications'], ['Transactional', 'notifications'], ['API', 'Requests']],
    datasets: [{
      borderRadius: 15,
      barPercentage: 0.9,
      data: [5, 10, 15, 20, 25, 30],
      padding: 5,
      backgroundColor: '#2DBCAD',
    }]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      borderRadius: 15,
      xAxes: [{
        ticks: {
          fontSize: 11,
          minRotation: 0,
          maxRotation: 0,
          beginAtZero: true,
        },
        gridLines: {
          borderDash: [4, 2],
          color: "#ccc",
          display: false
        },
      }],
      yAxes: [{
        ticks: {
          minRotation: 0,
          maxRotation: 0
        },
        gridLines: {
          borderDash: [4, 2],
          color: "#ccc",
        },
      }],
    }
  }
});

// messageChart
var ctx = document.getElementById("messageChart");
var myChart2 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [['Message', 'Delivered'], ['Message', 'Sent']],
    datasets: [{
      borderRadius: 15,
      barPercentage: 0.9,
      data: [28, 300],
      padding: 5,
      backgroundColor: ['#2DBCAD', '#ffcf26',]
    }]
  },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      borderRadius: 15,
      xAxes: [{
        ticks: {
          fontSize: 11,
          minRotation: 0,
          maxRotation: 0,
          beginAtZero: true,
        },
        gridLines: {
          borderDash: [4, 2],
          color: "#ccc",
          display: false
        },
      }],
      yAxes: [{
        ticks: {
          minRotation: 0,
          maxRotation: 0
        },
        gridLines: {
          borderDash: [4, 2],
          color: "#ccc",
        },
      }],
    }
  }
});



//On Edit List js
function edit_row(containerNo, no) {
  document.getElementById("edit_button_" + containerNo + "_" + no).style.display = "none";
  document.getElementById("save_button_" + containerNo + "_" + no).style.display = "block"; 
  var name = document.getElementById("name_row_" + containerNo + "_" + no);
  var name_data = name.innerHTML;
  name.innerHTML = "<input type='text' class='saveedit' id='name_text_" + containerNo + "_" + no + "' value='" + name_data + "'>";
}
function save_row(containerNo, no) {
  var name_val = document.getElementById("name_text_" + containerNo + "_" + no).value;
  document.getElementById("name_row_" + containerNo + "_" + no).innerHTML = name_val;
  document.getElementById("edit_button_" + containerNo + "_" + no).style.display = "block";
  document.getElementById("save_button_" + containerNo + "_" + no).style.display = "none";
}
function delete_row(containerNo, no) {
  document.getElementById("row_" + containerNo + "_" + no).outerHTML = "";
}
function add_row(containerNo) {
  var new_name = document.getElementById("new_name" + containerNo).value;
  var container = document.getElementById("data_container" + containerNo);
  var div = document.createElement("div");
  div.id = "row_" + containerNo + "_" + (container.children.length + 1);
  div.innerHTML = "<div class='addlistcon'><span class='nambox form-control' id='name_row_" + containerNo + "_" + (container.children.length + 1) + "'>" + new_name + "</span><span class='btbox tableAction'><span class='edit editbtn' onclick='edit_row(" + containerNo + "," + (container.children.length + 1) + ")' id='edit_button_" + containerNo + "_" + (container.children.length + 1) + "'><i class='fa fa-pencil-square-o' aria-hidden='true' data-toggle='tooltip' data-placement='top' title='' data-original-title='Edit'></i></span><span class='save analyticsbtn' id='save_button_" + containerNo + "_" + (container.children.length + 1) + "' onclick='save_row(" + containerNo + "," + (container.children.length + 1) + ")'><i class='fa fa-paper-plane-o' aria-hidden='true' data-toggle='tooltip' data-placement='top' title='' data-original-title='Send Message Template'></i></span><span class='delete deletebtn' onclick='delete_row(" + containerNo + "," + (container.children.length + 1) + ")'><i class='fa fa-trash-o' aria-hidden='true' data-toggle='tooltip' data-placement='top' title='' data-original-title='Delete'></i></span></div>"; 
  container.appendChild(div);
  document.getElementById("new_name" + containerNo).value = "";
}


// inbox js



//add Variable
$(document).ready(function() {
  $('.add-variable').hover(function() {
    $('.addvariabletext').addClass("d-block");
  }, function() {
    $('.addvariabletext').removeClass("d-block");
  });

  
  
});

