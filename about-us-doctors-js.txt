
// section 5

function newsCard(number) {

    var viewBtn = document.getElementById("viewBtn" + number);
    var viewCount = document.getElementById("viewCount" + number);
    var likeBtn = document.getElementById("likeBtn" + number);
    var likeCount = document.getElementById("likeCount" + number);

    if (viewBtn && viewCount) {
        viewBtn.addEventListener("click", function () {
            var currentViews = Number(viewCount.textContent);
            currentViews++;
            viewCount.textContent = currentViews;
        });
    }

    if (likeBtn && likeCount) {
        likeBtn.addEventListener("click", function () {
            var currentLikes = Number(likeCount.textContent);
            currentLikes++;
            likeCount.textContent = currentLikes;
            likeBtn.classList.remove("fa-regular");
            likeBtn.classList.add("fa-solid");
        });
    }
}

newsCard(1);
newsCard(2);
newsCard(3);
newsCard(4);
