

    function miFuncion() {
      var x = document.forms["form1"];
      var text = "";
      var primerElem="";
      var i;
      for (i = 0; i < x.length ;i++) {
        primerElem=x.elements[0].value
        text += x.elements[i].value + " " + " ";
      }
      if ( primerElem ==="") {

        alert ("Ingrese los datos solicitados");

     } else {

         alert ("Se ha ingresado todos los datos satisfactoriamente: " + text);

     }

    }
