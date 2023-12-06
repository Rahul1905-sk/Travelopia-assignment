const { showMore } = require("./index");

test("showMore function should toggle visibility correctly on clicking show less", () => {
  const dotContent = { style: { display: "none" } };
  const hiddenContent = { style: { display: "inline" } };
  const imgUrl = { src: "" };
  const text = { innerText: "" };

  showMore(dotContent, hiddenContent, imgUrl, text);

  expect(dotContent.style.display).toBe("inline");
  expect(hiddenContent.style.display).toBe("none");
  expect(text.innerText).toBe("Show More");
  expect(imgUrl.src).toBe("./Images/downArrow.png");
});

test("showMore function should toggle visibility correctly on clicking show more", () => {
  const dotContent = { style: { display: "inline" } };
  const hiddenContent = { style: { display: "none" } };
  const imgUrl = { src: "./Images/downArrow.png" };
  const text = { innerText: "Show More" };

  showMore(dotContent, hiddenContent, imgUrl, text);

  expect(dotContent.style.display).toBe("none");
  expect(hiddenContent.style.display).toBe("inline");
  expect(text.innerText).toBe("Show Less");
  expect(imgUrl.src).toBe("./Images/upArrow.png");
});
