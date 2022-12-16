import React, { useState } from "react";
import * as fs from "fs";

function Slug(props) {
  const [blogItem, setBlogItem] = useState(props.blog);

  return (
    <div className="w-2/4 m-auto py-10">
      <h2 className=" font-bold">{blogItem.title}</h2>
      <p className=" my-3">{blogItem.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-flask' } },
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-python' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  //server side rendering
  // const {slug} = context.query;
  const { slug } = context.params;
  let blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
console.log(blog)
  return {
    props: { blog: JSON.parse(blog) }, // will be passed to the page component as props
  };
}

export default Slug;
