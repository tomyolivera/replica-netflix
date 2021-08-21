// Cargar imagenes más rapido
$('#principal-img').css("background-image", `linear-gradient(transparent 90%, var(--color-fondo) 100%), url(public/img/home/imagen_principal1.jpg)`); 
$('#principal-img').css("background-image", `linear-gradient(transparent 90%, var(--color-fondo) 100%), url(public/img/home/imagen_principal0.jpg)`); 

let i = 0;

setInterval(() => {
    $('#principal-img').css("background-image", `linear-gradient(transparent 90%, var(--color-fondo) 100%), url(public/img/home/imagen_principal${i}.jpg)`); 
    i++
    if(i == 2){
        i = 0;
    }
}, 6000);

let template = ``;

// Continuar Viendo

const continuar_viendo = [
    {
        nombre: 'inocente',
        progreso: 30,
    },
    {
        nombre: 'new_amsterdam',
        progreso: 13
    },
    {
        nombre: 'twd',
        progreso: 78
    },
    {
        nombre: 'breakingbad',
        progreso: 3
    }

]

continuar_viendo.forEach(element => { 
    template += `
        <div class="col-sm-6 col-xl-2 mb-2">
            <div class="w-100 d-flex justify-content-center">
                <a href="video.html">
                    <img class="img-home rounded" src="public/img/home/${element.nombre}.jpg" />
                </a>
            </div>

            <div class="px-5 py-2 progresos">
                <div class="progress bg-secondary" style="height: 3px;">
                    <div class="progress-bar" role="progressbar" style="width: ${element.progreso}%; background-color: #e50914;"></div>
                </div>
            </div>
        </div>
    `;
}); $("#seccion_continuar_viendo").html(template); template = "";

let user_nombre = localStorage.getItem('user_nombre');
user_nombre == null ? window.location = "users.html" : '';
$("#continuar_viendo_de_name").html(`Continuar viendo contenido de ${user_nombre}`)

// Dramas Tv
const dramas_tv = [ "vikingos", "suits", "viajeros", "twd", "new_amsterdam", "inocente" ]

dramas_tv.forEach(element => {
    template += `
    <div class="col-sm-6 col-xl-2 mb-2 d-flex justify-content-center">
        <a href="video.html">
            <img class="img-home rounded" src="public/img/home/${element}.jpg" />
        </a>
    </div>
    `;
}); $("#seccion_dramas_tv").html(template); template = "";



// Tendencias
const tendencias = [ "3por100", "blackmirror", "casadepapel", "haciaellago", "therain", "biohackers" ]

tendencias.forEach(element => {
    template += `
        <div class="col-sm-6 col-xl-2 mb-2 d-flex justify-content-center">
            <a href="video.html">
                <img class="img-home rounded" src="public/img/home/${element}.jpg" />
            </a>
        </div>
    `;
}); $("#seccion_tendencias").html(template); template = "";



// Verlo Nuevamente
const verlo_nuevamente = [ "blackmirror", "casadepapel", "simuladores", "therain", "biohackers", "haciaellago" ]

verlo_nuevamente.forEach(element => {
    template += `
        <div class="col-sm-6 col-xl-2 mb-2 d-flex justify-content-center">
            <a href="video.html">
                <img class="img-home rounded" src="public/img/home/${element}.jpg" />
            </a>
        </div>
    `;
}); $("#seccion_verlo_nuevamente").html(template); template = "";