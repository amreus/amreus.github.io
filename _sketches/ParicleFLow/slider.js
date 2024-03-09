
class Slider {
    static nextId = 1;
    constructor(label, small, large, def = 50, step = 1) {
      this.idNum = Slider.nextId;
      this.elt = createSlider(small, large, def, step);
      const sliderDiv = createDiv();
      sliderDiv.addClass("sb-slider");
      this.elt.id("sb_slider" + this.idNum);
      this.elt.parent(sliderDiv);
      this.elt.attribute("name", `sb_slider${this.idNum}`);
      const outputSpan = createSpan(
        `<output id="sb_output${this.idNum}" name="sb_output${
          this.idNum
        }">${this.elt.value()}</output>`
      );
      outputSpan.parent(sliderDiv);
      outputSpan.style('margin:0 1em')
      this.elt.attribute(
        "oninput",
        `sb_output${this.idNum}.value = sb_slider${this.idNum}.value`
      );
      const labelSpan = createSpan(
        `<label for="${this.elt.id()}">${label}</label>`
      );
      labelSpan.style('margin-left:1em');
      labelSpan.parent(sliderDiv);
      Slider.nextId++;
      return this;
    }
    value(x) {
      if (x === undefined) {
        return this.elt.value();
      } else {
        this.elt.value(x);
        const id = "sb_output" + this.idNum;
        document.getElementById(id).value = parseInt(x);
      }
    }
  }
  