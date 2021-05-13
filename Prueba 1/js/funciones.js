
$('#btn_comprar').click(function() {
    fn_cargarValor(); 
    x = parseInt($('#txt_valorPack').val(401990));
})
$('#btn_comprar2').click(function() {
    fn_cargarValor();
    x = parseInt($('#txt_valorPack').val(848990));
})
$('#btn_comprar3').click(function() {
    fn_cargarValor();
    x = parseInt($('#txt_valorPack').val(25979));
})
$('#btn_comprar4').click(function() {
    fn_cargarValor();
    x = parseInt($('#txt_valorPack').val(350990));
})
$('#btn_comprar5').click(function() {
    fn_cargarValor();
    x = parseInt($('#txt_valorPack').val(653990));
})
$('#btn_comprar6').click(function() {
    fn_cargarValor();
    x = parseInt($('#txt_valorPack').val(21675));
})
function fn_cargarValor(){
    if( $('#chx_recordarme').prop('checked')){  
        if(validador){
            fn_obtenerValor();
        }
    }
    else{
        $('#txt_valorPersona').hide();
        $('#txt_valorTotal').hide();
        $('#txt_valorPersonaMoneda').hide();
        $('#txt_valorTotalMoneda').hide();
        $('#txt_ahorroPersonaMoneda').hide();
        $('#txt_ahorroTotalMoneda').hide();
        $('#lbl_detalle').hide();
        $('#txt_valorMoneda').val('');
        $('#txt_nombre').val('');
        $('#txt_nombre').removeClass('is-valid');
        $('#txt_nombre').removeClass('is-invalid');
        $('#txt_primerApellido').val('');
        $('#txt_primerApellido').removeClass('is-valid')
        $('#txt_primerApellido').removeClass('is-invalid')
        $('#txt_segundoApellido').val('');
        $('#txt_segundoApellido').removeClass('is-valid');
        $('#txt_segundoApellido').removeClass('is-invalid');
        $('#txt_numeroDoc').val('');
        $('#txt_numeroDoc').removeClass('is-valid');
        $('#txt_numeroDoc').removeClass('is-invalid');
        $('#txt_cantidadPersonas').val('');
        $('#txt_cantidadPersonas').removeClass('is-valid');
        $('#txt_cantidadPersonas').removeClass('is-invalid');
        $("#cmb_indicador").val('0');
        $('#cmb_indicador').removeClass('is-valid');
        $('#cmb_indicador').removeClass('is-invalid');
        $( "#rbt_masculino" ).prop( "checked", false );
        $( "#rbt_femenino" ).prop( "checked", false );
        $('#rbt_masculino').removeClass('is-invalid');
        $('#rbt_masculino').removeClass('is-valid');
        $('#rbt_femenino').removeClass('is-invalid');
        $('#rbt_femenino').removeClass('is-valid');
        $('#rbt_cedula').removeClass('is-invalid');
        $('#rbt_cedula').removeClass('is-valid');
        $('#rbt_pasaporte').removeClass('is-invalid');
        $('#rbt_pasaporte').removeClass('is-valid');
        $( "#rbt_cedula" ).prop( "checked", true );
        $("#cmb_descuento").val('0');
        $('#cmb_descuento').removeClass('is-valid');
    }
}
$('#btn_consultar').click(function() {
    nombre = $('#txt_nombre').val();
    primerApellido = $('#txt_primerApellido').val();
    segundoApellido = $('#txt_segundoApellido').val();
    numeroDoc = $('#txt_numeroDoc').val();
    cantidadPersonas = $('#txt_cantidadPersonas').val();
    selectorMoneda= $("#cmb_indicador option:selected").text();
    validador= true;

    if(nombre == ""){
        $('#txt_nombre').addClass('is-invalid');
        validador= false;
    }
    else{
        $('#txt_nombre').removeClass('is-invalid');
        $('#txt_nombre').addClass('is-valid');   
    }
    if(primerApellido == ""){
        $('#txt_primerApellido').addClass('is-invalid');
        validador= false;
    }
    else{
        $('#txt_primerApellido').removeClass('is-invalid');
        $('#txt_primerApellido').addClass('is-valid');
    }
    if(segundoApellido == ""){
        $('#txt_segundoApellido').addClass('is-invalid');
        validador= false;
    }
    else{
        $('#txt_segundoApellido').removeClass('is-invalid');
        $('#txt_segundoApellido').addClass('is-valid');
    }
    if(numeroDoc == ""){
        $('#txt_numeroDoc').addClass('is-invalid');
        validador= false;
    }
    else{
        $('#txt_numeroDoc').removeClass('is-invalid');
        $('#txt_numeroDoc').addClass('is-valid');
    }
    if(cantidadPersonas == ""){
        $('#txt_cantidadPersonas').addClass('is-invalid');
        validador= false;
    }
    else{
        $('#txt_cantidadPersonas').removeClass('is-invalid');
        $('#txt_cantidadPersonas').addClass('is-valid');
    }
    
    if(selectorMoneda == '-- Seleccione Moneda--'){
        $('#cmb_indicador').addClass('is-invalid');
        validador= false;
    }
    else{
        $('#cmb_indicador').removeClass('is-invalid');
        $('#cmb_indicador').addClass('is-valid');
    }
    if($("#rbt_genero input[id='rbt_masculino']").is(':checked')){
        $('#rbt_masculino').removeClass('is-invalid');
        $('#rbt_femenino').removeClass('is-invalid');
        $('#rbt_femenino').removeClass('is-valid');
        $('#rbt_masculino').addClass('is-valid');
        
    }
    else if($("#rbt_genero input[id='rbt_femenino']").is(':checked')){
        $('#rbt_femenino').removeClass('is-invalid');
        $('#rbt_masculino').removeClass('is-invalid');
        $('#rbt_masculino').removeClass('is-valid');
        $('#rbt_femenino').addClass('is-valid');   
    }
    else{
        $('#rbt_masculino').addClass('is-invalid');
        $('#rbt_femenino').addClass('is-invalid');
        validador= false;
    }
    
    if($("#rbt_documento input[id='rbt_cedula']").is(':checked')){
        $('#rbt_cedula').removeClass('is-invalid');
        $('#rbt_pasaporte').removeClass('is-invalid');
        $('#rbt_pasaporte').removeClass('is-valid');
        $('#rbt_cedula').addClass('is-valid'); 
    }
    else{
        $('#rbt_pasaporte').removeClass('is-invalid');
        $('#rbt_cedula').removeClass('is-invalid');
        $('#rbt_cedula').removeClass('is-valid');
        $('#rbt_pasaporte').addClass('is-valid');     
    }
    if(validador){
        fn_obtenerValor();
    } 
})
function fn_obtenerValor() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var indicadores = data;
        var seleccion = $('#cmb_indicador option:selected').text();
        var valor = '';
        var personas = parseInt($('#txt_cantidadPersonas').val());
        var pack = parseInt($('#txt_valorPack').val());
        var selectorDesc= $("#cmb_descuento option:selected").text();
        $('#txt_valorPersona').show();
        $('#txt_valorTotal').show();
        $('#txt_valorPersonaMoneda').show();
        $('#txt_valorTotalMoneda').show();
        $('#txt_ahorroPersonaMoneda').show();
        $('#txt_ahorroTotalMoneda').show();
        $('#lbl_detalle').show();

        if(seleccion.toUpperCase() == 'DOLAR') {
            valor = 'Dolar: $ ' + indicadores.dolar.valor;
            var dolar = parseInt(indicadores.dolar.valor)
            var resultado = dolar;
            var signo = 'USD ';
        } else if(seleccion.toUpperCase() == 'EURO') {
            valor = 'Euro: $ ' + indicadores.euro.valor;
            var euro = parseInt(indicadores.euro.valor)
            var resultado = euro;
            var signo = 'Euro ';
        } else if(seleccion.toUpperCase() == 'UF') {
            valor = 'UF: $ ' + indicadores.uf.valor;
            var uf = parseInt(indicadores.uf.valor)
            var resultado = uf;
            var signo = 'UF ';
        } else {
            valor = "Debe seleccionar un valor";
            $('#txt_valorMoneda').addClass('is-invalid');
        }
        var totalMoneda = Math.round((personas*pack)/resultado);
        var personaMoneda = Math.round(pack/resultado);
        if(selectorDesc == 'Descuento 10%'){
            var desc1 = 0.9;
            var desc11 = 0.1;
            $('#txt_valorPersona').val('Valor persona: $  ' +  pack*desc1);
            $('#txt_valorTotal').val('Total : $  '+ (personas*pack)*desc1);
            $('#txt_valorPersonaMoneda').val('Valor persona:  ' + signo + (personaMoneda*desc1));
            $('#txt_valorTotalMoneda').val('Total : ' + signo +(totalMoneda*desc1));
            $('#txt_ahorroPersonaMoneda').val('Ahorro persona: $ '+ (pack*desc11));
            $('#txt_ahorroTotalMoneda').val('Ahorro total : $ '+ (personas*pack)*desc11);
            $('#cmb_descuento').addClass('is-valid');
        }
        else if(selectorDesc == 'Descuento 20%'){
            var desc2 = 0.8;
            var desc22 = 0.2;
            $('#txt_valorPersona').val('Valor persona: $  ' +  pack*desc2);
            $('#txt_valorTotal').val('Total : $  '+ (personas*pack)*desc2);
            $('#txt_valorPersonaMoneda').val('Valor persona:  ' + signo + (personaMoneda*desc2));
            $('#txt_valorTotalMoneda').val('Total : ' + signo +(totalMoneda*desc2));
            $('#txt_ahorroPersonaMoneda').val('Ahorro persona: $ '+ (pack*desc22));
            $('#txt_ahorroTotalMoneda').val('Ahorro total : $ '+ (personas*pack)*desc22);
            $('#cmb_descuento').addClass('is-valid');
        }
        else if(selectorDesc == 'Descuento 30%'){
            var desc3 = 0.7;
            var desc33 = 0.3;
            $('#txt_valorPersona').val('Valor persona: $  ' +  pack*desc3);
            $('#txt_valorTotal').val('Total : $  '+ (personas*pack)*desc3);
            $('#txt_valorPersonaMoneda').val('Valor persona:  ' + signo + (personaMoneda*desc3));
            $('#txt_valorTotalMoneda').val('Total : ' + signo +(totalMoneda*desc3));
            $('#txt_ahorroPersonaMoneda').val('Ahorro persona: $ '+ (pack*desc33));
            $('#txt_ahorroTotalMoneda').val('Ahorro total : $ '+ (personas*pack)*desc33);
            $('#cmb_descuento').addClass('is-valid');
        }
        else{
            $('#txt_valorPersona').val('Valor persona: $  ' +  pack);
            $('#txt_valorTotal').val('Total : $  '+ personas*pack);
            $('#txt_valorPersonaMoneda').val('Valor persona:  ' + signo + personaMoneda);
            $('#txt_valorTotalMoneda').val('Total : ' + signo +totalMoneda);
            $('#txt_ahorroPersonaMoneda').val('Sin descuento incorporado');
            $('#txt_ahorroTotalMoneda').val('Sin descuento incorporado');
            $('#cmb_descuento').addClass('is-valid');
        }
        $('#txt_valorMoneda').val(valor);
    }).fail(function() {
        console.log('Error al consumir la API!');
    });
}

