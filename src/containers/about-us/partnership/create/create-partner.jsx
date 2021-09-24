import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addPartnerWithNews } from './create-partner-with-news-action';
import PartnershipForm from '../partnership-form';

const CreatePartner = ({ history }) => {
  const [partnerList, setPartnerList] = useState({
    logo: null,
    description: ''
  });

  const [partnerNewsList, setPartnerNewsList] = useState([
    {
      bannerImage: null,
      heading: '',
      newsUrl: '',
      newsBrandLink: ''
    }
  ]);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isAddNewsLoading } = useSelector((state) => state.addPartnerNews);

  const partnerNewsSuccessCallback = () => {
    history.push('/partnership');
  };

  const handlePartnerNewsSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const { description, logo } = partnerList;
    const { heading, newsUrl, newsBrandLink, bannerImage } = partnerNewsList[
      partnerNewsList.length - 1
    ];

    if (
      description &&
      logo &&
      heading &&
      newsUrl &&
      newsBrandLink &&
      bannerImage
    ) {
      let partnerFormData = new FormData();

      partnerFormData.append('partner_logo', logo);
      partnerFormData.append('description', description);

      partnerNewsList.forEach((news, index) => {
        partnerFormData.append(
          [`partner_news[${index}].heading`],
          news.heading
        );
        partnerFormData.append(
          [`partner_news[${index}].news_link`],
          news.newsUrl
        );
        partnerFormData.append(
          [`partner_news[${index}].news_brand_link`],
          news.newsBrandLink
        );
        partnerFormData.append(
          [`partner_news[${index}].banner_image`],
          news.bannerImage
        );
      });

      addPartnerWithNews(
        {
          formData: partnerFormData,
          partnerNewsSuccessCallback
        },
        dispatch
      );
    }
  };

  const handleAddNews = () => {
    setPartnerNewsList([
      ...partnerNewsList,
      {
        bannerImage: null,
        heading: '',
        newsUrl: '',
        newsBrandLink: ''
      }
    ]);
  };

  const handleRemoveNews = (index) => {
    if (partnerNewsList.length > 1) {
      setPartnerNewsList(
        partnerNewsList.filter((el) => el !== partnerNewsList[index])
      );
    }
  };

  const handleCancel = () => {
    history.push('/partnership');
  };

  return (
    <PartnershipForm
      partnerList={partnerList}
      setPartnerList={setPartnerList}
      partnerNewsList={partnerNewsList}
      setPartnerNewsList={setPartnerNewsList}
      handleAddNews={handleAddNews}
      handleRemoveNews={handleRemoveNews}
      handleCancel={handleCancel}
      handlePartnerNewsSubmit={handlePartnerNewsSubmit}
      isLoading={isAddNewsLoading}
      validated={validated}
    />
  );
};

export default CreatePartner;
