// íconos para generar las estrellas

function excellentGame() {
    let star = '';

    for (let i = 0; i < 5; i++) {
        star += '<i class="fa-solid fa-star"></i>';
    }

    return star;
}

function goodGame() {
    let star = '';

    for (let i = 0; i < 4; i++) {
        star += '<i class="fa-solid fa-star"></i>';
    }

    return star;
}

function voidStar() {
    let star = '';

    for (let i = 0; i < 1; i++) {
        star += '<i class="fa-regular fa-star"></i>';
    }

    return star;
}
