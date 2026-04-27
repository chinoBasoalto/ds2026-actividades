interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: Usuario[] = await res.json();
        return data;
    } catch (e) {
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