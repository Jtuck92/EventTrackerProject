window.addEventListener("load", function (e) {
  e.preventDefault;
  init();
  let createDiv = document.getElementById("featureCreateForm");
  createDiv.createFeatureButton.addEventListener("click", function (e) {
    e.preventDefault;
    createFeatureObject();
  });
});

function init() {
  console.log("Wait, WAIT! I'm here... I loaded!");
  getAllFeatures();
}

function getAllFeatures() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/features");
  xhr.onreadystatechange = function () {
    if (xhr.status < 400) {
      let data = xhr.responseText;
      let allFeatures = JSON.parse(data);
      displayAllFeatures(allFeatures);
    } else {
      let divError = document.getElementById("featureList");
      divError.textContent = "Oops! Error retrieving features...";
    }
  };
  xhr.send();
}

function displayAllFeatures(allFeatures) {
  let featureListDiv = document.getElementById("featureList");
  let featureTable = document.createElement("table");
  featureListDiv.appendChild(featureTable);

  allFeatures.forEach(function (value, index, array) {
    let tableRow = document.createElement("tr");
    featureTable.appendChild(tableRow);
    tableRow.addEventListener("click", function (e) {
      e.preventDefault;
      getOneFeature(value.id);

      let id = document.createElement("input");
      id.type = "hidden";
      id.value = value.id;
      let td1 = document.createElement("td");
      td1.textContent = value.title;
      tableRow.appendChild(td1);
      let td2 = document.createElement("td");
      td2.textContent = value.length;
      tableRow.appendChild(td2);
      let td3 = document.createElement("td");
      td3.textContent = value.director;
      tableRow.appendChild(td3);
      let td4 = document.createElement("td");
      td4.textContent = value.description;
      tableRow.appendChild(td4);
      let td5 = document.createElement("td");
      td5.textContent = value.releaseYear;
      tableRow.appendChild(td5);
      let td6 = document.createElement("td");
      td6.textContent = value.genre;
      tableRow.appendChild(td6);
    });
  });
}

function createFeatureObject() {
  let form = document.featureCreateForm;
  let feature = {};
  feature.title = form.title.value;
  feature.length = form.length.value;
  feature.director = form.director.value;
  feature.description = form.description.value;
  feature.releaseYear = form.releaseYear.value;
  feature.genre = form.genre.value;
  createFeature(feature);
}

function createFeature(feature) {
  let xhr = new XMLHttpRequest();
  let uri = "api/features";
  xhr.open("POST", uri);
  xhr.setRequestHeader("Content-type", "application/json");
  let featureJSONStringy = JSON.stringify(feature);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        let featureJSON = JSON.parse(xhr.responseText);
        displayAllFeatures();
      } else {
        console.log("POST request failed.");
        console.error(xhr.status + ": " + xhr.responseText);
      }
    }
  };
  xhr.send(featureJSONStringy);
}

function getOneFeature(featureId) {
  console.log("Fetching your feature...");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/features/" + featureId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status < 400) {
        let data = xhr.responseText;
        let feature = JSON.parse(feature);
      } else {
        let divError = document.getElementById("featureList");
        divError.textContent("Oops! Error retrieving feature...");
      }
    }
  };
  xhr.send();
}

function displayOneFeature(feature) {
  let descriptionChecker = document.getElementById("descriptionChecker");
  if (descriptionChecker !== null) {
    if (feature.description === descriptionChecker.textContent) {
      skip;
    }
  } else {
    let featureDiv = document.getElementById("featureEdit");
    let h3 = document.createElement("h3");
    h3.textContent = "Edit existing feature: ";
    featureDiv.appendChild(h3);
    let updateForm = document.createElement("form");
    updateForm.name = "updateForm";
    featureDiv.appendChild(updateForm);
    let featureId = document.createElement("input");
    featureId.type = "hidden";
    featureId.value = feature.id;
    updateForm.appendChild(featureId);
    let featureTable = document.createElement("table");
    updateForm.appendChild(featureTable);

    let tableRow = document.createElement("tr");
    featureTable.appendChild(tableRow);

    let td1 = document.createElement("td");
    tableRow.appendChild(td);
    let input = document.createElement("input");
    input.type = "text";
    input.name = "title";
    input.value = feature.name;
    td1.appendChild(input);

    let td2 = document.createElement("td");
    tableRow.appendChild(td2);
    let input2 = document.createElement("input");
    input2.type = "text";
    input2.value = feature.length;
    input2.name = "length";
    td2.appendChild(input2);

    let td3 = document.createElement("td");
    tableRow.appendChild(td3);
    let input3 = document.createElement("input");
    input3.type = "text";
    input3.value = feature.length;
    input3.name = "director";
    td3.appendChild(input3);

    let td4 = document.createElement("td");
    tableRow.appendChild(td4);
    let input4 = document.createElement("input");
    input4.type = "text";
    input4.id = "descriptionChecker";
    input4.name = "description";
    input4.value = feature.description;
    td4.appendChild(input4);

    let td5 = document.createElement("td");
    tableRow.appendChild(td5);
    let input5 = document.createElement("input");
    input5.type = "text";
    input5.value = feature.length;
    input5.name = "releaseYear";
    td5.appendChild(input5);

    let td6 = document.createElement("td");
    tableRow.appendChild(td6);
    let input6 = document.createElement("input");
    input6.type = "text";
    input6.value = feature.length;
    input6.name = "genre";
    td6.appendChild(input6);

    let td7 = document.createElement("td");
    tableRow.appendChild(td7);

    let editButton = document.createElement("input");
    editButton.type = "submit";
    editButton.name = "editButton";
    editButton.value = "Update a feature";
    editButton.addEventListener("click", function (e) {
      e.preventDefault;
      update(feature.id);
    });

    td7.appendChild(editButton);
    let deleteButton = document.createElement("input");
    deleteButton.type = "submit";
    deleteButton.name = "deleteButton";
    deleteButton.value = "Delete a feature";
    deleteButton.addEventListener("click", function (e) {
      e.preventDefault;
      deleteGoal(goal.id);
    });

    td7.appendChild(deleteButton);
  }
}

function update(featureId) {
  console.log("In update");
  let feature = {};
  feature.id = featureId;
  feature.title = updateForm.title.value;
  feature.length = updateForm.length.value;
  feature.director = updateForm.director.value;
  feature.description = updateForm.description.value;
  feature.releaseYear = updateForm.releaseYear.value;
  feature.genre = updateForm.genre.value;
  console.log(feature);
  updateGoal(featureId, feature);
}
function updateFeature(featurelId, updatedFeature) {
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "api/features/" + featureId);
  xhr.setRequestHeader("Content-type", "application/json");
  let featureJSONStringy = JSON.stringify(updatedFeature);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status < 300) {
        console.log("Updated");
        let updatedFeatureResponse = xhr.responseText;
        getAllFeatures();
      } else {
        console.log("This feature cannot be updated right now.");
      }
    }
  };
  xhr.send(featureJSONStringy);
}
function deleteFeature(featureId) {
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", "api/features/" + featureId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 204) {
        console.log("Deleted");
      } else {
        let divError = document.getElementById("featureList");
        divError.textContent = "This feature cannot be deleted right now.";
      }
    }
  };
  xhr.send();
}

