const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        const fizzBuzz = `<div class="fizz-buzz">Fizz-Buzz</div>`;
        container.innerHTML += fizzBuzz;
    } else if (i % 5 === 0) {
        const buzz = `<div class="buzz">Buzz</div>`;
        container.innerHTML += buzz;
    } else if (i % 3 === 0) {
        const fizz = `<div class="fizz">Fizz</div>`;
        container.innerHTML += fizz;
    } else {
    const square = document.createElement("div");
    square.classList.add("myCSS");
    square.append(i);
    container.append(square);
    }
}
