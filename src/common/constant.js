export const getImgUrl =(url) => {
    let id = url.split('/').filter(Boolean);
    return imgUrl(id[[id.length - 1]]);
}

export const imgUrl = (id) =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
