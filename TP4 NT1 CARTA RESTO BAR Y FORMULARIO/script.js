

    function miFuncion() {
      var x = document.forms["form1"];
      var text = "";
      var primerElem="";
      var i;
      for (i = 0; i < x.length ;i++) {
        primerElem=x.elements[0].value;
        text += x.elements[i].value + " " + " ";
      }
      if ( primerElem ==="") {

        alert ("Ingrese los datos solicitados");

     } else {

         alert ("Se ha ingresado todos los datos satisfactoriamente: " + text);

     }

    }

    function miFuncionDos(){
      var x = document.querySelectorAll(".tm-page-ali");
      var textDos = "";
      var primerElem="";
      var i;
        for (i = 0; i < x.length; i++) {
          primerElem = x[0].value;
          if(x[i].value ===""){
            x[i].style.backgroundColor = "red";
            alert ("Ingrese los datos solicitados");
          }
          else{
            textDos += x[i].value + " " + " ";
          }
        }
        if(primerElem ===""){
          alert ("No se ha podido realizar el registro");
        }
        else{
          alert ("Se ha ingresado todos los datos satisfactoriamente: " + textDos);
        }


    }
