const menubtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menubtn.addEventListener("click", () => {

    menubtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
