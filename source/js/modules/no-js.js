const noJsBlocks = document.querySelectorAll(".no-js");

const noJsOff = () => {
  noJsBlocks.forEach((block) => {
    block.classList.remove("no-js");
  })
}

export {noJsOff}