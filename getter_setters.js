var obj = {
    v: 0,
    get prop() {
      return this.v;
    },
    set prop(newValue) {
      this.v = newValue;
    }
  };
  
  console.log(obj.prop);
  obj.prop = 42; ///atribui novo valor
  console.log(obj.prop);