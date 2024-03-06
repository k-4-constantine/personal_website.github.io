document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.querySelector(".image-container");
    var scrollAmount = 2; // 每次滚动的像素量

    function scrollImages() {
        imageContainer.scrollLeft += scrollAmount;
    }

    var scrollInterval = setInterval(scrollImages, 50); // 50毫秒滚动一次

    imageContainer.addEventListener("mouseover", function() {
        clearInterval(scrollInterval); // 鼠标悬停时停止滚动
    });

    imageContainer.addEventListener("mouseout", function() {
        scrollInterval = setInterval(scrollImages, 50); // 鼠标移出时恢复滚动
    });
});
