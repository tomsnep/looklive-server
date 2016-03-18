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

A Progressive Web App uses modern web capabilities to deliver an app-like user experience. They evolve from pages in browser tabs to immersive, top-level apps, leveraging the web's low friction.

These apps aren’t packaged and deployed through stores, they’re just websites that took all the right vitamins. They keep the web’s ask-when-you-need-it permission model and add in new capabilities like being top-level in your task switcher, on your home screen, and in your notification tray. Users don’t have to make a heavyweight choice up-front and don’t implicitly sign up for something dangerous just by clicking on a link. Sites that want to send you notifications or be on your home screen have to earn that right over time as you use them more and more. They progressively become “apps”.

![Example of a Progressive Web App](/readme_images/progressive_webapp.gif)

An example of a Progressive Web App

1. The site begins life as a regular tab. It doesn’t have super-powers, but it is built using Progressive App features including TLS, Service Workers, Manifests, and Responsive Design.
2. The second (or third or fourth) time one visits the site — roughly at the point where the browser it sure it’s something you use frequently — a prompt is shown by the browser (populated from the Manifest details)
3. Users can decide to keep apps to the home screen or app launcher
4. When launched from the home screen, these apps blend into their environment; they’re top-level, full-screen, and work offline. Of course, they worked offline after step 1, but now the implicit contract of “appyness” makes that clear.

sources:
[https://developers.google.com/web/progressive-web-apps#getstarted](https://developers.google.com/web/progressive-web-apps#getstarted)  
[https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)