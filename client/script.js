

window.onload =function() {
  let articleDiv = document.getElementById("articles");
  let postJobButton = document.getElementById("post-job")
    axios.get("http://localhost:4400/api/articles")
    .then((res) => {
      for (let i =0; i <= 4; i++) {
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
        articleSource.textContent = "📰 " + articleInfo.source;
        articleTitle.appendChild(articleSource);

        // add author
        let articleAuthor = document.createElement("li");
        articleAuthor.textContent = "✏️ " + articleInfo.author;
        articleTitle.appendChild(articleAuthor);

        //add date
        let articleDate = document.createElement("li");
        let date = new Date(articleInfo.date)
        articleDate.textContent = "🕑 " + date.toDateString();
        articleTitle.appendChild(articleDate);

        //add description
        let articleDesc = document.createElement("li");
        articleDesc.textContent = articleInfo.description;
        articleTitle.appendChild(articleDesc);

        //add URL
        let articleUrlLink = document.createElement('a');
        let link = document.createTextNode("View Article →")
        articleUrlLink.appendChild(link)
        articleUrlLink.setAttribute('href', articleInfo.url)
        articleUrlLink.setAttribute('target', '_blank')
        articleTitle.appendChild(articleUrlLink);
    };
  })
  //invoke jobsBoard on load
  jobsBoard()
  postJobButton.addEventListener("click", addJobPosting)
};

// load simple job board
let jobsBoard = function() {
  let jobsDiv = document.getElementById("jobs")
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
      jobCategory.textContent = jobData.category;
      jobName.appendChild(jobCategory);

      let jobLocation = document.createElement("li");
      jobLocation.textContent = "📍 " + jobData.location;
      jobName.appendChild(jobLocation);

      // let applyButton = document.createElement("button");
      let applyLink = document.createElement("a")
      let link = document.createTextNode("Apply Now →")
      applyLink.appendChild(link);
      applyLink.title = "Apply Now";
      applyLink.setAttribute('href', jobData.URL)
      applyLink.setAttribute('target', "_blank")
      jobName.appendChild(applyLink);
    }
  })
};


//add job
let addJobPosting = function(body) {
  let title = document.querySelector('#title').value
  let field = document.querySelector('#category').value
  let location = document.querySelector('#location').value
  let URL = document.querySelector('#URL').value

  let bodyObj = {
    title: title,
    category: field,
    location: location,
    URL: URL
  }
  axios.post("http://localhost:4400/api/addJob", bodyObj)
  .then((res) => {
  })
};


//current date function
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Climate News Refreshed On " + m + "/" + d + "/" + y;


//dark mode
function toggleMode() {
  let background = document.body;
  background.classList.toggle("dark-mode");
}