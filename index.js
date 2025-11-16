function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Các icon hoa đẹp
    const icons = ["🌸", "🌺", "🌷", "💮", "🌼"];
    flower.innerText = icons[Math.floor(Math.random() * icons.length)];

    // Vị trí rơi ngẫu nhiên
    flower.style.left = Math.random() * 100 + "vw";

    // Thời gian rơi ngẫu nhiên
    flower.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(flower);

    // Xóa hoa sau khi rơi xong
    setTimeout(() => {
        flower.remove();
    }, 7000);
}

// Tạo hoa mỗi 300–500ms
setInterval(createFlower, 350);
