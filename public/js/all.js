!function(e,t,n){t.getElementById("connect"),t.getElementById("connect-icon"),t.getElementById("water-on"),t.getElementById("light");let o=t.getElementById("modal");t.querySelector(".close").onclick=function(){o.classList.toggle("hidden")}}(window,document);let menuBtn=document.getElementById("openMenu");menuBtn.addEventListener("click",function(){document.querySelector(".content-footer.auto").classList.toggle("menu-open"),document.querySelector(".content-footer.auto").classList.contains("menu-open")?document.querySelector("#menuIcon").classList.replace("fa-bars","fa-times"):document.querySelector("#menuIcon").classList.replace("fa-times","fa-bars")}),function(e,t,n){let o=t.querySelector(".recipe-switch");Array.from(o).forEach(e=>{e.addEventListener("click",function(e){console.log(this.id)})})}(window,document),function(e,t,n){let o=!1,i=null,a=":3000";function c(e,t,n,o,i){this.name=e,this.duration=t,this.light=n,this.feed=o,this.temperature=i}new c("filsToms",30,5,10,20);var l=new c("disco",30,.5,1,30);new c("temp",30,15,15,10);let r=!1,s=0;function d(e){!1===r?(console.log("turning on "+e),i.emit("hardware",{type:e+"-on",duration:"UNKNOWN"}),r=!0,console.log(r)):!0===r&&(console.log("turning off "+e),i.emit("hardware",{type:e+"-off",duration:"UNKNOWN"}),"light"==e?function(){t.getElementById("lightfade").classList.toggle("power"),barlist=t.getElementsByClassName("bars");for(var e=0;e<barlist.length;e++)barlist[e].classList.toggle("hidden")}():"feed"==e&&t.getElementById("feed").classList.toggle("power"),r=!1,console.log(r))}let u=t.getElementById("tatty-old-recipe");u.addEventListener("click",function(){new Promise(function(n,c){console.log("connecting to CloudPlantIO..."),t.getElementById("shield").classList.toggle("hidden"),t.querySelector(".content-footer").classList.toggle("active"),e.RTCPeerConnection=e.RTCPeerConnection||e.mozRTCPeerConnection||e.webkitRTCPeerConnection;var l=new RTCPeerConnection({iceServers:[]}),r=function(){};l.createDataChannel(""),l.createOffer(l.setLocalDescription.bind(l),r),l.onicecandidate=function(e){if(e&&e.candidate&&e.candidate.candidate){var t=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(e.candidate.candidate)[1];l.onicecandidate=r,i=io(t+a),o=!0,console.log("Connected!"),n({name:"alcwyn",hobby:"coding"})}}}).then((e,n)=>{setTimeout(u.innerHTML="Connected to CloudPlantIO!",3e3),function(e){console.log("Starting: "+Object.values(e)[0]+", "+Object.values(e)[1]+", "+Object.values(e)[2]+", "+Object.values(e)[3]+", "+Object.values(e)[4]),startTime=(new Date).getTime(),startDate=new Date(startTime),durationLength=(n=Object.values(e)[1],ms=24*n*60*60*1e3,ms),finishTime=new Date(startTime+durationLength),console.log("Date started: "+startDate),console.log("Duration: "+Object.values(e)[1]+" days"),console.log("Expected harvest: "+finishTime),console.log("Harvest info: "+durationLength);var n;let o=1e3*Object.values(e)[2],a=1e3*Object.values(e)[3],c=setTimeout(function t(){d(Object.keys(e)[2]),c=setTimeout(t,o)},o),l=setTimeout(function t(){d(Object.keys(e)[3]),l=setTimeout(t,a)},a);setInterval(function(){if(target=Object.values(e)[4],s<=target){console.log("Ambient temperature: "+s),console.log("Target temperature: "+target),console.log("turning on thermostat"),i.emit("hardware",{type:"thermostat-on",duration:"UNKNOWN"});let e=t.querySelector(".mercury"),n=t.querySelector(".mercury span"),o=t.querySelector(".target");convertedTemp=2*s+20,targetTop=100-(2*target+20),topValue=100-convertedTemp,o.style.top=targetTop+"%",e.style.height=convertedTemp+"%",n.innerHTML=s+"&deg;",n.style.top=topValue+"%",s++}else console.log("Ambient temperature: "+s),console.log("Target temperature: "+target),console.log("turning off thermostat"),i.emit("hardware",{type:"thermostat-off",duration:"UNKNOWN"}),s--},1e3)}(l)})})}(window,document),window,document,function(e,t,n){$(".onboarding").slick({dots:!0,arrows:!1,draggable:!0,mobileFirst:!0,infinite:!1});let o=t.getElementById("skip");o.addEventListener("click",function(){t.querySelector(".onboarding").style.display="none",o.style.display="none"}),t.querySelector(".finished-onboarding").addEventListener("click",function(){t.querySelector(".onboarding").style.display="none",o.style.display="none"})}(window,document);