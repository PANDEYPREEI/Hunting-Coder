import * as fs from "fs";

export default async function handler(req, res) {
  //wait until this promise gets resolved
  // let data = await fs.promises.readdir("blogdata")
  // console.log(data)
  // let myFile;
  // let allBlogs = [];
  // for(let index=0; index < data.length ; index++){
  //     const element = data[index];
  //     console.log(element);
  //     myFile = await fs.promises.readFile(('blogdata/' + element ) , 'utf-8')
  //     console.log(myFile)
  //     allBlogs.push(JSON.parse(myFile))
  // }
  res.status(200).json(allBlogs);
}
