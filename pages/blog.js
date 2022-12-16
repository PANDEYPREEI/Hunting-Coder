import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as fs from 'fs';


function Blog(props) {
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/blogs") //fetch data
  //     .then((a) => {
  //       return a.json(); //.json return promise
  //     })
  //     .then((parsed) => {
  //       setBlogs(parsed);
  //       console.log(parsed);
  //     });
  // }, []); // Only re-run the effect if  changes
  //I. You can tell React to skip applying an effect
  //if certain values haven’t changed between re-renders.
  //To do so, pass an array as an optional second argument to useEffect:

  return (
    <div className="m-auto w-2/4 jus">
      <h2 className="font-bold text-lg my-8">Latest Blogs</h2>
      {blogs.map((blogs) => {
        return (
          <div key={blogs.title}>
            <Link href={`/blogpost/${blogs.slug}`}>
              <h2 className="font-semibold my-2">{blogs.title}</h2>
            </Link>
            <p className="mb-3">{blogs.content.substr(0, 100)}</p>
          </div>
        );
      })}
    </div>
  );
}



export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
