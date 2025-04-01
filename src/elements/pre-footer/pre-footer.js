const locales = {
   en: {
      title: 'Contact us',
      buttons: {
         chat: {
            title: 'Chat',
            text: 'Available until 4pm.'
         },
         phone: {
            title: 'Phone',
            text: 'Available until 4pm.'
         },
         email: {
            title: 'Contact Form',
            text: 'Available until 4pm.'
         },
         appointment: {
            title: 'By appointment',
            text: 'Available until 4pm.'
         },
         office: {
            title: 'Our offices',
            text: 'Available until 4pm.'
         },
      },
      info: 'Our colleagues from FOD BOSA are available on weekdays from 8:30am to 12:30pm and from 1:30pm to 4pm.',
   },
   nl: {
      title: 'Neem contact met ons op',
      buttons: {
         chat: {
            title: 'Chat',
            text: 'Beschikbaar tot 16u.'
         },
         phone: {
            title: 'Telefoon',
            text: 'Beschikbaar tot 16u.'
         },
         email: {
            title: 'ContactFormulier',
            text: 'Beschikbaar tot 16u.'
         },
         appointment: {
            title: 'Op afspraak',
            text: 'Beschikbaar tot 16u.'
         },
         office: {
            title: 'Onze kantoren',
            text: 'Beschikbaar tot 16u.'
         },
      },
      info: 'Onze collega’s van FOD BOSA zijn beschikbaar op werkdagen van 8u30 tot 12u30 en van 13u30 tot 16u.',
   },
   fr: {
      title: 'Contactez-nous',
      buttons: {
         chat: {
            title: 'Chat',
            text: 'Disponible jusqu\'à 16h.'
         },
         phone: {
            title: 'Téléphone',
            text: 'Disponible jusqu\'à 16h.'
         },
         email: {
            title: 'Formulaire de contact',
            text: 'Disponible jusqu\'à 16h.'
         },
         appointment: {
            title: 'Sur rendez-vous',
            text: 'Disponible jusqu\'à 16h.'
         },
         office: {
            title: 'Nos bureaux',
            text: 'Disponible jusqu\'à 16h.'
         },
      },
      info: 'Nos collègues de la FOD BOSA sont disponibles en semaine de 8h30 à 12h30 et de 13h30 à 16h.',
   },
   de: {
      title: 'Kontaktieren Sie uns',
      buttons: {
         chat: {
            title: 'Chat',
            text: 'Bis 16 Uhr verfügbar.'
         },
         phone: {
            title: 'Telefon',
            text: 'Bis 16 Uhr verfügbar.'
         },
         email: {
            title: 'Kontaktformular',
            text: 'Bis 16 Uhr verfügbar.'
         },
         appointment: {
            title: 'Nach Vereinbarung',
            text: 'Bis 16 Uhr verfügbar.'
         },
         office: {
            title: 'Unsere Büros',
            text: 'Bis 16 Uhr verfügbar.'
         },
      },
      info: 'Unsere Kollegen von FOD BOSA sind an Wochentagen von 8:30 bis 12:30 Uhr und von 13:30 bis 16:00 Uhr erreichbar.',
   }
};

class PreFooterWidget extends HTMLElement {
   constructor () {
      super();

      this.attachShadow({ mode: 'open' });
      this._rating = 0;
      this._text = '';
      this._isSubmittable = false;

      this.loadTemplate()
         .then(() => {
            this.addLanguageContent();
            this.listenChatButton();
            //this.listenRating();
            //this.listenTextfield();
            //this.listenSubmit();
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

   async loadTemplate () {
      const response = await fetch('/src/elements/pre-footer/pre-footer.html');
      const html = await response.text();
      this.shadowRoot.innerHTML = `${html}`;
   }

   addLanguageContent () {
      const lang = document.documentElement.lang || 'en';

      const headerTitle = this.shadowRoot.querySelector('#header-title');
      const chatButton = this.shadowRoot.querySelector('#chat-button');
      const phoneButton = this.shadowRoot.querySelector('#phone-button');
      const emailButton = this.shadowRoot.querySelector('#contact-button');
      const appointmentButton = this.shadowRoot.querySelector('#appointment-button');
      const officeButton = this.shadowRoot.querySelector('#office-button');
      const info = this.shadowRoot.querySelector('#info');

      // Get the website's language
      const locale = locales[lang] || locales['en'];
      // Set content to current language
      if (headerTitle && chatButton && phoneButton && emailButton && appointmentButton && officeButton && info) {
            headerTitle.textContent = locale.title;
            chatButton.querySelector('.title').textContent = locale.buttons.chat.title;
            chatButton.querySelector('.description').textContent = locale.buttons.chat.text;
            phoneButton.querySelector('.title').textContent = locale.buttons.phone.title;
            phoneButton.querySelector('.description').textContent = locale.buttons.phone.text;
            emailButton.querySelector('.title').textContent = locale.buttons.email.title;
            emailButton.querySelector('.description').textContent = locale.buttons.email.text;
            appointmentButton.querySelector('.title').textContent = locale.buttons.appointment.title;
            appointmentButton.querySelector('.description').textContent = locale.buttons.appointment.text;
            officeButton.querySelector('.title').textContent = locale.buttons.office.title;
            officeButton.querySelector('.description').textContent = locale.buttons.office.text;
            info.textContent = locale.info;

      // hide office-button
         officeButton.style.display = 'none';
         }
      }

      listenChatButton() {
         const chatButton = this.shadowRoot.querySelector('#chat-button');
         chatButton.addEventListener('click', () => {
            console.log('chat');

            // Open feedback-widget
            const feedbackWidget = document.querySelector('feedback-widget');
            if (feedbackWidget) {
               // remove closed class inside the feedback widget shadow root
               const feedbackWidgetShadowRoot = feedbackWidget.shadowRoot;
               const closedClass = feedbackWidgetShadowRoot.querySelector('.closed');
               if (closedClass) {
                  closedClass.classList.remove('closed');
               }
               // open the feedback widget
               feedbackWidget.open();
            } else {
               console.error('Feedback widget not found');
            }
         });
      }

      listenPhoneButton() {
         const phoneButton = this.shadowRoot.querySelector('#phone-button');
         phoneButton.addEventListener('click', () => {
            console.log('phone');
         });
      }

      listenEmailButton() {
         const emailButton = this.shadowRoot.querySelector('#contact-button');
         emailButton.addEventListener('click', () => {
            console.log('email');
         });
      }

      listenAppointmentButton() {
         const appointmentButton = this.shadowRoot.querySelector('#appointment-button');
         appointmentButton.addEventListener('click', () => {
            console.log('appointment');
         });
      }

      listenOfficeButton() {
         const officeButton = this.shadowRoot.querySelector('#office-button');
         officeButton.addEventListener('click', () => {
            console.log('office');
         });
      }
   }

// Define the custom element
customElements.define ('pre-footer-widget', PreFooterWidget);