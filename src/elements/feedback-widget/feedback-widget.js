import template from './feedback-widget.html';

const locales = {
   en: {
      title: 'Help us improve',
      ratingLabel: 'How do you rate your overall satisfaction with the service you received?',
      textfieldLabel: 'How can we improve the service?',
      submit: 'Submit',
      submitted: 'Thank you for your feedback!'
   },
   nl: {
      title: 'Help ons verbeteren',
      ratingLabel: 'Hoe beoordeel je je algemene tevredenheid over de dienst die je hebt ontvangen?',
      textfieldLabel: 'Hoe kunnen we de dienst verbeteren?',
      submit: 'Verzenden',
      submitted: 'Bedankt voor je feedback!'
   },
   fr: {
      title: 'Aidez-nous à nous améliorer',
      ratingLabel: 'Comment évaluez-vous votre satisfaction générale concernant le service que vous avez reçu ?',
      textfieldLabel: 'Comment pouvons-nous améliorer le service ?',
      submit: 'Envoyer',
      submitted: 'Merci pour votre retour!'
   },
   de: {
      title: 'Helfen Sie uns, uns zu verbessern',
      ratingLabel: 'Wie bewerten Sie Ihre allgemeine Zufriedenheit mit dem erhaltenen Service?',
      textfieldLabel: 'Wie können wir den Service verbessern?',
      submit: 'Absenden',
      submitted: 'Vielen Dank für Ihr Feedback!'
   }
};

class SDGFeedbackWidget extends HTMLElement {
   constructor () {
      super();
      this.attachShadow({ mode: 'open' });
      this.deviceId = new Date().toISOString()
      this.buttonId = null;
      this.isRating = false;
      this.isText = false;
      this.isMinified = false;
      this.isOverlayClose = true;
      this._isSubmittable = false;
      this._isSubmit = false;
      this._isClosed = true;

      this._rating = 0;
      this._text = '';
      this.textLengthLimit = 256;

      this.feedbackUrl = 'http://localhost:8082/api/public/feedbacks';

      this.loadTemplate()
         .then(() => {
            this.getParams();
            this.getAttributes();
            this.addLanguageContent();
            this.listenCloseButton();
            this.listenToOverlay();
            this.listenToOpen();
            this.listenRating();
            this.listenTextfield();
            this.listenSubmit();
         })
   }

   get rating () {
      return this._rating;
   }

   set rating (value) {
      this._rating = value;

      if (this._text?.length > 0 && this._rating) {
         this.isSubmittable = true
      } else {
         this.isSubmittable = false
      }
   }

   get text () {
      return this._text;
   }

   set text (value) {
      this._text = value;

      if (this._text?.length > 0 && this._rating) {
         this.isSubmittable = true
      } else {
         this.isSubmittable = false
      }
   }

   get isSubmittable () {
      return this._isSubmittable;
   }

   set isSubmittable (value) {
      this._isSubmittable = value;

      // disable or enable the submit button
      const submit = this.shadowRoot.querySelector('#submit');
      if (value) {
         submit.removeAttribute('disabled');
      } else {
         submit.setAttribute('disabled', true);
      }
   }

   get isClosed () {
      return this._isClosed;
   }

   set isClosed (value) {
      this._isClosed = value;

      // add closed class to the widget
      const widget = this.shadowRoot.querySelector('#widget');
      if (value) {
         this.isMinified ? widget.classList.add('minimized') : widget.classList.add('closed');
      } else {
         this.isMinified ? widget.classList.remove('minimized') : widget.classList.remove('closed');
      }
   }

   get isSubmit () {
      return this._isSubmit;
   }

   set isSubmit (value) {
      this._isSubmit = value;

      // add submit class to the widget
      const widget = this.shadowRoot.querySelector('#widget');
      if (value) {
         widget.classList.add('submitted');
      } else {
         widget.classList.remove('submitted');
      }
   }

   async loadTemplate () {
      this.shadowRoot.innerHTML = template;
   }

   getAttributes () {
      // get attributes from the element 
      const buttonId = this.getAttribute('button-id');
      const isMinified = this.getAttribute('minified');
      const isRating = this.getAttribute('rating');
      const isText = this.getAttribute('text');
      const isClosed = this.getAttribute('closed');
      const isOverlayClose = this.getAttribute('overlay-click');

console.log('buttonId', buttonId);
      console.log('isMinified', isMinified);
      console.log('isRating', isRating);
      console.log('isText', isText);
      console.log('isClosed', isClosed);
      console.log('isOverlayClose', isOverlayClose);

      // set attributes to the element
      this.buttonId = buttonId || this.buttonId;
      this.isMinified = isMinified === 'true' || this.isMinified;
      this.isRating = isRating === 'true' || this.isRating;
      this.isText = isText === 'true' || this.isText;
      this.isClosed = isClosed === 'true' || this.isClosed;
      this.isOverlayClose = isOverlayClose === 'true' || this.isOverlayClose;

      // set attributes to the widget
      // minimized
      if (this.isMinified) {
         this.shadowRoot.querySelector('#widget').classList.add('minimized');
      }
   }

