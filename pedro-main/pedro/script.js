// Função para aumentar o tamanho da fonte
document.getElementById('Aumentar-fonte').addEventListener('click', function () {
    changeFontSize('increase');
});

// Função para diminuir o tamanho da fonte
document.getElementById('diminuir-fonte').addEventListener('click', function () {
    changeFontSize('decrease');
});

// Função para ajustar o tamanho da fonte globalmente
function changeFontSize(action) {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    
    // Se o botão pressionado for 'increase', aumentamos o tamanho
    if (action === 'increase') {
        document.body.style.fontSize = (currentSize * 1.1) + 'px';
    } 
    // Se o botão pressionado for 'decrease', diminuímos o tamanho
    else if (action === 'decrease') {
        document.body.style.fontSize = (currentSize / 1.1) + 'px';
    }
}
