# Assistance Widget

## Demo
You can see the demo of the widget [here](./)

## Components
---
### Feedback widget
The feedback widget is a custom web component that allows users to provide feedback on a website. 

It is designed to be easily integrated into any website and can be customized with various attributes.

The widget can be opened and closed, and it can display different fields such as rating and text input.

#### Attributes:

    - button-id="String"              Button ID (default: null)
    - minimized"Boolean"              Is widget minimized when closed (default: false)
    - rating="Boolean"                Display rating field (default: false)
    - text-number="String"            Display text field (default: false)
    - closed="Boolean"                Is widget closed (default: true)
    - overlay-close-form="Boolean"    Overlay click closes the widget (default: true)
    - listening-query="Boolean"       Listen query params (default: false)
    - text-length-limit="Number"      Text length limit (default: 500)
    - feedback-url="String"           Feedback submit URL (default: null)

Examples:
```html
<!-- Default -->
<sdg-feedback-widget/>

<!-- With parameters -->
<sdg-feedback-widget
  button-id="e0f2b1d3-5f7e-4a6b-a0d1-3f2c5e7f8b9c"
  minimize="true"
  rating="true"
  text="true"
  closed="false"
  overlay-close="false"
  listen-query="false"
></sdg-feedback-widget>
```

#### Functions:
The following functions are available to control the widget from the outside:

    - `open()`: Opens the widget.
    - `close()`: Closes the widget.
    - `displayMinimize()`: Displays the widget in a minimized state.
    - `hideMinimize()`: Hides the widget in a minimized state.
    - `displayRating()`: Displays the rating field.
    - `hideRating()`: Hides the rating field.
    - `displayText()`: Displays the text field.
    - `hideText()`: Hides the text field.

Example usage:
```javascript
const feedbackWidget = document.querySelector('sdg-feedback-widget');
feedbackWidget.open();
feedbackWidget.close();
feedbackWidget.displayMinimize();
feedbackWidget.hideMinimize();
feedbackWidget.displayRating();
feedbackWidget.hideRating();
feedbackWidget.displayText();
feedbackWidget.hideText();
```

---
### Pre-footer widget
#### Attributes:
    - chat="Boolean"              Display chat button (default: false)
    - chat-id="String"            Chat widget id (default: null)
    - phone="Boolean"             Display phone button (default: false)
    - phone-number="String"       Phone number (default: null)
    - contact="Boolean"           Display contact button (default: false)
    - contact-form="String"       Contact form url (default: null)
    - appointment="Boolean"       Display appointment button (default: false)
    - appointment-url="String"    Appointment url (default: null)
    - info-text="JSON"            Display info text (default: null) -> {"en": "Info text in English", "fr": "Info text in French"}
    - listening-query="Boolean"   Listen query params (default: false)

#### Examples:
```html
<!-- Default -->
<sdg-pre-footer-widget/>

<!-- With parameters -->
<sdg-pre-footer-widget
  chat
  phone
  phone-number="123456789"
  contact
  contact-form="https://example.com/contact"
  appointment
  appointment-url="https://example.com/appointment"
  info-text='{"en": "Info text in English", "fr": "Info text in French"}'
  listening-query="false"
></sdg-pre-footer-widget>
```

## Local usage
You can run the project locally using the following command:
```bash
npm i
npm run build:watch

# Run a local server to serve the files
http-server
```


## Build
To build the project for production, use the following command:
```bash
npm run build
```

This will output "/dist/bundle.js" file that can be exported to any website.

## Embedding
To embed the widget into your website, you need to include the following script in your HTML file:
```html
<!-- Include the bundle style -->
<link rel="stylesheet" href="/dist/bundle.css">

<!-- Include the bundle script -->
<script src="/dist/bundle.js"></script>
```


<!--## Local back office
http://localhost:8082/swagger-ui/index.html

 - login
{
  "email": "admin@example.com",
  "password": "MTIzNA=="
}

- get token and set it to authorize-->



<!--### get button id
- get services
{
  "first": 0,
  "rows": 10
}

- get buttons
{
  "first": 0,
  "rows": 10,
  "serviceId": "ae612fd4-c549-4d74-bb9c-09a4a01c2218"
}

-> retrieve feedback
{
  "first": 0,
  "rows": 100,
  "serviceId": "ae612fd4-c549-4d74-bb9c-09a4a01c2218",
  "globalFilter":"yyy"
}-->