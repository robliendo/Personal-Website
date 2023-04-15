
   const form = document.querySelector("#form");
   const submitButton = document.querySelector("#submit");
   const scriptURL = "https://httpbin.org/post";

   form.addEventListener("submit", (e) => {
     submitButton.disabled = true;
     e.preventDefault();
     let requestBody = new FormData(form);
     fetch(scriptURL, { method: "POST", body: requestBody })
       .then((response) => {
         alert("Success!", response);
         submitButton.disabled = false;
       })
       .catch((error) => {
         alert("Error!", error.message);
         submitButton.disabled = false;
       });
   });
