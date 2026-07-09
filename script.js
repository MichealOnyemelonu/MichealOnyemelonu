// Typewriter effect for the hero terminal.
// Falls back instantly for prefers-reduced-motion or if run without a DOM.

const HERO_LINES = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Micheal Onyemelonu" },
  { type: "cmd", text: "cat role.txt" },
  { type: "out", text: "Software · DevOps · Cloud & Security Engineer" },
  { type: "cmd", text: "status --check" },
  { type: "ok",  text: "200 OK — open to new opportunities" },
];

function renderStaticLines(container) {
  container.innerHTML = "";
  HERO_LINES.forEach((line) => {
    const p = document.createElement("p");
    if (line.type === "cmd") {
      p.className = "line";
      p.innerHTML = `<span class="prompt">$</span> ${line.text}`;
    } else if (line.type === "ok") {
      p.className = "out ok";
      p.innerHTML = `<span class="pulse"></span>${line.text}`;
    } else {
      p.className = "out";
      p.textContent = line.text;
    }
    container.appendChild(p);
  });
}

function typeLine(container, line, onDone) {
  const p = document.createElement("p");
  container.appendChild(p);

  if (line.type === "cmd") {
    p.className = "line";
    const prompt = document.createElement("span");
    prompt.className = "prompt";
    prompt.textContent = "$";
    p.appendChild(prompt);
    p.appendChild(document.createTextNode(" "));
  } else if (line.type === "ok") {
    p.className = "out ok";
    const pulse = document.createElement("span");
    pulse.className = "pulse";
    p.appendChild(pulse);
  } else {
    p.className = "out";
  }

  let i = 0;
  const speed = line.type === "cmd" ? 45 : 12;
  const textNode = document.createTextNode("");
  p.appendChild(textNode);

  function step() {
    if (i < line.text.length) {
      textNode.textContent += line.text[i];
      i++;
      setTimeout(step, speed);
    } else {
      setTimeout(onDone, line.type === "cmd" ? 200 : 350);
    }
  }
  step();
}

function typeAll(container, lines, index, done) {
  if (index >= lines.length) {
    const cursorLine = document.createElement("p");
    cursorLine.className = "line cursor";
    cursorLine.innerHTML = `<span class="prompt">$</span> <span class="caret">▍</span>`;
    container.appendChild(cursorLine);
    if (done) done();
    return;
  }
  typeLine(container, lines[index], () => typeAll(container, lines, index + 1, done));
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("terminal-body");
  if (!container) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    renderStaticLines(container);
    return;
  }

  container.innerHTML = "";
  typeAll(container, HERO_LINES, 0);
});