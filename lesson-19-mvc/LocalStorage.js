function TLocalStorage(object) {
    this.object = object;
    this.setLocalStorage = function () {
      localStorage[this.object] = JSON.stringify(pHash);
    };
    this.getLocalStorage = function () {
      if(localStorage[this.object] != null) {
        pHash = JSON.parse(localStorage[this.object]);
      }
    }
  }