// Função para abrir o modal e exibir a imagem clicada
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
