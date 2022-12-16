
//http://localhost:3001/api/getBlog?slug=how-to-learn-flask

export default function handler(req, res) {
  res.status(200).json(JSON.parse(data));
}
//   fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data) =>{
//     if(err){
//         res.status(500).json({error: "No Such blog found"})
//     }
//   console.log(req.query.slug)
//     res.status(200).json(JSON.parse(data))
// })
