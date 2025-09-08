document.addEventListener('DOMContentLoaded', function () {
    const mainPhoto = document.getElementById("main-photo");
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupClose = document.getElementById("popup-close");

    // Открыть popup по клику на главное фото
    mainPhoto.addEventListener("click", () => {
        popupImage.src = mainPhoto.src;
        popup.style.display = "flex";
        document.body.style.overflow = "hidden"; // запрет прокрутки страницы
    });

    // Закрыть popup по клику на крестик
    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Закрыть popup по клику вне картинки
    popup.addEventListener("click", e => {
        if (e.target === popup) {
            popup.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Замена главного фото по клику на доп. фото
    const additionalPhotos = document.querySelectorAll(".additional-photo");
    additionalPhotos.forEach(photo => {
        photo.addEventListener("click", () => {
            mainPhoto.src = photo.src;
        });
    });
});
