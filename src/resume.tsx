const company0bj = [
  {
    url: "https://teamcoach.es/",
    date: "2022/05   ➡️   Today",
    postion: "Lead Software Engineer",
    icon: "/download.png",
    location: "Dallax Texas",
  },
  {
    url: "https://www.interswitchgroup.com/",
    date: "2021/01 ➡️ 2022/04",
    postion: "Frontend Engineer",
    icon: "/interswitch_logo.svg",
  },
  {
    date: "2019/12 ➡️ 2020/12",
    postion: "Web Developer",
    icon: "/baesic_logo.png",
  },
];

function Resume() {
  return (
    <>
      <h6> Brief resume</h6>
      <div className="hr"></div>
      {company0bj.map((company) => {
        return (
          <div>
            <a
              className="company-name"
              href={company.url}
              target="_blank"
              rel="noreferrer"
            >
              <p className="company-name">
                <img
                  className="company-icon"
                  alt=""
                  height={40}
                  src={company.icon}
                />
              </p>
              <p className="date">{company.date}</p>
              <p className="position">{company.postion}</p>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default Resume;
