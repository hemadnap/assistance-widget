# Assistance Widget

## Demo
You can see the demo of the widget [here](./demo)

## Components
### Feedback widget
```html
<!-- Default -->
<sdg-feedback-widget/>

<!-- With parameters -->
<sdg-feedback-widget
  buttonId="e0f2b1d3-5f7e-4a6b-a0d1-3f2c5e7f8b9c"
  minified="true"
  rating="true"
  text="true"
  closed="false"
  overlay-click="false"
  listen-query="false"
```

### Pre-footer widget
```html
<!-- Default -->
<sdg-pre-footer-widget/>
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