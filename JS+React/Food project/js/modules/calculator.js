function calculator() {
  const result = document.querySelector(".calculating__result span");
  let sex = localStorage.getItem("sex") || "female",
    ratio = localStorage.getItem("ratio") || 1.375,
    height,
    weight,
    age;

  function initLocalSettings(selector, activeClass) {
    const element = document.querySelectorAll(selector);

    element.forEach((element) => {
      element.classList.remove(activeClass);
      if (element.getAttribute("id") === localStorage.getItem("sex")) {
        element.classList.add(activeClass);
      }
      if (
        element.getAttribute("data-ratio") === localStorage.getItem("ratio")
      ) {
        element.classList.add(activeClass);
      }
    });
  }

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = "-";
      return;
    }

    if (sex === "female") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio,
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio,
      );
    }
  }

  function getStaticInformaion(selector, activeClass) {
    const elements = document.querySelectorAll(`${selector}`);

    elements.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (e.target.hasAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.getAttribute("id");
          localStorage.setItem("sex", e.target.getAttribute("id"));
        }

        elements.forEach((element) => {
          element.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }

      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;

        case "weight":
          weight = +input.value;
          break;

        case "age":
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active",
  );

  calcTotal();

  getStaticInformaion("#gender div", "calculating__choose-item_active");
  getStaticInformaion(
    ".calculating__choose_big div",
    "calculating__choose-item_active",
  );

  getDynamicInformation("#height");
  getDynamicInformation("#weight");
  getDynamicInformation("#age");
}

export default calculator;
