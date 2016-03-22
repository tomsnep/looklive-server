## Service Worker (SW) performance Test LookLive server

####Without SW
DOMContentLoaded: 0.778s    
First Paint: 0.994s  
Load event: 2.19s  
![Without SW](/readme_images/before.png)

####With SW
DOMContentLoaded: 0.769s    
First Paint: 1.06s  
Load event: 2.52s
![Without SW](/readme_images/after.png)

####Conclusion

With the Service Worker the page renders a little bit slower:

DOMContentLoaded: 0.009s faster  
First Paint: 0.066s slower  
Load event: 0.33s slower

The LookLive server without SW was tested on localhost.  
The LookLive server with SW was tested on [https://webdevelopment.work3gether.com](https://webdevelopment.work3gether.com).


##Progressive Web Apps

>A Progressive Web App uses modern web capabilities to deliver an app-like user experience. 
>They evolve from pages in browser tabs to immersive, top-level apps, leveraging the web's low friction.
*Google Developers*

A Progressive Web App (PWA) is a combination between a native app and a webapp. PWA's can be added to the homescreen, so a user can open the PWA like a native app. The more the user visits the url, the more functionality it will get. PWA's use Service Workers therefore PWA's can be used offline. Also developers can send push notifications to the user, just like a native app! 

But there is more! A PWA is:  
* Progressive - Usable for all kind of users  
* Responsive - Usable by all kinds of devices
* Connectivity Independent - Can be used offline (if(ServiceWorker == true))
* App like - Feels like a native app
* Safe - Served over HTTPS
* Up to date - updates automatically, no need to download an update
* Discoverable - Search engines can find PWA's by 
* Linkable - Easy to share with a URL

![Example of a Progressive Web App](/readme_images/progressive_webapp.gif)

Above is a example of a web app

sources:
[https://developers.google.com/web/progressive-web-apps#getstarted](https://developers.google.com/web/progressive-web-apps#getstarted)  
[https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)