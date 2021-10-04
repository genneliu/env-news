
let articleDiv = document.getElementById("articles");
let jobsDiv = document.getElementById("jobs")

window.onload =function() {
    axios.get("http://localhost:4400/api/articles")
    .then((res) => {
      for (let i =0; i <= 9; i++) {
        let {source, author, title, description, url, publishedAt} = res.data[i];
        let articleInfo = {
          source: source.name,
          author: author,
          title: title,
          description: description,
          url: url,
          date: publishedAt,
        }
        // add title
        let articleTitle = document.createElement("ul");
        articleTitle.textContent = articleInfo.title;
        articleDiv.appendChild(articleTitle);

        // add source
        let articleSource = document.createElement("li");
        articleSource.textContent = "Source: " + articleInfo.source;
        articleTitle.appendChild(articleSource);

        // add author
        let articleAuthor = document.createElement("li");
        articleAuthor.textContent = "Author: " + articleInfo.author;
        articleTitle.appendChild(articleAuthor);

        //add date
        let articleDate = document.createElement("li");
        articleDate.textContent = "Date: " + articleInfo.date;
        articleTitle.appendChild(articleDate);

        //add description
        let articleDesc = document.createElement("li");
        articleDesc.textContent = articleInfo.description;
        articleTitle.appendChild(articleDesc);

        //add URL
        let articleURL = document.createElement("li");
        articleURL.textContent = articleInfo.url;
        articleTitle.appendChild(articleURL);

        //add image later?
        // let articleImage = document.createElement("li");
        // articleImage.source = articleInfo.urlToImage;
        // articleTitle.appendChild(articleImage);
    };
  })
  //invoke jobsBoard on load
  jobsBoard();

};

// load simple job board
let jobsBoard = function() {
  axios.get("http://localhost:4400/api/currentjobs")
  .then((res) => {
    for (let i =0; i < res.data.length; i++) {
      let {id, jobTitle, subfield, location, URL} = res.data[i];
        let jobData = {
          id: id,
          title: jobTitle,
          category: subfield,
          location: location,
          URL: URL
        }
      let jobName = document.createElement("ul");
      jobName.textContent = jobData.title;
      jobsDiv.appendChild(jobName);

      let jobCategory = document.createElement("li");
      jobCategory.textContent = "Field/Category: " + jobData.category;
      jobName.appendChild(jobCategory);

      let jobLocation = document.createElement("li");
      jobLocation.textContent = "Location: " + jobData.location;
      jobName.appendChild(jobLocation);

      // let applyButton = document.createElement("button");
      let applyLink = document.createElement("a")
      let link = document.createTextNode("Click to Apply")
      applyLink.appendChild(link);
      applyLink.title = "Click to Apply"
      applyLink.setAttribute('href', jobData.URL)
      applyLink.setAttribute('target', "_blank")
      jobName.appendChild(applyLink);
    }
  })
} 


//current date function
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Today's Date is: " + m + "/" + d + "/" + y;