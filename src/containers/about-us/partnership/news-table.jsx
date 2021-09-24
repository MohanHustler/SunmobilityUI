import React, { Fragment } from 'react';

import { Table, Button } from 'react-bootstrap';

const NewsTable = ({
  currentPartner,
  setPartnerNewsList,
  setUpdateNews,
  setPartnerNewsId,
  setShowDeletePopup,
  setCreateNews
}) => {
  return (
    <Fragment>
      <div className="news-list-header">
        <h4>News List</h4>
        <p
          onClick={() => {
            setUpdateNews(false);
            setCreateNews(true);
          }}
        >
          Add News
        </p>
      </div>
      <div className="partner-news-list">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th className="news-list-heading">News Heading</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPartner &&
              currentPartner.map((news, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{news.heading}</td>

                  <td>
                    <Button
                      variant="success"
                      className="mr-3"
                      onClick={() => {
                        setCreateNews(false);
                        setUpdateNews(true);
                        setPartnerNewsId(news.id);
                        setPartnerNewsList([
                          {
                            bannerImage: news.banner_image,
                            heading: news.heading,
                            newsUrl: news.news_link,
                            newsBrandLink: news.news_brand_link
                          }
                        ]);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setPartnerNewsId(news.id);
                        setShowDeletePopup(true);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default NewsTable;
