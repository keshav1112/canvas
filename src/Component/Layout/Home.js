import React, { useEffect, useState } from "react";

import Loading from "./Loading/Loading";
import groupBy from "./groupBy";
import Search from "./Search/Search";
import Folder from "./Folder/Folder";

const URL =
  "http://authoring.canvas8.com:8080/share/form-controller/reactive/service-search.jsp";

const Home = () => {
  const [param, setParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolders] = useState([]);
  const [isError, setIsError] = useState("");

  const loadPost = async (param) => {
    try {
      const response = await fetch(`${URL}?query=${param}`);
      const result = await response.json();
      setIsLoading(true);
      let folders = groupBy(result.data);
      setFolders(folders);
      setIsError("");
    } catch (error) {
      setIsLoading(false);
      throw new Error(`Something went wrong: not ${error.message}`);
    }
  };

  useEffect(() => {
    loadPost(param);
  }, [param]);

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setParam(e.target.value);
    }
  };

  if (!isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (isError) {
    return <main>Error...</main>;
  } else {
    return (
      <article className="middle-wrapper">
        <Search searchHandler={searchHandler} param={param} />
        <div className="folder__wrapper">
          <ul className="folder__list">
            {folders.map((data, index) => {
              return (
                <li key={index}>
                  <Folder {...data} />
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    );
  }
};

export default Home;
