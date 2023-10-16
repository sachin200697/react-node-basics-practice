import axios from 'axios';
export default function ShowContent(props) {        
    function submitForm() {
        let url = 'http://localhost:7000/getFile/';        
        
        // const headers = {
        //     'Content-Type': 'application/json',
        //     Authorization: 'Bearer your-token' // replace 'your-token' with your actual token
        // };

        let config = {
            headers : {
                'Content-Type': 'application/json',
                Authorization: 'Bearer SK-Token' // replace 'your-token' with your actual token
            }
          }
        const body = JSON.stringify({
            name: "sachin"
        });
                
        // fetch(url, {
        //     method: 'POST'
        //     // headers: {...headers}, 
        //     // body: {...body}
        // }).then(res=>{
        //     return res.text();            
        // }).then(data=>{
        //     console.log('test-sk-start');
        //     console.log(data);
        //     console.log('test-sk-end');
        // }).catch(error=>console.log(error));        
        
        /*
        /////////////////////////////////////////////
        axios.post(url, body,
            config
            // body: {...body}
        ).then(res=>{
            if (res) {
                // The request was successful
                // this.props.setStateToTrue();
                console.log(res.data);       
                
                var newDiv = document.getElementById("show-content"); 
                newDiv.innerHTML = res.data;
                // Create a text node with the JSON data
                // var newContent = document.createTextNode(res.data); 

                // Add the text node to the newly created div
                // newDiv.appendChild(newContent);  

                // Add the new div to the DOM
                // var currentDiv = document.getElementById("show-content");
                // document.body.insertBefore(newDiv, currentDiv);
            } else{
                console.log('An error occurred:', res.statusText);                
            }
        }).then(data=>{
            console.log(data);
        }).catch(error=>console.log(error));   
        ///////////////////////////////////////////////////
        */

        const data = {
            ip: {
              type: "192.168.0.1"
            },
            origin: {
              type: "20"
            },
            userID: {
              type: "cb852w"
            },
            customerID: {
              type: "186149616"
            },
            archiveID: {
              type: "2232750408A"
            },
            expires_on: {
              type: "1696006344"
            }
          };
          
          axios({
            method: 'post',
            url: 'http://localhost:7000/validation/',
            headers: {
              'Content-Type': 'text/plain',
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMi0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kZDRlMzNkOC1lOTRlLTQ1MGItODgyYi0yNzZkYjM1YWQ4MmUvIiwiaWF0IjoxNjk2MzYwOTA3LCJuYmYiOjE2OTYzNjA5MDcsImV4cCI6MTY5NjM2NDgwNywiYWlvIjoiRTJGZ1lIZ3ZjdjM2MWovS0ZwbVBXWHczYlZEL0F3QT0iLCJhcHBpZCI6IjA1YzA3NWJmLWIzODAtNDgwZi1hMzJmLTExYjg5YjZlZWI4ZSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2RkNGUzM2Q4LWU5NGUtNDUwYi04ODJiLTI3NmRiMzVhZDgyZS8iLCJyaCI6IjAuQVQwQTJETk8zVTdwQzBXSUt5ZHRzMXJZTGdJQUFBQUFBQUFBd0FBQUFBQUFBQUE5QUFBLiIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6ImRkNGUzM2Q4LWU5NGUtNDUwYi04ODJiLTI3NmRiMzVhZDgyZSIsInV0aSI6Im91YWdvdHQ2ajBLd0JpWHBBY3BvQUEiLCJ2ZXIiOiIxLjAifQ.TPERtBI2mW2Kcj_6gE7oGgGV9yzWYFxHt1ftWbBV7uplSrIbiu0uHSIdKVY3mGUZyHj0qU74KZiWKnLvFSJ2gnuip6C65gMIx_lSau42hHBqPb4l5eccPtqKwBazvgkk7x0HGRmmd24sP-JlU4trOmEHF4Y5oWLMFUZPok5_CwzELU906uO9b4Kj4R7eSk-qTZXYYt3Lwhg1vyuf8g2NkViA8wrHuhGZe6g6Y4F1q4oEYcF__RBXeJe42W0p9TJzV4LBHFUS97VQNll1BDvYzzKOG7MppEguG3JNXJAzevqkqasTZm6QMVh4euZjDZj-eyDxGmdEXqSBFxaYS0tSuw',
              'Cookie': 'JSESSIONID=PSlm4AFbWgPLaBdWR0HlppZl'
            },
            data : data
          }).then((response) => {
            console.log(response.data);
          }).catch((error) => {
            console.error(error);
          });
          
         
    }
   
    function redirectPage() {
        window.location.replace('http://localhost:7000/getFile/');
    }

    function getCookieExpirationDate(numOfDays) {
        const date = new Date();
        date.setDate(date.getDate() + numOfDays);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds} GMT`;
        return formattedDate;
    }

    function fetchTokenThenSubmitForm() {
      const accessToken = 'sachin kumar token1';   
      const domain = 'https://illnqw5549:40001'
      document.cookie = `token=${accessToken}; expires=${getCookieExpirationDate(2)}; path=/; domain=illnqw5562; Secure`;   
      const form = document.getElementById('cookie-form');
      form.submit();
      // setTimeout(() => {
      //   document.cookie = `token=${accessToken}; expires=${getCookieExpirationDate(-100)}; path=/; SameSite=None; Secure`;
      // }, 1000);      
    }

    return (
        <div>
            <button onClick={() => submitForm()}>Click Poc</button>
            <div id="show-content"></div>
            <br></br><br></br>

            <form action='https://illnqw5562:40001/digital-client/MaxImage.jsp' target='_blank' method='post' id="cookie-form">
                <input type="hidden" id="custId" name="custId" value="3487" />
                <input type="hidden" id="custId" name="custId" value="3487" />
                <input type='button' value={'submit form'} onClick={fetchTokenThenSubmitForm}/>
            </form>

            <form action='http://localhost:7000/validation/' target='_blank' method='post' id="cookie-form-2">
                <input type="hidden" id="custId" name="custId" value="3487" />
                <input type="hidden" id="custId" name="custId" value="3487" />
                <input type='submit' value={'submit form second time'}/>
            </form>

            <br></br><br></br>
            <button onClick={redirectPage}>Redirect Page</button>
        </div>
    );
}