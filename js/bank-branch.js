$('#branches').change(function(){
    //alert("jf");
    var seloption=$('select[name=branches]').val();
    //alert(seloption);
    var seloptionarray = seloption.split('%');
    var lat = seloptionarray[seloptionarray.length-2];
    var long = seloptionarray[seloptionarray.length-1];
   // alert(lat+'-'+long);
   // initMap(lat,long);
    var uluru = {lat: parseFloat(lat), lng: parseFloat(long)};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    var branchcode=seloptionarray[0];
    var branchname=seloptionarray[1];
    var branchaddress=seloptionarray[2]+' '+seloptionarray[3];
    var city=seloptionarray[4];
    var state=seloptionarray[5];
    var servicemgr=seloptionarray[6];
    var mobileno=seloptionarray[7];
    var outputhtml="<p>Branch Code: <strong>"+branchcode+"</strong><br>Branch Name: <strong>"+branchname+"</strong><br>Branch Address: <strong>"+branchaddress+"</strong><br>City: <strong>"+city+"</strong><br> State: <strong>"+state+"</strong><br>Mobile No: <strong>"+mobileno+"</strong></p>";
    $('#branchdetails').html(outputhtml);
    })

  $('#atms').change(function(){
    //alert("jf");
    var seloption=$('select[name=atms]').val();
    //alert(seloption);
    var seloptionarray = seloption.split('%');
    var lat = seloptionarray[5];
    var long = seloptionarray[6];
   // alert(lat+'-'+long);
   // initMap(lat,long);
    var uluru = {lat: parseFloat(lat), lng: parseFloat(long)};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    var branchcode=seloptionarray[0];
    var branchname=seloptionarray[1];
    var branchaddress=seloptionarray[2];
    var city=seloptionarray[3];
    var state=seloptionarray[4];;
    var atmlocation=seloptionarray[7];
    var outputhtml="<p>Branch Code: <strong>"+branchcode+"</strong><br>Branch Name: <strong>"+branchname+"</strong><br>Branch Address: <strong>"+branchaddress+"</strong><br>City: <strong>"+city+"</strong><br> State: <strong>"+state+"</strong><br>ATM Location: <strong>"+atmlocation+"</strong></p>";
    $('#branchdetails').html(outputhtml);
    })