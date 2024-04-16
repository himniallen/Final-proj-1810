const setUpForm = () => {
  const formElement = document.getElementById("FileUploadForm");
  formElement.addEventListener("submit", async (event) => {
    console.log("event hera");
    event.preventDefault();
    const fileInputElemt = document.getElementById("FileUpload");
    console.log(fileInputElemt.files);
    await sendFileToAPIShouldBeInServiceFile(fileInputElemt.files[0]);
  });
};
setUpForm();

const sendFileToAPIShouldBeInServiceFile = async (file) => {
  //some hacks that are interisting await fetch url vs local host so 5000 / image upload.
  const formdata = new FormData();
  formdata.append("UploadedImage", file);
  const url = "soemthingforanAPI";
  await fetch(url, {
    method: POST,
    body: formdata,
    
  });
};

//if we get more than one that means we have a file and 
/*
maybe it will worck and have a foreacn 
app.MapPost("/URL sub string", (http reciveiniten) => {what are you going to do aboutit})

copy file to write stream instead of string fileName = "Uploaded.svg"
save fileName = file.name
using (var fileStrean = new FileStream(filename, fileMode.Create))
{
  file.CopyTo(fileStream);
}

demo is restared is interisthg.
have thing form file uppload.
this PNG file and is sent thier.
page is reloading ani't it.
page may or may not be reloading
may be unwieldy out of hand c# vs js code to have it done know it is cool but not matters

 */