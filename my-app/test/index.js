let input = 'my_name_is_sachin';

let toJava = false;
let ans = '';

for(let i of input){
    if(i==='_'){
        toJava = true;
    }
}

if(toJava){
    for(let i=0;i<input.length;i++){
        if(i===0){
            ans+=input[i];
        }else if(input[i]==='_'){
            continue;
        }else{
            if(input[i-1]==='_'){
                ans+=(input[i].toUpperCase());
            }else{
                ans+=input[i];
            }
        }
    }
}else {
    for(let i=0;i<input.length;i++){
        if(i===0){
            ans+=input[i];
        }else if(input[i] >= 'A' && input[i]<='Z'){
            ans+=('_' + input[i].toLowerCase());
        }else {
            ans+=input[i];
        }
    }
}



console.log(ans);