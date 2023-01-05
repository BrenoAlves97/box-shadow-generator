//classe
class previewBoxShadow {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    boxPreview,
    rule,
    color
  ) {
    this.horizontal = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical = vertical;
    this.verticalRef = verticalRef;
    this.blur = blur;
    this.blurRef = blurRef;
    this.spread = spread;
    this.spreadRef = spreadRef;
    this.boxPreview = boxPreview;
    this.rule = rule;
    this.color = color;
  }

  intializing() {
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.blurRef.value = this.blur.value;
    this.spreadRef.value = this.spread.value;

    this.applyRule();
  }

  applyRule() {
    this.boxPreview.style.boxShadow = `${this.horizontal.value}px ${this.vertical.value}px ${this.blur.value}px ${this.spread.value}px ${this.color.value}`;
    const valueRule = this.boxPreview.style.boxShadow;
    this.rule.textContent = valueRule;
  }

  setColor(value) {
    this.color.value = value;
  }

  updateValue(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalRef.value = value;
        break;
      case "vertical":
        this.verticalRef.value = value;
        break;
      case "blur":
        this.blurRef.value = value;
        break;
      case "spread":
        this.spreadRef.value = value;
        break;
    }
    this.applyRule();
  }
}

//seleção de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

// seletor de cor
const color = document.querySelector("#color-value");

//box
const boxPreview = document.querySelector("#box");

//rule
const rule = document.querySelector("#rule span");

//instanciado obj
const boxShadow = new previewBoxShadow(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  boxPreview,
  rule,
  color
);

boxShadow.intializing();

//eventos
horizontal.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("vertical", value);
});

blur.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("blur", value);
});

spread.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("spread", value);
});

color.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.setColor(value);
});
