"use strict";
async function obtenerUsuarios() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data;
    }
    catch (e) {
        console.log("error", e);
        return [];
    }
}
// Lo llamo asi nomas
obtenerUsuarios().then(users => {
    users.forEach(u => {
        console.log(u.name, u.email);
    });
});
