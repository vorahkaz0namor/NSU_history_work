(() => {
    const subscriptionForm = document.querySelector('#subscription-form');

        const subpscriptionEmail = subscriptionForm.querySelector('#subscription-email');
        const subpscriptionButton = subscriptionForm.querySelector('#subscription-button');
        const subpscriptionHelp = subscriptionForm.querySelector('#subscription-help');

        subpscriptionEmail.addEventListener('input', ev => {

        const email = subpscriptionEmail.value.trim();

        if (email === '') {
            subpscriptionHelp.classList.remove('text-hide');
            return;
        }

        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.matches(email)) {
            subpscriptionHelp.classList.remove('text-hide');
            return;
        }
        
        subpscriptionHelp.classList.add('text-hide');
        subpscriptionButton.removeAttribute('disabled');
    });

    subscriptionForm.addEventListener('submit', ev => {
        ev.preventDefault();

        const email = subpscriptionEmail.value.trim();

        // TODO: send email simulation:
        setTimeout(() => {
            alert('Вы успешно подписаны на новости');
            subpscriptionEmail.value = '';
        }, 500);
    });
})();