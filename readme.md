# Assistance Widget


## Components
### Feedback widget
```html
<feedback-widget/>
```

### Pre-footer
```html
<pre-footer/>
```

## Local usage
You can run the project locally using the following command:
```bash
npm i
npm run dev
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
<script src="<cdn url>/<bundled file name>.js"></script>
```

Then, you can use the widget by adding one of or all the following HTML code to your page:
```html
<!-- Feedback widget -->
<feedback-widget/>

<!-- Pre-footer -->
<pre-footer/>
```


## Local back office
http://localhost:8082/swagger-ui/index.html

 -> login
{
  "email": "admin@example.com",
  "password": "MTIzNA=="
}

-> get token and set it to authorize



### get button id
-> get services
{
  "first": 0,
  "rows": 10
}

--> get buttons
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
}