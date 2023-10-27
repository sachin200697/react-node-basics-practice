import React from "react";
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

    const createHiddenElement = (name, value) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        return input;
    }
    return <React.Fragment>
        <div id='form-div'></div>
        <button onClick={submitForm}>Create And Submit Form</button>
        </React.Fragment>;
}