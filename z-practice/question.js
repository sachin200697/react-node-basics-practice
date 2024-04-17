//LRU cache 

// nam: a 1
// age: b 2
// add: c 3
// occ: d 4
// mer: e 5


// nam: a ->
// nam: a 5
// age: b 1
// add: c 2
// occ: d 3
// mer: e 4

// age: b ->
// nam: a 1
// age: b 2
// add: c 3
// occ: d 4
// mer: e 5

const obj = {        
}

function LRU(key, value) {
    let size = Object.keys(obj).length;    
    if(size<5){
        obj[key] = {value, priority: size+1};
    }else {
        if(obj[key]){
            if(obj[key].priority !==5){
                let p = obj[key].priority;

                for(let k in obj){
                    if(obj[k].priority>p){
                        obj[k].priority-=1;
                    }
                }
                obj[key].priority = 5;
            }
            obj[key].value = value;
        }else{
            let toDelete ;
            for(let k in obj){
                if(obj[k].priority === 1){
                    toDelete = k;
                }else {
                    obj[k].priority-=1;
                }
            }
            delete obj[toDelete];
            obj[key] = {value, priority: 5};
        }
    }
}

LRU('name', 'a');
console.log(obj);

LRU('age', 'b');
console.log(obj);

LRU('address', 'c');
console.log(obj);

LRU('occupation', 'd');
console.log(obj);

LRU('merrage', 'e');
console.log(obj);

//
LRU('name', 'a');
console.log(obj);

LRU('merrage', 'eee');
console.log(obj);

LRU('age', 'bb');
console.log(obj);

LRU('person', 'p');
console.log(obj);


//escape and unescape

let s = "Hello, how are you? is't cold today";
s = escape(s);
console.log(s);
s = unescape(s);
console.log(s);

function f() {
    var i = 100;
    setTimeout(()=>{
        console.log(i);
    }, 1000);    
}

f();