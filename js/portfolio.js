const allBTN = document.querySelector(".pilihan")
const allCard = document.querySelectorAll(".all");


allBTN.addEventListener("click", event => {
    const btn = event.target;
    const pilih = btn.parentElement;

    console.log(`${pilih.innerText.toLowerCase()} <<< Ini pilihan`);

    if (pilih.innerText.toLowerCase() === "all") {
        for (let i = 0; i < allCard.length; i++) {
            allCard[i].style.display = "flex";
        }
        return;
    }

    for (let i = 0; i < allCard.length; i++) {
        // console.log(allCard[i].classList[3]);

        if (allCard[i].classList[3] === pilih.innerText.toLowerCase()) {
            allCard[i].style.display = "flex";
        }
        if (allCard[i].classList[3] !== pilih.innerText.toLowerCase()) {
            allCard[i].style.display = "none";
        }

    }


}
);