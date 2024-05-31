window.addEventListener('load', function () {
    // canvas setup
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;      
    // animation loop
    const game = new Game(canvas.width, canvas.height);
    
    let lastTime = 0;

    function animate(currentTime) {   // В currentTime будет записан момент времени следующего вызова функции animate()
        const deltaTime = currentTime - lastTime; // Разница, в миллисекундах, между итерациями анимационного цикла
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем игровое поле перед следующей анимацией
        game.draw(ctx);
        game.update(deltaTime); // Теперь обновление игры будет зависеть от частоты смены кадров
        lastTime = currentTime; // Переприсваивание временных позиций
        requestAnimationFrame(animate);
    }

    animate(0);
})


