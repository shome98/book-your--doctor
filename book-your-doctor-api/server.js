// import http from 'http'
// const port=process.env.PORT
// http.createServer((req, res) => res.writeHead(200,{ 'Content-type': 'text/html' }).end('<h1>Server is on or not</h1>'))
// .listen(port,()=>console.log(`Server is running on port ${port}`))

import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});