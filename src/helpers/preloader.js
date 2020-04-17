const preloader = (function () {
  const { body } = document;
  return {
    show() {
      body.classList.add('overflow');
      body.classList.remove('loaded');
    },
    hide() {
      body.classList.remove('overflow');
      body.classList.add('loaded');
    },
    hideWithDeley(deley) {
      setTimeout(() => this.hide(), deley);
    },
    showWithDeley(deley) {
      return new Promise((resolve) => {
        this.show();
        setTimeout(() => {
          resolve();
        }, deley);
      });
    },
  };
}());

export default preloader;
