let users = [
    {
        nombre: 'Eze',
        avatar_url: 'user1.png',
    },
    {
        nombre: 'Binker',
        avatar_url: 'user2.png',
    },
    {
        nombre: 'Ort',
        avatar_url: 'user1.png',
    },
    {
        nombre: 'Almagro',
        avatar_url: 'user2.png',
    },
];

let template = '';

users.forEach(user => {
    template += `
    <div onclick="setUser('${ user.nombre }', '${ user.avatar_url }')" class="col d-flex justify-content-center user-img">
        <a href="index.html" class="user text-center cursor-pointer text-gray-600 hover:text-white">
            <img src="public/img/users/${ user.avatar_url }" id="img">
            <p class="mt-3 font-semibold users-username">${user.nombre}</p>
        </a>
    </div>
    `;
}); $("#users-img-container").html(template);

function setUser(nombre, avatar_url){
    localStorage.setItem('user_nombre', nombre);
    localStorage.setItem('user_avatar_url', avatar_url);
}