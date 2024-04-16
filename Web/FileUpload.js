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
