let styleDOM = document.styleSheets[1];

        console.log(styleDOM);

        let rules = styleDOM.cssRules;

        for(let rule of rules){
            if(rule.selectorText === '.heading'){
                console.log(rule.style.color);  //blue
                rule.style.color = 'red';
            }
        }