type InterfaceIconObj = {
  id: number;
  src: string;
};

const IconObj: InterfaceIconObj[] = [
  { id: 1, src: "https://img.icons8.com/color/144/000000/react-native.png" },
  { id: 2, src: "https://img.icons8.com/color/960/000000/typescript.png" },
  { id: 3, src: "https://img.icons8.com/color/960/000000/nodejs.png" },
  { id: 4, src: "https://img.icons8.com/color/960/000000/mongodb.png" },
  { id: 5, src: "https://img.icons8.com/color/480/000000/postgreesql.png" },
  { id: 6, src: "https://img.icons8.com/color/480/000000/css3.png" },
  { id: 7, src: "https://img.icons8.com/color/480/000000/sass.png" },
  { id: 8, src: "https://img.icons8.com/color/960/000000/html-5--v2.png" },
  { id: 9, src: "https://img.icons8.com/color/480/000000/ethereum.png" },
  { id: 10, src: "https://img.icons8.com/color/480/000000/firebase.png" },
  { id: 11, src: "https://img.icons8.com/color/480/000000/graphql.png" },
  { id: 12, src: "https://img.icons8.com/color/480/000000/git.png" },
  { id: 13, src: "https://img.icons8.com/color/480/000000/redux.png" },
  { id: 14, src: "https://img.icons8.com/color/480/000000/docker.png" },
];

function Icon() {
  return (
    <>
      <div className="item  item-icon">
        {IconObj.map((icon) => (
          <img className="icon" alt="" src={icon.src} key={icon.id} />
        ))}
      </div>
    </>
  );
}

export default Icon;
