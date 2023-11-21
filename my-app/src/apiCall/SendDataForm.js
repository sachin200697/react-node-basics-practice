import React from "react";
import axios from "axios";
export default function SendDataForm() {
    const submitForm = () => {
        const form = document.createElement('form');

        const dataToSend = {
            token: 'SK-Token',
            expiresOn: '12345'
        };

        form.action = 'http://localhost:7000/validation/34?skquery=1234567890';
        form.target = '_blank';
        form.method = 'post';
        form.setAttribute('rel', 'external');

        for(let field in dataToSend) {
            form.appendChild(createHiddenElement(field, dataToSend[field]));
        }
        
        form.appendChild(createHiddenElement('form', JSON.stringify(dataToSend)));

        const formDiv = document.getElementById('form-div');
        formDiv.appendChild(form);
        form.submit();
        formDiv.removeChild(form);
    }

    const callAttUserInfo = () => {
        let url = 'https://api.example.com/data'; // replace with your API endpoint
        url = 'https://oidc.stage.elogin.att.com/mga/sps/oauth/oauth20/userinfo?';
        let token = '4vUX7vu';
        token = 'abcdef';

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${token}`); // replace 'YOUR_TOKEN' with your actual token

        const requestOptions = {
            method: 'GET',
            headers
        };

        // fetch(url, requestOptions)
        // .then(response => response.json())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        // Create a cookie string with the key, value, and attributes
        // const cookieString = "PD-S-SESSION-ID=1_2_1_ko3pqVMU4jaThBnhuuNhH5Oe2XYDrBt5IMIM+T7taiP2-A2X; Domain=.stage.elogin.att.com; Path=/; Secure; HttpOnly";
 
        const cookieString = "PD-S-SESSION-ID=1_2_1_ko3pqVMU4jaThBnhuuNhH5Oe2XYDrBt5IMIM+T7taiP2-A2X; Domain=.stage.elogin.att.com; Path=/; Secure; SameSite=None";
        // Assign the cookie string to document.cookie
        document.cookie = cookieString;


        // var req = new XMLHttpRequest();
        // req.open("GET", "filename", true);
        // req.setRequestHeader("Authorization", "Bearer ME2CG0GAllGQFqG0BZXx");
        // req.setRequestHeader('Content-Type', 'application/json');

        // req.onreadystatechange = function() {
        //     if (this.readyState === 4 && this.status === 200) {
        //        // Typical action to be performed when the document is ready:
        //        document.getElementById("index.html").innerHTML = req.responseText;
        //        console.log(req.responseText);
        //     }
        // };
        
        // req.send();
        

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 1piSYVIzi1mU17GkQIAK'
            }
        })

        // const instance = axios.create({
        //     baseURL: url,
        //     headers: {
        //         Authorization: 'Bearer ME2CG0GAllGQFqG0BZXx'
        //     }
        //     });

        // instance.get()
        .then(response => response.json())
        .then(result => console.log('sk-data:',result))
        .catch(error => console.log('error', error));
    }


    const createHiddenElement = (name, value) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        return input;
    }
    return <React.Fragment>
        <div id='form-div'></div>
        <button onClick={callAttUserInfo}>Create And Submit Form</button>
        <div id="demo"></div>
        </React.Fragment>;
}