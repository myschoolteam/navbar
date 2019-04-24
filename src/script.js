//Module start (module creation with IIFE)
(function(){
  var company = [], product = [], developers = [], randomColor = '';
  var api = "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4";
  $(document).ready(function(){
      $.get( api, function(data, status){
        console.log(data);
        company = data.company;
        product = data.product;
        developers = data.developers;
        
        $('#company').append('<li class="title"><i class="icontitle fas fa-id-badge"></i>' + company[0].title + '</li> <br> <li class="subtitle">' + company[0]['sub-title'] + '</li> <br><br>');

        for(var dat = 0; dat< product.length; dat++){
          randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
          $('#product').append('<li class="title" style="color:' + randomColor + '"><i class="icontitle fas fa-wallet"></i>' + product[dat].title + '</li> <br> <li class="subtitle">' + product[dat]['sub-title'] + '</li> <br><br>');
        }

        for(var dat1 = 0; dat1< developers.length; dat1++){
          randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
          $('#developers').append('<li class="title" style="color:' + randomColor + '"><i class="icontitle fas fa-book"></i>' + developers[dat1].title + '</li> <br> <li class="subtitle">' + developers[dat1]['sub-title'] + '</li> <br><br>');
        }

      });
  });
})();