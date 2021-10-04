let articleDiv = document.querySelector("div");

window.onload =function() {
    axios.get("/api/articles")
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
};



//current date function
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Today's Date Is: " + m + "/" + d + "/" + y;