# Petitfour


N.B. **This project took me about month or more to finish it, Just because I didn’t have enough time for it, i just gave it 1 hour/day, some days I didn’t open it; cause i work as full time and i also have another side projects for my clients, So it wasn’t on my top priorities.**

**Hope you enjoy it and find it helpful!**

<hr/>

## Features

✅ <b>Dynamic Dashboard</b><br/>
✅ <b>Responsive Design</b><br/>
✅ <b>SEO Friendly</b><br/>
✅ <b>[Skills - Projects - Blogs] Editor</b><br/>
🌟 <b>MidJourney Images</b>

<hr/>

## Postman Collection APIs

<a href="https://www.postman.com/petitfour/workspace/petitfour/collection/26104711-d112244d-f11a-4dd6-9363-0a794feb09ac?action=share&creator=26104711" target="_blank" style="color:#000; background-color:#ef5b25;padding:5px;border-radius:6px;border:1px solid #dddddd">Open with postman</a>

<hr/>

## Technologies Used

### The following technologies were used in the dashboard:

-   Intervention
-   Bootstrap
-   jQuery
-   jQueryUI
-   Select2
-   DataTables
-   Tagify
-   Image-Uploadify
-   ApexCharts
-   CKEditor
-   FontAwesome
-   SweetAlert
-   intlTelInput

### The website utilizes the following technologies:

-   react-icons [Icons]
-   AOS [Animation]
-   react-lottie [JSON Animation Canvas Library]
-   react-spring [Animation Library]
-   react-content-loader [Lazy Loading Components]
-   axios [HTTP Requests]
-   Redux [State Managment]
-   Splide [Carousel]
-   node-sass [Importing vars from sass files to react]



## Laravel Commands

First, run the following command only once:
# _First use only_ <br/>

Create a link for storage folder into public to access it

```
php artisan storage:link
```

Migrate the database tables

```
php artisan migrate
```

Setting up server permissions for storage folder

```
chmod -R 775 storage
chmod -R 775 bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

## Cronjobs Commands
```
php artisan generate:sitemap
```

---

<h1>React Commands</h1>
Install required dependencies

```
npm install
```

Start react project on localhost

```
npm start
```

<h1>Gulp Commands</h1>

## Keep watching SASS/SCSS files on changes to be converted to css

```
gulp watch-sass
```
_OR_
```
sass --watch resources/js/src/assets/styles/style.scss:resources/js/src/assets/styles/style.css
```

## Convert SASS/SCSS files to css after long work

```
gulp css
```
_OR_
```
sass resources/js/src/assets/styles/style.scss:resources/js/src/assets/styles/style.css
```

## For Building a new production version all you have to do is : 

```
npm run build
```

### And it will do everything : 
- Generate a new bundle file
- Convert SCSS files into one css file
- Copy All media and styles to public dircectory
  
---

## Contact

For any inquiries or support, please email me at [abdelrahmansamirmostafa@gmail.com](mailto:abdelrahmansamirmostafa@gmail.com) or visit my website at [abdelrahman.online](https://www.abdelrahman.online).
