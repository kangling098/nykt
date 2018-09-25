function _is_additive(s,a,b,newStr){
    
    let c = a+b
    newStr+=c;
    if(newStr.length<s.length){
        return s.startsWith(newStr) ? _is_additive(s,b,c,newStr) : 0
    }else{
        return s === newStr ? 1 : 0;
    }
}
function is_additive(s){
    let returnNum = 0;
    for(let i=1;i<s.length;i++){
        let a = Number(s.slice(0,i));
        for(let j = i;j<s.length;j++){
            let b = Number(s.slice(i,j));
            let c = a+b;
            let newStr = [a,b,c].join('')
            if(s.startsWith(newStr)){
                returnNum += _is_additive(s,b,c,newStr)
            }
        }
    }
    return returnNum === 0 ? false : true;
}
console.log(is_additive('235813'));//true
console.log(is_additive('199100199'));//true
console.log(is_additive('1001101102'));//false