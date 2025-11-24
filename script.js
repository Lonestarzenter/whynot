document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Matrix Effect
    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    const columns = Math.floor(width / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * height;
    }

    function draw() {
        // Fade out
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);

        // Metallic silver/white gradient colors
        const silverColors = ['#E8E8E8', '#C0C0C0', '#D3D3D3', '#F5F5F5', '#FFFFFF'];
        ctx.font = '12px monospace';

        for (let i = 0; i < drops.length; i++) {
            // Numbers and star symbols
            const chars = '0123456789★✦✧✨';
            const char = chars[Math.floor(Math.random() * chars.length)];

            const x = i * 20;
            const y = drops[i] * 20;

            // Random silver color for metallic effect
            ctx.fillStyle = silverColors[Math.floor(Math.random() * silverColors.length)];
            ctx.globalAlpha = Math.random() * 0.5 + 0.5;
            ctx.fillText(char, x, y);

            if (y > height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }

        requestAnimationFrame(draw);
    }

    draw();
});
