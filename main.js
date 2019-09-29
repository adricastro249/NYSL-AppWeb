$(document).ready(function () {

    $('#bodyHome a, .footer-nav a').click(function (pepito) { // Agregamos el evento que detecta el touch.
        // Con prvent, le digo que no actue de manera defualt, que es siguiendo el link, sino que haga otra cosa.
        pepito.preventDefault();
        let proximoLink = pepito.target.hash;

        if (typeof proximoLink == "undefined") {
            proximoLink = $(pepito.target).parent()[0].hash
            console.log('elemento: proximoLink', proximoLink)
        }
        // Tomo la section que se muestra actualmente y le digo que se oculte, o sea, le saco la clase ".mostrar"
        $('#general .mostrar').removeClass('mostrar');
        //Tomo el id que previemente guardamos en proximoLink, y le agrego la clase ".mostrar";
        $(proximoLink).addClass('mostrar');
        $(' #footer ').addClass('footer-activo');
    })

    $('.logoPags').click(function (evento) {
        evento.preventDefault();
        console.log(evento.target.offsetParent.hash);
        let proximaSection = evento.target.offsetParent.hash;
        console.log(proximaSection);
        $('#general .mostrar').removeClass('mostrar');
        $(proximaSection).addClass('mostrar');
        $(' #bodyHome ').addClass('mostrar');
        $(' #footer ').addClass('ocultar');


    })


    mostrarSedes();
    mostrarEquipos();
       

    
})

function mostrarSedes() {
    info.locations.forEach(pepito => {
        $('#sedes').append(`
          <button class="btn botones botonesEstadio" type="button" data-toggle="collapse"
              data-target="#${pepito.id}" aria-expanded="false" aria-controls="collapseOne">
              <span>${pepito.name}</span>
          </button>
          <div id="${pepito.id}" class="collapse" data-parent="#accordionLugar">
              <div class="card-body embed-responsive embed-responsive-16by9">
              <iframe src="${pepito.map}"></iframes>          
  </div>
            <br>  
<h6>${pepito.address}</h6>
          
     `)
    })
}

function mostrarEquipos() {
    info.teams.forEach(pepito => {
        $('#equipos').append(`
        <button id="${pepito.team_id}" class="btn botones botonesEquipos" data-toggle="modal" data-target="#m${pepito.team_id}">
            <span>${pepito.team_name}</span>
            <img class="iconos" src="${pepito.team_logo_img}" alt="${pepito.team_name}">
        </button>
        <div class="modal fade" id="m${pepito.team_id}">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div>
                        <h4 class="modal-title">${pepito.team_name}</h4>
                    </div>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div>   
   <img class="iconosGrandes" src="${pepito.team_logo_img}" alt="${pepito.team_name}">
                    <h6>Puntuación: ${pepito.points}</h6>      
            <h6>Posición:  ${pepito.team_position}</h6>
                   <h6>Diferencia de goles:  ${pepito.goal_difference}</h6>
                 <h6>Jugados:  ${pepito.matches_played}</h6>
                 <h6>Ganados:  ${pepito.wins}</h6>
                   <h6>Empatados: ${pepito.draws}</h6>
                    <h6>Perdidos: ${pepito.loses}</h6>
                    </div>
             </div>
         </div>
     </div>
</div>
        `)
    })
}
