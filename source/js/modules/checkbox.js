const formCheckbox = document.getElementById("form-checkbox");
const popupCheckbox = document.getElementById("popup-checkbox");
const accessCheckbox = document.getElementById("access-checkbox");
const popupAccessCheckbox = document.getElementById("popup-access-checkbox");

const addCheckboxEvt = () => {
  formCheckbox.addEventListener("click", () => {
    accessCheckbox.click();
  })

  popupCheckbox.addEventListener("click", () => {
    popupAccessCheckbox.click();
  })
}

export {addCheckboxEvt};