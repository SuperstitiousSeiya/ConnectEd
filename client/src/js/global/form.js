const forms = document.querySelectorAll("[data-form]");

forms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const type = form.dataset.formType;
    const method = form.dataset.form;
    const loc = form.dataset.success;
    const formData = new FormData(form);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    let id = jsonData["id"];

    let res;

    switch (method) {
      case "UPDATE":
        res = await updateData(type, id, jsonData);
        break;
      case "POST":
        res = await postData(type, jsonData);
        break;
    case "UPDATE":
        res = await updateData(type, id, jsonData);
      default:
        console.log("error");
        break;
    }
    console.log(res)
    if(res.status != 200){
        alert(res.message);
        return;
    }

    console.log(res)
    alert(res.message)
    form.reset();
    window.location.href = loc;

    if(res.accessToken){
        localStorage.setItem('authenticateToken', res.accessToken);
    }

    if(renderAll){
        renderAll();
    }

  });
});




