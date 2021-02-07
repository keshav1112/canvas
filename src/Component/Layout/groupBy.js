export const list = [
  {
    title: "Test Folder",
    subTitle: "Yash Balhara",
    date: "8 Dec 2020",
  },
  {
    title: "Women's Health",
    subTitle: "Jenn Dewey",
    date: "8 Dec 2020",
  },
  {
    title: "Getting Around",
    subTitle: "Lucy Thompson",
    date: "8 Dec 2020",
  },
  {
    title: "Scrapbook Test",
    subTitle: "Lucy Thompson",
    date: "8 Dec 2020",
  },
];

let groupBy = function (data) {
  let postArr = [];
  let groups = 0;
  for (let i = 0; i < data.length; i += 3) {
    let folderProps = list[groups];
    let obj = {
      ...folderProps,
      imageSet: [],
    };

    for (let j = i; j < i + 3; j++) {
      if (data[j]) obj.imageSet.push(data[j].imageUrl);
    }
    groups++;
    if (groups === 4) {
      groups = 0;
    }
    postArr.push(obj);
  }

  return postArr;
};

export default groupBy;
