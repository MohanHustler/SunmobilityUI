// @flow
import { combineReducers } from 'redux';

// Authentication Reducers.
import signin from '../containers/signin/signin-reducer';
import getNetwork from '../containers/home/network/list/network-reducer';
import getNetworkById from '../containers/home/network/list/get_network_reducer';
import addNetwork from '../containers/home/network/create/create-network-reducer';
import updateNetwork from '../containers/home/network/update/update-network-reducer';
import deleteNetwork from '../containers/home/network/delete/delete-network-reducer';
import getNews from '../containers/home/news/list/news-reducer';
import getNewsById from '../containers/home/news/list/get_news_reducer';
import addNews from '../containers/home/news/create/create-news-reducer';
import updateNews from '../containers/home/news/update/update-news-reducer';
import deleteNews from '../containers/home/news/delete/delete-news-reducer';
import getMilestone from '../containers/about-us/milestone/list/milestone-reducer';
import getMilestoneById from '../containers/about-us/milestone/list/get-milestone-reducer';
import addMilestone from '../containers/about-us/milestone/create/create-milestone-reducer';
import updateMilestone from '../containers/about-us/milestone/update/update-milestone-reducer';
import deleteMilestone from '../containers/about-us/milestone/delete/delete-milestone-reducer';
import getPartnerNews from '../containers/about-us/partnership/list/partner-news-reducer';
import getPartnerById from '../containers/about-us/partnership/list/get-partner-reducer';
import getPartnerNewsList from '../containers/about-us/partnership/list/get-news-reducer';
import addPartnerNews from '../containers/about-us/partnership/create/create-partner-news-reducer';
import addPartnerWithNews from '../containers/about-us/partnership/create/create-partner-with-news-reducer';
import addPartner from '../containers/about-us/partnership/create/create-partner-reducer';
import updatePartner from '../containers/about-us/partnership/update/update-partner-reducer';
import updatePartnerNews from '../containers/about-us/partnership/update/update-partner-news-reducer';
import deletePartner from '../containers/about-us/partnership/delete/delete-partner-reducer';
import deletePartnerNews from '../containers/about-us/partnership/delete/delete-partner-news-reducer';
import getCategory from '../containers/media/category/list/category-reducer';
import addCategory from '../containers/media/category/create/create-category-reducer';
import updateCategory from '../containers/media/category/update/update-category-reducer';
import deleteCategory from '../containers/media/category/delete/delete-category-reducer';
import getCoverage from '../containers/media/coverage/list/coverage-reducer';
import getCoverageById from '../containers/media/coverage/list/get-coverage-reducer';
import addCoverage from '../containers/media/coverage/create/create-coverage-reducer';
import updateCoverage from '../containers/media/coverage/update/update-coverage-reducer';
import deleteCoverage from '../containers/media/coverage/delete/delete-coverage-reducer';
import getImageGallery from '../containers/media/image-gallery/list/image-gallery-reducer';
import getImageGalleryById from '../containers/media/image-gallery/list/get-image-gallery-reducer';
import addImageGallery from '../containers/media/image-gallery/create/create-image-gallery-reducer';
import updateImageGallery from '../containers/media/image-gallery/update/update-image-gallery-reducer';
import deleteImageGallery from '../containers/media/image-gallery/delete/delete-image-gallery-reducer';
import getLaunches from '../containers/media/image-gallery/list/get-launches-reducer';
import getVideo from '../containers/media/videos/list/video-reducer';
import getVideoById from '../containers/media/videos/list/get-video-reducer';
import addVideo from '../containers/media/videos/create/create-video-reducer';
import updateVideo from '../containers/media/videos/update/update-video-reducer';
import deleteVideo from '../containers/media/videos/delete/delete-video-reducer';
import getMediakit from '../containers/media/mediakit/list/mediakit-reducer';
import getSectionHeading from '../containers/media/mediakit/list/get-section-heading-reducer';
import getMediakitById from '../containers/media/mediakit/list/get-mediakit-reducer';
import addMediakit from '../containers/media/mediakit/create/create-mediakit-reducer';
import updateMediakit from '../containers/media/mediakit/update/update-mediakit-reducer';
import deleteMediakit from '../containers/media/mediakit/delete/delete-mediakit-reducer';
import getDashboard from '../containers/dashboard/dashboard-reducer';

// Root Reducer.
const reducers = combineReducers({
  signin,
  getNetwork,
  getNetworkById,
  addNetwork,
  updateNetwork,
  deleteNetwork,
  getNews,
  getNewsById,
  addNews,
  updateNews,
  deleteNews,
  getMilestone,
  getMilestoneById,
  addMilestone,
  updateMilestone,
  deleteMilestone,
  getPartnerNews,
  getPartnerById,
  getPartnerNewsList,
  addPartnerNews,
  addPartnerWithNews,
  addPartner,
  updatePartner,
  updatePartnerNews,
  deletePartner,
  deletePartnerNews,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCoverage,
  getCoverageById,
  addCoverage,
  updateCoverage,
  deleteCoverage,
  getImageGallery,
  getImageGalleryById,
  addImageGallery,
  updateImageGallery,
  deleteImageGallery,
  getLaunches,
  getVideo,
  getVideoById,
  addVideo,
  updateVideo,
  deleteVideo,
  getMediakit,
  getSectionHeading,
  getMediakitById,
  addMediakit,
  updateMediakit,
  deleteMediakit,
  getDashboard
});

export default reducers;
