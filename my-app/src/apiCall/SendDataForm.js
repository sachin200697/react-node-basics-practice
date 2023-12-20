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
        let url = 'https://oidc.stage.elogin.att.com/mga/sps/oauth/oauth20/userinfo';
        // let url = 'https://oidc.idp.elogin.att.com/mga/sps/oauth/oauth20/userinfo';
        let token = '4vUX7vu';
        token = 'abcdef';

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${token}`); // replace 'YOUR_TOKEN' with your actual token

        const requestOptions = {
            method: 'GET',
            headers
        };

        
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer DW953wqGXcyoHFdn6njY'
            }
        })        
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