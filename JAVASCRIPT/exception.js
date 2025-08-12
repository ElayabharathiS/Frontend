try{
    const ans = getQuotient("a",2);
    if (ans===Infinity){
        throw new Error('Divided by 0 Error')
    }
    console.log(ans);
}catch(error){



   console.log(error.message)
   console.log(error.name)
   //console.log(error.stack)

}finally{
    console.log('from finally');
    
}

function getQuotient(input1, input2) {
    if(isNaN(input1) || isNaN(input2)){
        
        let error = new Error('Not a valid numnber');
        error.name="NotAValidNumber"
        throw error;
    }
    return input1 / input2;
}