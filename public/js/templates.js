let user_avatar_url = localStorage.getItem('user_avatar_url');
// user_avatar_url === null ? localStorage.setItem('user-img', 'public/img/users/user1.png') : user_avatar_url;

let header = `
<div class="py-5 z-100 fixed-top navbar-gradient"></div>
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top mb-5 py-3">
    <div class="container-fluid px-md-5 px-3">
        <a class="navbar-brand" href="index.html">
            <img src="public/img/netflix.png"/>
        </a>

        ${
            !window.location.href.endsWith("users.html") &&
            !window.location.href.endsWith("login.html") ?
        
        `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse ml-5">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link font-semibold" href="index.html">Inicio</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link font-semibold" href="#">Series</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link font-semibold" href="#">Películas</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link font-semibold" href="#">Novedades populares</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link font-semibold" href="#">Mi lista</a>
                </li>
            </ul>

            <div class="d-flex align-items-center">
                <i class="fas fa-search m-0 mx-3"></i>
                <i class="fas fa-gift m-0 mx-3"></i>
                <i class="fas fa-bell m-0 mx-3"></i>
                <a href="users.html" class="d-flex navbar-user">
                    <img src="public/img/users/${user_avatar_url}" class="rounded mx-3" width="34px" id="user-img"/>
                    <i class="fas fa-sort-down m-0 ml-1" id="user-sort-icon"></i>
                </a>
            </div>
        </div>` : ''
        }
        
    </div>
</nav>
`; $("#header").html(header);

$(".navbar-gradient").css("background-image", "linear-gradient(rgb(25, 25, 25) 4%, transparent 90%)");

$(window).scroll(() =>{
    if($(this).scrollTop() > 60){
        $(".navbar").removeClass("bg-transparent").addClass("navbar-color shadow-sm")
        $(".collapse").attr({id: "navbarSupportedContent"}).removeClass("d-none")
    }
    else{
        $(".navbar").removeClass("nav-color shadow-sm").addClass("bg-transparent")
        $(".collapse").attr({id: ""}).addClass("d-none");
    }
})

let state = "down";

$(".navbar-user").mouseover(() => {
    if(state == "down"){
        state = "up";
        $("#user-sort-icon").removeClass('fa-sort-down').addClass('fa-sort-up mt-2');
    }
    else{
        state = "down";
        $("#user-sort-icon").removeClass('fa-sort-up mt-2').addClass('fa-sort-down');
    }
});

const loading = `
<div id="loading" class="text-gray-600 z-50 h-full w-full fixed flex justify-center bg-black">
    <div class="flex m-auto spinner-border" role="status">
        <span class="visually-hidden"></span>
    </div>
</div>
`; $("#load").html(loading);

const footer = `
<div class="footer_login py-4 text-center">
    <div class="container">
        <div class="row">
            <div class="col-3 text-center">
                <p>¿Preguntas? Llama al <a href="#">0-800-666-2803</a></p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-6 col-md-3">
                <a href="#">Preguntas frecuentes</a>
            </div>
            
            <div class="col-sm-6 col-md-3">
                <a href="#">Centro de ayuda</a>
            </div>

            <div class="col-sm-6 col-md-3">
                <a href="#">Términos de uso</a>
            </div>

            <div class="col-sm-6 col-md-3">
                <a href="#">Privacidad</a>
            </div>
        </div>
        
        <div class="row mt-3">
            <div class="col-sm-6 col-md-3">
                <a href="#">Preferencias de cookies</a>
            </div>
            
            <div class="col-sm-6 col-md-3">
                <a href="#">Información corporativa</a>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-3">
                <select name="idioma" class="p-2 bg-black text-light border-1 border-secondary">
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                </select>
            </div>
        </div>
    </div>
</div>
`; $("#footer_page").html(footer);