var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  smartSelect: {
    closeOnSelect:'true',
  },
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path:'/',
    redirect: '/about/',
    },
  
    {
      path: '/about/',
      url: 'about.html',

    },
    {
      path: '/one/',
      componentUrl: './one.html',
    },
    {
      path: '/result/',
      componentUrl: './result.html',
    },
    
    {
      path: '/seat/',
      componentUrl: './seat.html',
      options: {
        animate: false,
      },
    },
    {
      path: '/pax_form/',
      componentUrl: './pax_form.html',
    },    
  ],
  calendar: {
    url: 'calendar/',
    dateFormat: 'yyyy/dd/mm',
  },
});
var autocompleteDropdownAjax = app.autocomplete.create({
  inputEl: '#lokasiawal',
  openIn: 'dropdown',
  preloader: true, //enable preloader
  /* If we set valueProperty to "id" then input value on select will be set according to this property */
  valueProperty: 'id', //object's "value" property name
  textProperty: 'name', //object's "text" property name
  limit: 20, //limit to 20 results
  dropdownPlaceholderText: 'Try "JavaScript"',
  source: function (query, render) {
    var autocomplete = this;
    var results = [];
    if (query.length === 0) {
      render(results);
      return;
    }
    // Show Preloader
    autocomplete.preloaderShow();

    // Do Ajax request to Autocomplete data
    app.request({
      url: 'http://localhost/maps-ag/Maps/server/load-point.php',
      method: 'GET',
      dataType: 'json',
      //send "query" to server. Useful in case you generate response dynamically
      data: {
        query: query,
      },
      success: function (data) {
        // Find matched items
        for (var i = 0; i < data.length; i++) {
          if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
        }
        // Hide Preoloader
        autocomplete.preloaderHide();
        // Render items by passing array with result items
        render(results);
      }
    });
  }
});
var $$ = Dom7;
var date = new Date();
// add a day
var sasa = date.setDate(date.getDate() + 1);
var mainView = app.views.create('.view-main', {
  stackPages : 'true',
});
var popup = app.popup.create({
});
var calendarDefault = app.calendar.create({
  dateFormat: 'yyyy/mm/dd',
  inputEl: '#calendar-default',
  //disabled: {
  //      from: new Date(0, 1, 1),
  //      to: new Date(sasa)
  //  },
    closeOnSelect:'true',
});

$("#splash-screen").delay(3000).fadeOut();
app.preloader.show(); 
 
       $.getJSON("https://birautama.com/sansi/mobileapp/index.php/",{} ,function(result){
            $.each(result, function(i, field){
                $(".pilih_rute").append('<option value="' + field.kode_rute + '">' + field.daftar_rute + '</option>');
            });

            app.preloader.hide();
        }); 

var toastBottom = app.toast.create({
  text: 'Pencarian anda belum lengkap',
  closeTimeout: 2000,
});

$$('.caritiket').on('click', function(){
  var dari= document.getElementById("dari").value;
  var tujuan= document.getElementById("tujuan").value;
  var tanggal= document.getElementById("calendar-default").value;    
    
  if (dari==null || dari=="")
        {
            toastBottom.open();
            return false;
        }
  if (tujuan==null || tujuan=="")
        {
            toastBottom.open();
            return false;
        }
  if (tanggal==null || tanggal=="")
        {
            toastBottom.open();
            return false;
        }    
  else{
     mainView.router.navigate('/result/');
  }                      
});