fn_ocultarEtiquetas();

function fn_ocultarEtiquetas(){
  document.getElementById('lbl_nombre').style.visibility="hidden";
  document.getElementById('lbl_correo').style.visibility="hidden";
  document.getElementById('lbl_contrasena').style.visibility="hidden";
  document.getElementById('lbl_confirmarContrasena').style.visibility="hidden";
  document.getElementById('lbl_confirmacion').style.visibility="hidden";
  document.getElementById('lbl_sucess').style.visibility="hidden";
  document.getElementById('lbl_genero').style.visibility="hidden";


}
function fn_mostrarEtiquetas(){
  var nombre = document.getElementById('txt_nombre').value;
  var correo = document.getElementById('txt_correo').value;
  var contrasena = document.getElementById('txt_contrasena').value;
  var confirmarContrasena = document.getElementById('txt_confirmarContrasena').value;
  var radio1 = document.getElementById('rbt_radio1').value;
  var radio2 = document.getElementById('rbt_radio2').value;
  
  

          if(nombre==""){
              document.getElementById('lbl_nombre').style.visibility="visible";
              document.getElementById('txt_nombre').classList.add("is-invalid");
          }
          else{
              document.getElementById('lbl_nombre').style.visibility="hidden";
              document.getElementById('txt_nombre').classList.remove("is-invalid");
              document.getElementById('txt_nombre').classList.add("is-valid");
          }
          if(correo==""){
              document.getElementById('lbl_correo').style.visibility="visible";
              document.getElementById('txt_correo').classList.add("is-invalid");
          }
          else{
              document.getElementById('lbl_correo').style.visibility="hidden";
              document.getElementById('txt_correo').classList.remove("is-invalid");
              document.getElementById('txt_correo').classList.add("is-valid");
          }
          if(contrasena==""){
              document.getElementById('lbl_contrasena').style.visibility="visible";
              document.getElementById('txt_contrasena').classList.add("is-invalid");
          }
          else{
              document.getElementById('lbl_contrasena').style.visibility="hidden";
              document.getElementById('txt_contrasena').classList.remove("is-invalid");
              document.getElementById('txt_contrasena').classList.add("is-valid");
          }
          if(confirmarContrasena==""){
              document.getElementById('lbl_confirmarContrasena').style.visibility="visible";
              document.getElementById('txt_confirmarContrasena').classList.add("is-invalid");
          }
          else{
              document.getElementById('lbl_confirmarContrasena').style.visibility="hidden";
              document.getElementById('txt_confirmarContrasena').classList.remove("is-invalid");
              document.getElementById('txt_confirmarContrasena').classList.add("is-valid");
          
          }
          if (document.getElementById('rbt_radio1').checked == false && document.getElementById('rbt_radio2').checked == false){
              document.getElementById('lbl_genero').style.visibility="visible";
              
          }
          else{
            if(document.getElementById('rbt_radio1').checked == false){
              document.getElementById('lbl_genero').style.visibility="hidden";
              document.getElementById('rbt_radio2').classList.add("is-valid");
              document.getElementById('rbt_radio1').classList.remove("is-valid");
            }
            else{
              document.getElementById('lbl_genero').style.visibility="hidden";
              document.getElementById('rbt_radio1').classList.add("is-valid");
              document.getElementById('rbt_radio2').classList.remove("is-valid");
            }
          }

       
          if (contrasena==confirmarContrasena){
            document.getElementById('lbl_confirmacion').style.visibility="hidden";
          }
          else{
              document.getElementById('lbl_confirmacion').style.visibility="visible";
              document.getElementById('txt_contrasena').classList.add("is-invalid");
              document.getElementById('txt_confirmarContrasena').classList.add("is-invalid");

          }
          if (nombre!="" && contrasena==confirmarContrasena && correo!="" && document.getElementById('rbt_radio1').checked != false && document.getElementById('rbt_radio2').checked != true){
            document.getElementById('lbl_sucess').style.visibility="visible";
          
          }
          else {
            document.getElementById('lbl_sucess').style.visibility="hidden";
          }

}