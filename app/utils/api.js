function handleError(error) {
    console.warn(error);
    return null;
}

export async function getAlbumCollections() {
    const response = await fetch(`http://localhost:8080/api/musics`)
        .catch(handleError);
    
    const collections = await response.json();
    return collections;
}