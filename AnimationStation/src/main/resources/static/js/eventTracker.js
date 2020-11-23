window.addEventListener("load", function () {
    console.log("Script loaded");
    init();
  });
  function init() {
    document.featureForm.lookup.addEventListener('click', function(e) {
      e.preventDefault();
      var id = document.featureForm.id.value;
      if(!isNaN(id) && id > 0) {
        showFeature(id);
      }
    });
    document.newFeatureForm.submit.addEventListener('click', function(e) {
      e.preventDefault();
      postNewFeature();
    })
  }
  function showFeature(id) {
    console.log('showFeture(): id=' + id);
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'api/features/' + id);
   xhr.onreadystatechange = function(){
     if ( xhr.readyState === 4 ) {
       if( xhr.status === 200) {
       let feature = JSON.parse(xhr.responseText);
       console.log(feature.name);
       displayFeature(feature);
       }
       else{
       console.error('Feature Not Found');
       let div = document.getElementById('featureData');
       div.textContent = "Feature Not Found";
       }
     }
   };
   xhr.send();
  }
  function displayAllFeatures(features){
    let counter = 0;
    let featureCounter = document.createElement('blockquote');
    var featureDiv = document.getElementById('featureData');
    featureDiv.textContent = '';
    var table = document.createElement('table');
    table.style.border = 'solid';
    var tableHead = document.createElement('thead');
    var tableRow = document.createElement('tr');
    var featureIdHeader = document.createElement('th');
    var featureHeader = document.createElement('th');
    var titleHeader = document.createElement('th');
    var descriptionHeader = document.createElement('th');
    var lengthHeader = document.createElement('th');
    var directorHeader = document.createElement('th');
    var releaseYearHeader = document.createElement('th');
    var genreHeader = document.createElement('th');
    var tableBody = document.createElement('tbody');

    featureIdHeader.textContent = 'ID';
    featureHeader.textContent = 'Name';
    titleHeader.textContent = 'Title';
    descriptionHeader.textContent = 'Description';
    lengthHeader.textContent = 'Length';
    directorHeader.textContent = 'Dirrector';
    releaseYearHeader.textContent = 'Release Year';
    genreHeader.textContent = 'Genre';

    featureDiv.appendChild(table);
    table.appendChild(tableHead);
    tableHead.appendChild(tableRow);
    tableRow.appendChild(featureIdHeader);
    tableRow.appendChild(featureHeader);
    tableRow.appendChild(titleHeader);
    tableRow.appendChild(descriptionHeader);
    tableRow.appendChild(lengthHeader);
    tableRow.appendChild(descriptionHeader);
    tableRow.appendChild(releaseYearHeader);
    tableRow.appendChild(genreHeader);
    table.appendChild(tableBody);

    features.forEach((feature, i) => {
      counter++;
      var featureRow = document.createElement('tr');
      var featureId = document.createElement('td');
      var featureTitle = document.createElement('td');
      var featureDescription = document.createElement('td');
      var featureLength = document.createElement('td');
      var featureDirector = document.createElement('td');
      var featureReleaseYear = document.createElement('td');
      var featureGenre = document.createElement('td');
      
      featureId.textContent = feature.id;
      featureTitle.textContent = feature.title;
      featureDescription.textContent = feature.description;
      featureLength.textContent = feature.length;
      featureDirector.textContent = feature.director;
      featureReleaseYear.textContent = feature.releaseYear;
      featureGenre.textContent = feature.genre;
      
      featureRow.appendChild(featureId);
      featureRow.appendChild(featureTitle);
      featureRow.appendChild(featureDescription);
      featureRow.appendChild(featureLength);
      featureRow.appendChild(featureDirector);
      featureRow.appendChild(featureReleaseYear);
      featureRow.appendChild(featureGenre);
      
      tableBody.appendChild(featureRow);
      featureRow.addEventListener('click', function(e){
        e.preventDefault();
        getFeaturesById(feature.id);
      })
    });
    featureCounter.textContent = counter + " features located";
    featureDiv.appendChild(featureCounter);
  }
  function displayFeature(feature) {
    var dataDiv = document.getElementById('featureData');
    dataDiv.textContent = '';
    let h1 = document.createElement('h1');
    h1.textContent = feature.title;
    dataDiv.appendChild(h1);
    let bq = document.createElement('blockquote');
    bq.textContent = feature.description;
    dataDiv.appendChild(bq);
 
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = "Length(min): " + feature.length;
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = "Directed by: " + feature.director;
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = "Release Year: " + feature.releaseYear;
    ul.appendChild(li);
    li = document.createElement('li');
    li.textContent = "Genre: " + feature.genre;
    ul.appendChild(li);
    
    dataDiv.appendChild(ul);
  }
  function postNewFeature(e) {
    let form = document.newFeatureForm;
    let newFeature = {
      title: form.title.value,
      description: form.description.value,
      length: form.length.value,
      director: form.director.value,
      releaseYear: form.releaseYear.value,
      genre: form.genre.value,
      
    };
    console.log(newFeature);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/features');
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 201 || xhr.status === 200) {
          let savedFeature = JSON.parse(xhr.responseText);
          displayFeature(savedFeature);
        }
        else {
          console.error('Error creating feature, status=' + xhr.status);
          console.error(xhr.responseText);
        }
      }
    };
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(JSON.stringify(newFeature));
  }
  function deleteFeature(id) {
   let xhr = new XMLHttpRequest();
   xhr.open('DELETE', 'api/features/' + id);
   xhr.onreadystatechange = function(){
    if ( xhr.readyState === 4 ) {
      if( xhr.status === 204) {
      var div = document.getElementById('featureData');
      div.textContent = '';
      var deleted = document.createElement('h2');
      deleted.textContent('Feature deleted');
      div.appendChild(deleted);
      }
      else{
      console.error('Feature Not Found');
      div.textContent = "Feature Not Found";
      }
    }
  };
  xhr.send();
  }

  function updatedFeature() {
      var updateForm = document.updateFeatureForm;
      var updatedFeature = {
          title : updateForm.title.value,
          description : updateForm.description.value,
          length : updateForm.length.value,
          director : updateForm.director.value,
          releaseYear : updateForm.releaseYear.value,
          genre : updateForm.genre.value,
      };
      var xhr = new XMLHttpRequest();
  xhr.open('PUT', 'api/features/' + updateForm.id.value);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        var updatedFeature = JSON.parse(xhr.responseText);
        displayFeature(updatedFeature);
      }
      else {
        console.log('PUT request failed.');
        console.log(xhr.status + ': ' + xhr.responseText);
      }
    }
  };
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(updatedFeature));
  updateForm.reset();

  }

