 let Input = ["MA", "SA", "I", "SCH", "OOL"]
 let convert= input =>{
    let arr=[];
    for(let i=0;i<Input.length;i++)
    {
        let str="";
        for(let j=0;j<input[i].length;j++)
        {
            str=str+input[i][j].toLowerCase();
        }
        arr.push(str);
    }
    return arr;
 }

 console.log(convert(Input));