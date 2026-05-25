let employees = [
  { name: "Ali", department: "IT" },
  { name: "Ahmed", department: "HR" },
  { name: "Sara", department: "IT" },
  { name: "Ayesha", department: "Finance" },
  { name: "Usman", department: "HR" }
];


Array.prototype.customGroupBy=function(key)
{

    let result={};
    for(let i=0;i<this.length;i++)
    {

let values=this[i];
let groupkey=valuess[key];
if(!result(groupkey))
{

    result[groupkey]=[];
}
result[groupkey].push(values);

    }
    return result;

}

let finalArray=employees.customGroupBy("department");
console.log(finalArray);
