const basePath = 'http://localhost:8080/api';

function handleError(error) {
    console.warn(error);
    return null;
}

export async function getAlbumCollections() {
    const response = await fetch(`${basePath}/musics`)
        .catch(handleError);
    
    const collections = await response.json();
    return collections;
}

export async function getUsers() {
    const response = await fetch(`${basePath}/users`)
        .catch(handleError);
    
    const users = await response.json();
    return users;
}

export async function postUser(username, email) {

    const response = await fetch(`${basePath}/users`, { 
        method: 'POST', 
        body: JSON.stringify({ username, email }), 
        headers: {'Content-Type': 'application/json'}
      }).catch(handleError);

    return response;

}

export async function getUserFavorites(id) {
    const response = await fetch(`${basePath}/users/${id}/musics`)
        .catch(handleError);
    
    const userfavorites = await response.json();
    return userfavorites;
}

export async function postFavorite(id, musicid) {
    const response = await fetch(`${basePath}/users/${id}/musics`, { 
        method: 'POST', 
        body: JSON.stringify({ musicid }), 
        headers: {'Content-Type': 'application/json'}
      }).catch(handleError);

    return response;

}


export async function deleteFavorite(id, musicid) {

    const response = await fetch(`http://localhost:8080/api/users/${id}/musics/${musicid}`, { 
        method: 'DELETE', 
      }).catch(handleError);

    
    return response;

}

