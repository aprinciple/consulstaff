class Alert {
  constructor(option) {
    this.alert = option.alert;
    this.cancel = option.cancel;
  }

  closeAlert() {
    this.alert.addEventListener('click', (e) => {
      const close = e.target.closest(`.${this.cancel.className}`);
      if (close) {
        this.alert.style.display = 'none';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const alert = document.querySelector('.alert');
  if (alert) {
    new Alert({
      alert: document.querySelector('.alert'),
      cancel: document.querySelector('.alert__close'),
    }).closeAlert();
  }
});