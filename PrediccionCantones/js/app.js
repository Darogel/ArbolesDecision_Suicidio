$('#formulario').on('submit',function(e){   
   /* var valores = new FormData(formulario);
    alert('Sexo '+valores.get('sexo') + ' Edad '+ valores.get('edad')+ ' Estado Civil '+  valores.get('estadoCivil')
    + ' Instrucción '+ valores.get('instruccion') + '  Etnia '+ valores.get('etnia')
    + ' Lugar_fall '+ valores.get('lugar_fall') +  ' Prov_fall '+ valores.get('prov_fall')
    + ' area '+ valores.get('area'));*/
    var respuesta = document.getElementById('respuesta');
    var boton = document.getElementById('boton');

    e.preventDefault();
  
    var sexo = $('#sexo').val();
    var edad = $('#edad').val();
    var est_civ = $('#estadoCivil').val();
    var niv_inst = $('#instruccion').val();
    var p_etnica = $('#etnia').val();
    var lugar_fall = $('#lugar_fall').val();
    var prov_fall = $('#prov_fall').val();
    var area_fall = $('#area').val();

    if(sexo === '' || edad == 0  || est_civ === '' || niv_inst === '' || p_etnica === '' || lugar_fall === '' ||
      prov_fall === '' || area_fall === '' ){
      alert('Datos inclompletos! por favor ingrese sus datos');
    }else{
        var datos = {
          data: [{ 
            sexo: sexo,
            edad: edad,
            est_civ: est_civ,
            niv_inst: niv_inst,
            p_etnica: p_etnica,
            lugar_fall: lugar_fall,
            prov_fall: prov_fall,
            area_fall: area_fall 
          }]
        };
      
      
        var destino = "https://go.rapidminer.com/am/api/deployments/2dceeafe-7220-44ce-8290-934850c048b7";
      
        var url = "https://go.rapidminer.com/am/api/deployments/2dceeafe-7220-44ce-8290-934850c048b7";
        
        $.ajax({
            type: "POST",
            data: JSON.stringify(datos),
            url: url,
            contentType: "application/json"
        }).done(function(res) {     
          $.each(res.data, function(index,value){
            $.each(value, function (index, data) {
              if (index == "prediction(cant_res)") {
                var canton = Math.floor(data);
                alert(canton)
                // Transformar Valor del modelo en Texto
                if(canton > 100 && canton < 116){
                  if(canton == 101){
                    canton = "Cuenca"
                  }else if(canton == 102){
                    canton = "Girón"
                  }else if(canton == 103){
                    canton = "Gualaceo"
                  }else if(canton == 104){
                    canton = "Nabón"
                  }else if(canton == 105){
                    canton = "Paute"
                  }else if(canton == 106){
                    canton = "Pucará"
                  }else if(canton == 107){
                    canton = "San_Fernando"
                  }else if(canton == 108){
                    canton = "Santa_Isabel"
                  }else if(canton == 109){
                    canton = "Sigsig"
                  }else if(canton == 110){
                    canton = "Oña"
                  }else if(canton == 111){
                    canton = "Chordeleg"
                  }else if(canton == 112){
                    canton = "El_Pan"
                  }else if(canton == 113){
                    canton = "Sevilla_de_Oro"
                  }else if(canton == 114){
                    canton = "Guachapala"
                  }else if(canton == 115){
                    canton = "Camilo_Ponce_Enríquez"
                  }
                  
                }else if(canton < 200){
                  canton = "Guaranda";
                }
                if(canton > 200 && canton < 208){
                  if(canton == 201){
                    canton = "Guaranda"
                  }else if(canton == 202){
                    canton = "Chillanes"
                  }else if(canton == 203){
                    canton = "Chimbo"
                  }else if(canton == 204){
                    canton = "Echeandia"
                  }else if(canton == 205){
                    canton = "San_Miguel"
                  }else if(canton == 206){
                    canton = "Caluma"
                  }else if(canton == 207){
                    canton = "Las_Naves"
                  }
                  
                }else if(canton < 300){
                  canton = "Azogues";
                }
                 if(canton > 300 && canton < 308){
                  if(canton == 301){
                    canton = "Azogues"
                  }else if(canton == 302){
                    canton = "Biblian"
                  }else if(canton == 303){
                    canton = "Cañar"
                  }else if(canton == 304){
                    canton = "La_Troncal"
                  }else if(canton == 305){
                    canton = "El_Tambo"
                  }else if(canton == 306){
                    canton = "Deleg"
                  }else if(canton == 307){
                    canton = "Suscal"
                  }
                }else if(canton < 400){
                  canton = "Tulcán";
                }
                if(canton > 400 && canton < 407){
                  if(canton == 401){
                    canton = "Tulcán"
                  }else if(canton == 402){
                    canton = "Bolívar"
                  }else if(canton == 403){
                    canton = "Espejo"
                  }else if(canton == 404){
                    canton = "Mira"
                  }else if(canton == 405){
                    canton = "Montúfar"
                  }else if(canton == 406){
                    canton = "San_Pedro_de_Huaca"
                  }
                }else if(canton < 500){
                  canton = "Latacunga";
                }
                if(canton > 500 && canton < 508){
                  if(canton == 501){
                    canton = "Latacunga"
                  }else if(canton == 502){
                    canton = "La Maná"
                  }else if(canton == 503){
                    canton = "Pangua"
                  }else if(canton == 504){
                    canton = "Pujilí"
                  }else if(canton == 505){
                    canton = "Salcedo"
                  }else if(canton == 506){
                    canton = "Saquisilí"
                  }else if(canton == 507){
                    canton = "Sigchos"
                  }
                }else if(canton < 600){
                  canton = "Riobamba";
                }
                if(canton > 600 && canton < 611){
                  if(canton == 601){
                    canton = "Riobamba"
                  }else if(canton == 602){
                    canton = "Alausí"
                  }else if(canton == 603){
                    canton = "Colta"
                  }else if(canton == 604){
                    canton = "Chambo"
                  }else if(canton == 605){
                    canton = "Chunchi"
                  }else if(canton == 606){
                    canton = "Guamote"
                  }else if(canton == 607){
                    canton = "Guano"
                  }else if(canton == 608){
                    canton = "Pallatanga"
                  }else if(canton == 609){
                    canton = "Penípe"
                  }else if(canton == 610){
                    canton = "Cumandá"
                  }
                }else if(canton < 700){
                  canton = "Machala";
                }
                if(canton > 700 && canton < 715){
                  if(canton == 701){
                    canton = "Machala"
                  }else if(canton == 702){
                    canton = "Arenillas"
                  }else if(canton == 703){
                    canton = "Atahualpa"
                  }else if(canton == 704){
                    canton = "Balsas"
                  }else if(canton == 705){
                    canton = "Chilla"
                  }else if(canton == 706){
                    canton = "El Guabo"
                  }else if(canton == 707){
                    canton = "Huaquillas"
                  }else if(canton == 708){
                    canton = "Marcabelí"
                  }else if(canton == 709){
                    canton = "Pasaje"
                  }else if(canton == 710){
                    canton = "Piñas"
                  }else if(canton == 711){
                    canton = "Portovelo"
                  }else if(canton == 712){
                    canton = "Santa_Rosa"
                  }else if(canton == 713){
                    canton = "Zaruma"
                  }else if(canton == 714){
                    canton = "Las_Lajas"
                  }
                }else if(canton < 800){
                  canton = "Esmeraldas";
                }
                if(canton > 800 && canton < 807){
                  if(canton == 801){
                    canton = "Esmeraldas"
                  }else if(canton == 802){
                    canton = "Eloy_Alfaro"
                  }else if(canton == 803){
                    canton = "Muisne"
                  }else if(canton == 804){
                    canton = "Quininde"
                  }else if(canton == 805){
                    canton = "San_Lorenzo"
                  }else if(canton == 806){
                    canton = "Atacames"
                  }
                }else if(canton < 900){
                  canton = "Guayaquil";
                }
                if(canton > 900 && canton < 929){
                  if(canton == 901){
                    canton = "Guayaquil"
                  }else if(canton == 902){
                    canton = "Alfredo_Baquerizo_Moreno"
                  }else if(canton == 903){
                    canton = "Balao"
                  }else if(canton == 904){
                    canton = "Balzar"
                  }else if(canton == 905){
                    canton = "Colines"
                  }else if(canton == 906){
                    canton = "Daule"
                  }else if(canton == 907){
                    canton = "Durán"
                  }else if(canton == 908){
                    canton = "Empalme"
                  }else if(canton == 909){
                    canton = "El_Triunfo"
                  }else if(canton == 910){
                    canton = "Milagro"
                  }else if(canton == 911){
                    canton = "Naranjal"
                  }else if(canton == 912){
                    canton = "Naranjito"
                  }else if(canton == 913){
                    canton = "Palestina"
                  }else if(canton == 914){
                    canton = "Pedro_Carbo"
                  }else if(canton == 916){
                    canton = "Samborondón"
                  }else if(canton == 918){
                    canton = "Santa_Lucia"
                  }else if(canton == 919){
                    canton = "Salitre"
                  }else if(canton == 920){
                    canton = "San_Jacinto_de_Yaguachi"
                  }else if(canton == 921){
                    canton = "Playas"
                  }else if(canton == 922){
                    canton = "Simón_Bolívar"
                  }else if(canton == 923){
                    canton = "Crnel._Marcelino_Maridueña"
                  }else if(canton == 924){
                    canton = "Lomas_de_Sargentillo"
                  }else if(canton == 925){
                    canton = "Nobol"
                  }else if(canton == 927){
                    canton = "Gnral._Antonio_Elizalde"
                  }else if(canton == 928){
                    canton = "Isidro_Ayora"
                  }
                }else if(canton < 1000){
                  canton = "Ibarra";
                }
                if(canton > 1000 && canton < 1117){
                  if(canton == 1001){
                    canton = "Loja"
                  }else if(canton == 1102){
                    canton = "Calvas"
                  }else if(canton == 1103){
                    canton = "Catamayo"
                  }else if(canton == 1104){
                    canton = "Célica"
                  }else if(canton == 1105){
                    canton = "Chaguarpamba"
                  }else if(canton == 1106){
                    canton = "Espíndola"
                  }else if(canton == 1107){
                    canton = "Gonzanamá"
                  }else if(canton == 1108){
                    canton = "Macará"
                  }else if(canton == 1109){
                    canton = "Paltas"
                  }else if(canton == 1110){
                    canton = "Puyango"
                  }else if(canton == 1111){
                    canton = "Saraguro"
                  }else if(canton == 1112){
                    canton = "Sozoranga"
                  }else if(canton == 1113){
                    canton = "Zapotillo"
                  }else if(canton == 1114){
                    canton = "Pindal"
                  }else if(canton == 1115){
                    canton = "Quilanga"
                  }else if(canton == 1116){
                    canton = "Olmedo"
                  }
                }else if(canton < 1200){
                  canton = "Babahoyo";
                }
                if(canton > 1200 && canton < 1214){
                  if(canton == 1201){
                    canton = "Babahoyo"
                  }else if(canton == 1202){
                    canton = "Baba"
                  }else if(canton == 1203){
                    canton = "Montalvo"
                  }else if(canton == 1204){
                    canton = "Puebloviejo"
                  }else if(canton == 1205){
                    canton = "Quevedo"
                  }else if(canton == 1206){
                    canton = "Urdaneta"
                  }else if(canton == 1207){
                    canton = "Ventanas"
                  }else if(canton == 1208){
                    canton = "Vinces"
                  }else if(canton == 1209){
                    canton = "Palenque"
                  }else if(canton == 1210){
                    canton = "Buena_Fé"
                  }else if(canton == 1211){
                    canton = "Valencia"
                  }else if(canton == 1212){
                    canton = "Mocache"
                  }else if(canton == 1213){
                    canton = "Quinsolama"
                  }
                }else if(canton < 1300){
                  canton = "Portoviejo";
                }
                if(canton > 1300 && canton < 1323){
                  if(canton == 1301){
                    canton = "Portoviejo"
                  }else if(canton == 1302){
                    canton = "Bolívar"
                  }else if(canton == 1303){
                    canton = "Chone"
                  }else if(canton == 1304){
                    canton = "El_Carmen"
                  }else if(canton == 1305){
                    canton = "Flavio_Alfaro"
                  }else if(canton == 1306){
                    canton = "Jipijapa"
                  }else if(canton == 1307){
                    canton = "Junín"
                  }else if(canton == 1308){
                    canton = "Manta"
                  }else if(canton == 1309){
                    canton = "Montecristi"
                  }else if(canton == 1310){
                    canton = "Paján"
                  }else if(canton == 1311){
                    canton = "Pichincha"
                  }else if(canton == 1312){
                    canton = "Rocafuerte"
                  }else if(canton == 1313){
                    canton = "Santa_Ana"
                  }else if(canton == 1314){
                    canton = "Sucre"
                  }else if(canton == 1315){
                    canton = "Tosagua"
                  }else if(canton == 1316){
                    canton = "24_de_mayo"
                  }else if(canton == 1317){
                    canton = "Pedernales"
                  }else if(canton == 1318){
                    canton = "Olmedo"
                  }else if(canton == 1319){
                    canton = "Puerto_López"
                  }else if(canton == 1320){
                    canton = "Jama"
                  }else if(canton == 1321){
                    canton = "Jaramijó"
                  }else if(canton == 1322){
                    canton = "San_Vicente"
                  }

                }else if(canton < 1400){
                  canton = "Portoviejo";
                }
                if(canton > 1400 && canton < 1413){
                  if(canton == 1401){
                    canton = "Morona"
                  }else if(canton == 1402){
                    canton = "Gualaquiza"
                  }else if(canton == 1403){
                    canton = "Limón_Indanza"
                  }else if(canton == 1404){
                    canton = "Palora"
                  }else if(canton == 1405){
                    canton = "Santiago"
                  }else if(canton == 1406){
                    canton = "Sucúa"
                  }else if(canton == 1407){
                    canton = "Huamboya"
                  }else if(canton == 1408){
                    canton = "San_Juan_Bosco"
                  }else if(canton == 1409){
                    canton = "Taisha"
                  }else if(canton == 1410){
                    canton = "Logroño"
                  }else if(canton == 1411){
                    canton = "Pablo_Sexto"
                  }else if(canton == 1412){
                    canton = "Tiwinza"
                  }
                }else if(canton < 1500){
                  canton = "Tena";
                }
                if(canton > 1500 && canton < 1510){
                  if(canton == 1501){
                    canton = "Tena"
                  }else if(canton == 1503){
                    canton = "Archidona"
                  }else if(canton == 1504){
                    canton = "El_Chaco"
                  }else if(canton == 1507){
                    canton = "Quijos"
                  }else if(canton == 1509){
                    canton = "Carlos_Julio_Arrosemena_Tola"
                  }
                }else if(canton < 1600){
                  canton = "Pastaza";
                }
                if(canton > 1600 && canton < 1605){
                  if(canton == 1601){
                    canton = "Pastaza"
                  }else if(canton == 1602){
                    canton = "Mera"
                  }else if(canton == 1603){
                    canton = "Santa_Clara"
                  }else if(canton == 1604){
                    canton = "Arajuno"
                  }
                }else if(canton < 1700){
                  canton = "Pastaza";
                }
                if(canton > 1700 && canton < 1710){
                  if(canton == 1701){
                    canton = "Quito"
                  }else if(canton == 1702){
                    canton = "Cayambe"
                  }else if(canton == 1703){
                    canton = "Mejía"
                  }else if(canton == 1704){
                    canton = "Pedro_Mocayo"
                  }else if(canton == 1705){
                    canton = "Rumiñahui"
                  }else if(canton == 1707){
                    canton = "San_Miguel_de_los_Bancos"
                  }else if(canton == 1708){
                    canton = "Pedro_Vicente_Maldonado"
                  }else if(canton == 1709){
                    canton = "Puerto_Quito"
                  }
                }else if(canton < 1800){
                  canton = "Ambato";
                }
                if(canton > 1800 && canton < 1810){
                  if(canton == 1801){
                    canton = "Ambato"
                  }else if(canton == 1802){
                    canton = "Baños_de_Agua_Santa"
                  }else if(canton == 1803){
                    canton = "Cevallos"
                  }else if(canton == 1804){
                    canton = "Mocha"
                  }else if(canton == 1805){
                    canton = "Patate"
                  }else if(canton == 1806){
                    canton = "Quero"
                  }else if(canton == 1807){
                    canton = "San_Pedro_de_Pelileo"
                  }else if(canton == 1808){
                    canton = "Santiago_de_Pillaro "
                  }else if(canton == 1809){
                    canton = "Tisaleo"
                  }
                }else if(canton < 1900){
                  canton = "Zamora";
                }
                if(canton > 1900 && canton < 1910){
                  if(canton == 1901){
                    canton = "Zamora"
                  }else if(canton == 1902){
                    canton = "Chinchipe"
                  }else if(canton == 1903){
                    canton = "Nangaritza"
                  }else if(canton == 1904){
                    canton = "Yacuambi"
                  }else if(canton == 1905){
                    canton = "Yantzaza"
                  }else if(canton == 1906){
                    canton = "El_Pangui"
                  }else if(canton == 1907){
                    canton = "Centinela_del_Cóndor"
                  }else if(canton == 1908){
                    canton = "Palanda "
                  }else if(canton == 1909){
                    canton = "Paquisha"
                  }
                }else if(canton < 2000){
                  canton = "San_Cristobal";
                }
                if(canton > 2000 && canton < 2004){
                  if(canton == 2001){
                    canton = "San_Cristobal"
                  }else if(canton == 2002){
                    canton = "Isabela"
                  }else if(canton == 2003){
                    canton = "Santa_Cruz"
                  }
                }else if(canton < 2100){
                  canton = "Lago_Agrio";
                }
                if(canton > 2100 && canton < 2108){
                  if(canton == 2101){
                    canton = "Lago_Agrio"
                  }else if(canton == 2102){
                    canton = "Gonzalo_Pizarro"
                  }else if(canton == 2103){
                    canton = "Putumayo"
                  }else if(canton == 2104){
                    canton = "Shushufinfi"
                  }else if(canton == 2105){
                    canton = "Sucumbios"
                  }else if(canton == 2106){
                    canton = "Cascales"
                  }else if(canton == 2107){
                    canton = "Cuyabeno"
                  }
                }else if(canton < 2200){
                  canton = "Orellana";
                }
                if(canton > 2200 && canton < 2205){
                  if(canton == 2201){
                    canton = "Orellana"
                  }else if(canton == 2202){
                    canton = "Aguarico"
                  }else if(canton == 2203){
                    canton = "La_Joya_de_los_Sachas"
                  }else if(canton == 2204){
                    canton = "Loreto"
                  }
                }else if(canton < 2300){
                  canton = "Santo_Domingo";
                }
                if(canton > 2300 && canton < 2302){
                  if(canton == 2301){
                    canton = "Santo_Domingo"
                  }
                }else if(canton < 2400){
                  canton = "Santa_Elena";
                }
                if(canton > 2400 && canton < 2404){
                  if(canton == 2401){
                    canton = "Santa_Elena"
                  }else if(canton < 2402){
                    canton = "La_Libertad";
                  }else if(canton < 2403){
                    canton = "Salinas";
                  }
                }
                respuesta.innerHTML = `<div class="input-group">
                <span class="label label-success" id="algoritmo">ARBOLES DE DECISIÓN</span>
                <input class="input--style-5"  id="prov" disabled="disabled"  value=${canton}>
                <label class="label--desc">Predicción Cantón Residencia</label>
                <br><br><br>
                <span class="label label-success" id="OP">Las Datos ingresados representan a este canton como a tomar en consideración de un posible incremento de casos de suicidio</span>
                <br><br><br>
                <button class="btn btn--radius-2 btn--green" onclick="location.reload()">Reestablecer</button>
                </div>`
                /* boton.innerHTML = `<div class="input-group">
                 <button class="btn btn--radius-2 btn--green" onclick="location.reload()">Reestablecer</button></div>`*/
              }
              
            })
          });  
            
            
        });
    }
  
    
  
  
    
});