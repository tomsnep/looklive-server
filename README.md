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
