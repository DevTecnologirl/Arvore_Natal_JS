document.addEventListener("DOMContentLoaded", () => {
    const tree = document.querySelector(".tree");
    const triangles = document.querySelectorAll('.triangle');

    for (let i = 0; i < 30; i++) {
        const light = document.createElement("div");
        light.classList.add("lights");
        light.style.left = `${Math.random() * 100 - 10}%`;
        light.style.top = `${Math.random() * 100}%`;
        light.style.animationDelay = `${Math.random() * 2}s`;
        tree.appendChild(light);
    }
    tree.addEventListener('click', () => {
        triangles.forEach(triangle => {
            const currentColor = getComputedStyle(triangle).borderBottomColor;
            triangle.style.borderBottomColor = currentColor === 'rgb(0, 128, 0)' ? 'darkgreen' : 'green';
        });
    });

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        document.body.appendChild(snowflake);
      
        setTimeout(() => {
          snowflake.remove();
        }, 5000);
      }

      setInterval(createSnowflake, 100);
})
// document.addEventListener("DOMContentLoaded", () => {
//     const tree = document.querySelector(".tree");
//     const lights = document.querySelectorAll(".light");

//     for (let i = 0; i < 30; i++) {
//         const light = document.createElement("div");
//         light.classList.add("lights");
//         light.style.left = `${Math.random() * 100 - 10}%`;
//         light.style.top = `${Math.random() * 100}%`;
//         light.style.animationDelay = `${Math.random() * 2}s`;
//         tree.appendChild(light);
//     }
// })