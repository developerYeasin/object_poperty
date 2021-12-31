const students = [
    {id: 21, name: "Omar sunny"},
    {id: 31, name: "Mannamma"},
    {id: 41, name: "Moyori"},
    {id: 71, name: "DeepJol"}
];
// const outPut = [];
//  for(i = 0; i < 4; i++){
//      const result = students[i].name;
//      outPut.push(result);
//  }

//  console.log(outPut);

const name = students.map(n => n.name);
console.log(name);
const id = students.map(n => n.id);
console.log(id);

