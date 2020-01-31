/**
 * Handler of forms
 */

class PostForm {
	constructor(option) {
		this.form = option.form;
		this.url = option.url;
		this.method = option.method;
		this.alert = option.alertOpt.alert;
		this.classSuccess = option.alertOpt.classSuccess;
		this.classError = option.alertOpt.classError;
		this.alertMessage = option.alertOpt.message;
		this.form.forEach((item) => {
			item.addEventListener('submit', (e) => {
				this.sendRequest(e);
			});
		});
	}

	createRequest(form) {
		const data = new FormData(form);
		fetch(form.action, {
				method: 'POST',
				body: data,
			})
			.then((resp) => {
				if (resp.status === 200) {
					this.showAlertSuccess(this.setMessageSuccess());
					if (form.classList.contains('form--popup')) {
						form.style.display = 'none';
					}
				} else {
					this.showAlertError(this.setMessageError());
				}
			})
			.catch(error => console.error(error));
	}

	sendRequest(e) {
		e.preventDefault();
		this.createRequest(e.currentTarget);
	}

	showAlertSuccess(message) {
		this.alert.classList.add(this.classSuccess);
		this.alertMessage.innerHTML = message;
		this.alert.style.display = 'flex';
	}

	showAlertError(error) {
		this.alert.classList.add(this.classError);
		this.alertMessage.innerHTML = error;
		this.alert.style.display = 'flex';
	}

	setMessageSuccess() {
		let currentLang = document.documentElement.lang;
		let message = '';
		if ( currentLang === 'ru_RU' ) {
			message = '<h6>Сообщение отправлено!</h6><p>Мы свяжемся с вами в ближайшее время</p>';
		}
		if ( currentLang === 'it_IT' ) {
			message = '<h6>Messaggio inviato!</h6><p>Ti contatteremo a breve</p>';
		}
		if ( currentLang === 'en_US' ) {
			message = '<h6>Message sent!</h6><p>We will contact you shortly</p>';
		}
		return message;
	}

	setMessageError() {
		let currentLang = document.documentElement.lang;
		let message = '';
		if ( currentLang === 'ru_RU' ) {
			message = '<p>Упс! Что-то пошло не так :(</p>';
		}
		if ( currentLang === 'it_IT' ) {
			message = '<h6>Oops!</h6><p>Qualcosa è andato storto :(</p>';
		}
		if ( currentLang === 'en_US' ) {
			message = '<h6>Oops!</h6><p>Something went wrong :(</p>';
		}
		return message;
	}

}

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelectorAll('.form--post');

	if (form) {
		(() => new PostForm({
			form: form,
			url: '',
			method: 'POST',
			alertOpt: {
				alert: document.querySelector('.alert'),
				classSuccess: 'alert--success',
				classError: 'alert--error',
				message: document.querySelector('.alert__message'),
			},
		}))();
	}
});