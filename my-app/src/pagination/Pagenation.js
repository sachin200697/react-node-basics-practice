import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function Pagenation() {
  const [data, setData] = useState(null);
  const [pageData, setPageData] = useState({ page: 1, size: 10, maxPage: 0 });
  useEffect(() => {
    const callAPI = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      setData(data);
      setPageData({
        ...pageData,
        maxPage: Math.ceil(data.products.length / pageData.size),
      });
    };
    callAPI();
  }, []);

  const setPage = (page) => {
    if (page >= 1 && page <= pageData.maxPage) {
      setPageData({ ...pageData, page });
    }
  };

  const renderProducts = () => {
    let start = pageData.page * pageData.size - pageData.size;
    let end = pageData.page * pageData.size;
    return data.products
      .slice(start, end)
      .map((product) => <Product key={product.id} product={product} />);
  };

  const renderPage = () => {
    const style = {
      border: "1px solid black",
      padding: "10px",
      cursor: 'pointer'
    };
    const pageList = [...new Array(pageData.maxPage)].map((_, index) => {
      const newStyle = {...style};
      if(pageData.page===(index+1)){
        newStyle.background = 'rgba(0,0,0,.5)';
      }
      return (
        <span key={index + 1} style={newStyle} onClick={() => setPage(index + 1)}>
          {index + 1}
        </span>
      );
    });

    if(pageData.page!==pageData.maxPage){

        pageList.push(
          <span style={style} onClick={() => setPage(pageData.page + 1)}>
            ▶
          </span>
        );
    }

    if(pageData.page !== 1){

        pageList.unshift(
          <span style={style} onClick={() => setPage(pageData.page - 1)}>
            ◀
          </span>
        );
    }
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {pageList}
      </div>
    );
  };
  return (
    <div>
      {data ? (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {renderProducts()}
          </div>
          {renderPage()}
        </div>
      ) : (
        "...loading"
      )}
    </div>
  );
}

export default Pagenation;
