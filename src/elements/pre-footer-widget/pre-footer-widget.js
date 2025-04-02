import template from './pre-footer-widget.html';

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

class SDGPreFooterWidget extends HTMLElement {
   constructor () {
      super();

      this.attachShadow({ mode: 'open' });
      this.widgetId = 'widget';
      this.isChat = false;
      this.chatId = null;
      this.isPhone = false;
      this.phoneNumber = null;
      this.isContact = false;
      this.contactForm = null;
      this.isAppointment = false;
      this.appointmentUrl = null;
      this.infoText = null
      this.isListeningQuery = false;

      this.loadTemplate()
         .then(() => {
            this.getAttributes();
            this.addLanguageContent();
            this.listenChatButton();
         })
   }

   async loadTemplate () {
      this.shadowRoot.innerHTML = template;
   }

   getAttributes () {
      // get attributes from the element 
      /*
         Attributes:
         - chat: boolean                  // display chat button (default: false)
         - chat-id: string                // chat widget id (default: null)
         - phone: boolean                 // display phone button (default: false)
         - phone-number: string           // phone number (default: null)
         - contact: boolean               // display contact button (default: false)
         - contact-form: string           // contact form url (default: null)
         - appointment: boolean           // display appointment button (default: false)
         - appointment-url: string        // appointment url (default: null)
         - info-text: JSON                // display text (default: null)
         - listening-query: boolean       // listen query params (default: false)
      */

      this.isChat = this.getAttribute('chat') !== null && this.getAttribute('chat') !== 'false';
      this.chatId = this.getAttribute('chat-id') || null;
      this.isPhone = this.getAttribute('phone') !== null && this.getAttribute('phone') !== 'false';
      this.phoneNumber = this.getAttribute('phone-number') || null;
      this.isContact = this.getAttribute('contact') !== null && this.getAttribute('contact') !== 'false';
      this.contactForm = this.getAttribute('contact-form') || null;
      this.isAppointment = this.getAttribute('appointment') !== null && this.getAttribute('appointment') !== 'false';
      this.appointmentUrl = this.getAttribute('appointment-url') || null;
      this.infoText = this.getAttribute('info-text') ? JSON.parse(this.getAttribute('info-text')) : null;
      this.isListeningQuery = this.getAttribute('listening-query') !== null && this.getAttribute('listening-query') !== 'false';

      // set attributes to the widget
      if (this.isChat) { this.shadowRoot.querySelector(`#${this.widgetId}`).classList.add('is-chat') }
      if (this.isPhone) { this.shadowRoot.querySelector(`#${this.widgetId}`).classList.add('is-phone') }
      if (this.isContact) { this.shadowRoot.querySelector(`#${this.widgetId}`).classList.add('is-contact') }
      if (this.isAppointment) { this.shadowRoot.querySelector(`#${this.widgetId}`).classList.add('is-appointment') }
      if (this.infoText) {
         const lang = document.documentElement.lang || 'en';
         this.shadowRoot.querySelector(`#${this.widgetId} #info-text`).innerHTML = this.infoText[lang]
      }

      // listening query
      if (this.isListeningQuery) {
         this.listenQuery();
      }
   }

   listenQuery () {
      /*
         Params:
         - sdg-pf-chat=0              // display chat button (default: 0)
         - sdg-pf-phone=0             // display phone button (default: 0)
         - sdg-pf-phone-number=...    // phone number (default: null)
         - sdg-pf-contact=0           // display contact button (default: 0)
         - sdg-pf-contact-url=...     // contact form url (default: null)
         - sdg-pf-appointment=0       // display appointment button (default: 0)
         - sdg-pf-appointment-url=... // appointment url (default: null)
         - sdg-pf-text                // display text (default: 0)

         example:
         /demo/pre-footer-widget.html?sdg-feed-min=0&sdg-feed-rating=1&sdg-feed-text=1&sdg-feed-open=1&sdg-feed-overlay-close=0&sdg-button-id=fb4761e7-0ee2-48fd-89f3-ae7950f1c946
      */
      const urlParams = new URLSearchParams(window.location.search);

      this.isChat = urlParams.has('sdg-pf-chat') && urlParams.get('sdg-pf-chat') === '1';
      this.chatId = urlParams.has('sdg-pf-chat-id') ? urlParams.get('sdg-pf-chat-id') : null;
      this.isPhone = urlParams.has('sdg-pf-phone') && urlParams.get('sdg-pf-phone') === '1';
      this.phoneNumber = urlParams.has('sdg-pf-phone-number') ? urlParams.get('sdg-pf-phone-number') : null;
      this.isContact = urlParams.has('sdg-pf-contact') && urlParams.get('sdg-pf-contact') === '1';
      this.contactForm = urlParams.has('sdg-pf-contact-url') ? urlParams.get('sdg-pf-contact-url') : null;
      this.isAppointment = urlParams.has('sdg-pf-appointment') && urlParams.get('sdg-pf-appointment') === '1';
      this.appointmentUrl = urlParams.has('sdg-pf-appointment-url') ? urlParams.get('sdg-pf-appointment-url') : null;
      this.text = urlParams.has('sdg-pf-text') ? urlParams.get('sdg-pf-text') : null;
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
      if (headerTitle) {
         headerTitle.textContent = locale.title;
      }

      if (chatButton) {
         chatButton.querySelector('.title').textContent = locale.buttons.chat.title;
         chatButton.querySelector('.description').textContent = locale.buttons.chat.text;
      }

      if (phoneButton) {
         phoneButton.querySelector('.title').textContent = locale.buttons.phone.title;
         phoneButton.querySelector('.description').textContent = locale.buttons.phone.text;
      }

      if (emailButton) {
         emailButton.querySelector('.title').textContent = locale.buttons.email.title;
         emailButton.querySelector('.description').textContent = locale.buttons.email.text;
      }

      if (appointmentButton) {
         appointmentButton.querySelector('.title').textContent = locale.buttons.appointment.title;
         appointmentButton.querySelector('.description').textContent = locale.buttons.appointment.text;
      }

      if (officeButton) {
         officeButton.querySelector('.title').textContent = locale.buttons.office.title;
         officeButton.querySelector('.description').textContent = locale.buttons.office.text;
      }

      if (info) {
         info.textContent = locale.info;
      }
   }

   listenChatButton () {
      const chatButton = this.shadowRoot.querySelector('#chat-button');
      chatButton.addEventListener('click', () => {
         // Open feedback-widget
         const feedbackWidget = this.chatId ? document.querySelector(`#${this.chatId}`) : document.querySelector('sdg-feedback-widget');
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

   listenPhoneButton () {
      const phoneButton = this.shadowRoot.querySelector('#phone-button');
      phoneButton.addEventListener('click', () => {
         console.log('phone');
      });
   }

   listenEmailButton () {
      const emailButton = this.shadowRoot.querySelector('#contact-button');
      emailButton.addEventListener('click', () => {
         console.log('email');
      });
   }

   listenAppointmentButton () {
      const appointmentButton = this.shadowRoot.querySelector('#appointment-button');
      appointmentButton.addEventListener('click', () => {
         console.log('appointment');
      });
   }

   listenOfficeButton () {
      const officeButton = this.shadowRoot.querySelector('#office-button');
      officeButton.addEventListener('click', () => {
         console.log('office');
      });
   }
}

// Define the custom element
customElements.define('sdg-pre-footer-widget', SDGPreFooterWidget);