 
function showMore(dotContent, hiddenContent, imgUrl, text) {
    if (dotContent.style.display === "none") {
      dotContent.style.display = "inline";
      hiddenContent.style.display = "none";
      text.innerText = "Show More";
      imgUrl.src = "./Images/downArrow.png";
    } else {
      dotContent.style.display = "none";
      hiddenContent.style.display = "inline";
      imgUrl.src = "./Images/upArrow.png";
      text.innerText = "Show Less";
    }
  }
  
  function handleShowMore() {
    const dotContent = document.getElementById("dot-content");
    const hiddenContent = document.getElementById("hidden-content");
    const imgUrl = document.getElementById("show-more-img");
    const text = document.getElementById("show-more-text");
  
    showMore(dotContent, hiddenContent, imgUrl, text);
  }
  
//   Exporting for testing purposes
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      handleShowMore,
      showMore,
    };
  }