   getParams () {
      /*
         Params:
         - sdg-fw-id=...           // button id (default: null)
         - sdg-fw-min=0              // minimized feedback widget (default: 0)
         - sdg-fw-rating=0           // rating display (default: 0)
         - sdg-fw-text=0             // text display   (default: 0)
         - sdg-fw-open=0             // open feedback widget (default: 0)
         - sdg-fw-overlay-click=0    // close feedback widget via overlay click (default: 0)

         example:
         /demo/feedback-widget.html?sdg-fw-min=0&sdg-fw-rating=1&sdg-fw-text=1&sdg-fw-open=1&sdg-fw-overlay-click=0&sdg-fw-id=fb4761e7-0ee2-48fd-89f3-ae7950f1c946
      */
      const urlParams = new URLSearchParams(window.location.search);

      this.buttonId = urlParams.has('sdg-fw-id') ? urlParams.get('sdg-fw-id') : this.buttonId;
      this.isMinified = urlParams.has('sdg-fw-min') && urlParams.get('sdg-fw-min') === '1';
      this.isRating = urlParams.has('sdg-fw-rating') && urlParams.get('sdg-fw-rating') === '1';
      this.isText = urlParams.has('sdg-fw-text') && urlParams.get('sdg-fw-text') === '1';
      this.isClosed = !urlParams.has('sdg-fw-open') || urlParams.get('sdg-fw-open') === '0';
      this.isOverlayClose = urlParams.has('sdg-fw-overlay-click') && urlParams.get('sdg-fw-overlay-click') === '1';

      // add class to the widget
      // minized
      if (this.isMinified) {
         this.shadowRoot.querySelector('#widget').classList.add('minimized');
      }
   }

   addLanguageContent () {
      const lang = document.documentElement.lang || 'en';
      const title = this.shadowRoot.querySelector('#title');
      const ratingLabel = this.shadowRoot.querySelector('#rating-label');
      const textLabel = this.shadowRoot.querySelector('#text-label');
      const submit = this.shadowRoot.querySelector('#submit');
      const submitted = this.shadowRoot.querySelector('#submitted-message');

      // Get the website's language
      const locale = locales[lang] || locales['en'];
      // Set content to current language
      if (title && ratingLabel && textLabel && submit && submitted) {
         title.textContent = locale.title;
         ratingLabel.textContent = locale.ratingLabel;
         textLabel.textContent = locale.textfieldLabel;
         submit.textContent = locale.submit;
         submitted.textContent = locale.submitted;
      }
   }

   listenCloseButton () {
      const close = this.shadowRoot.querySelector('#close');
      close.addEventListener('click', () => {
         this.isClosed = true;
      });
   }

   listenToOverlay () {
      const overlay = this.shadowRoot.querySelector('#overlay');
      overlay.addEventListener('click', () => {
         if (this.isOverlayClose) { this.isClosed = true; }
      });
   }

   listenToOpen () {
      const open = this.shadowRoot.querySelector('#open');
      open.addEventListener('click', () => {
         this.isClosed = false;
      });
   }

   listenRating () {
      const ratingValue = this.shadowRoot.querySelector('#rating-value');
      const rates = this.shadowRoot.querySelectorAll('.rate');

      // Retrieve the rating value
      rates.forEach(rate => {
         rate.addEventListener('click', (event) => {
            // get the rating value
            const value = event.currentTarget.querySelector('.value').textContent;
            ratingValue.value = value;
            this.rating = value;

            // add active class to the selected rate
            rates.forEach(r => r.classList.remove('active'));
            event.currentTarget.classList.add('active');
         });
      });
   }

   listenTextfield () {
      const textComponent = this.shadowRoot.querySelector('#text-component');
      const textValue = this.shadowRoot.querySelector('#text-value');
      const textInfo = this.shadowRoot.querySelector('#text-info');

      textInfo.textContent = `${textValue.value.length}/${this.textLengthLimit}`;

      // Retrieve the text value
      textValue.addEventListener('input', (event) => {
         this.text = event.target.value;

         // display the text length
         textInfo.textContent = `${textValue.value.length}/${this.textLengthLimit}`;

         if (textValue.value.length > this.textLengthLimit) {
            this.isSubmittable = false;

            // add error class to text component
            textComponent.classList.add('error');
         } else {
            // remove class error
            textComponent.classList.remove('error');
         }
      })
   }

   listenSubmit () {
      const submit = this.shadowRoot.querySelector('#submit');
      submit.addEventListener('click', () => {
         // send data to the server
         const data = {
            buttonId: this.buttonId,
            overallExperience: this.rating,
            submissionDate: new Date().toISOString(),
            freeText: this.text,
            deviceIdentifier: this.deviceId,
            language: document.documentElement.lang || 'en'
         }

         this.isSubmittable = false;

         // send data to the server
         fetch(this.feedbackUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
         })
            .then(response => {
               if (!response.ok) {
                  throw new Error('Network response was not ok');
               }

               // reset the form
               this.rating = 0;
               this.text = '';

               // set isSubmit
               this.isSubmit = true;

               return response.json();
            })
            .then(data => {
               console.log('Success:', data);
            })
            .catch((error) => {
               console.error('Error:', error);
            })
            .finally(() => {
               this.isSubmittable = true;
            });
      });
   }
}

// Define the custom element
customElements.define('sdg-feedback-widget', SDGFeedbackWidget);