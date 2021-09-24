import { all } from 'redux-saga/effects';

import { watchSignin } from '../containers/signin/signin-saga';
import { watchGetNetwork } from '../containers/home/network/list/network-saga';
import { watchGetNetworkById } from '../containers/home/network/list/get_network_saga';
import { watchCreateNetwork } from '../containers/home/network/create/create-network-saga';
import { watchUpdateNetwork } from '../containers/home/network/update/update-network-saga';
import { watchDeleteNetwork } from '../containers/home/network/delete/delete-network-saga';
import { watchGetNews } from '../containers/home/news/list/news-saga';
import { watchGetNewsById } from '../containers/home/news/list/get_news_saga';
import { watchAddNews } from '../containers/home/news/create/create-news-saga';
import { watchUpdateNews } from '../containers/home/news/update/update-news-saga';
import { watchDeleteNews } from '../containers/home/news/delete/delete-news-saga';
import { watchGetMilestone } from '../containers/about-us/milestone/list/milestone-saga';
import { watchGetMilestoneById } from '../containers/about-us/milestone/list/get-milestone-saga';
import { watchCreateMilestone } from '../containers/about-us/milestone/create/create-milestone-saga';
import { watchUpdateMilestone } from '../containers/about-us/milestone/update/update-milestone-saga';
import { watchDeleteMilestone } from '../containers/about-us/milestone/delete/delete-milestone-saga';
import { watchGetPartnerNews } from '../containers/about-us/partnership/list/partner-news-saga';
import { watchGetPartnerById } from '../containers/about-us/partnership/list/get-partner-saga';
import { watchGetPartnerNewsList } from '../containers/about-us/partnership/list/get-news-saga';
import { watchAddPartnerNews } from '../containers/about-us/partnership/create/create-partner-news-saga';
import { watchAddPartnerWithNews } from '../containers/about-us/partnership/create/create-partner-with-news-saga';
import { watchAddPartner } from '../containers/about-us/partnership/create/create-partner-saga';
import { watchUpdatePartner } from '../containers/about-us/partnership/update/update-partner-saga';
import { watchUpdatePartnerNews } from '../containers/about-us/partnership/update/update-partner-news-saga';
import { watchDeletePartner } from '../containers/about-us/partnership/delete/delete-partner-saga';
import { watchDeletePartnerNews } from '../containers/about-us/partnership/delete/delete-partner-news-saga';
import { watchGetCategory } from '../containers/media/category/list/category-saga';
import { watchCreateCategory } from '../containers/media/category/create/create-category-saga';
import { watchUpdateCategory } from '../containers/media/category/update/update-category-saga';
import { watchDeleteCategory } from '../containers/media/category/delete/delete-category-saga';
import { watchGetCoverage } from '../containers/media/coverage/list/coverage-saga';
import { watchGetCoverageById } from '../containers/media/coverage/list/get-coverage-saga';
import { watchAddCoverage } from '../containers/media/coverage/create/create-coverage-saga';
import { watchUpdateCoverage } from '../containers/media/coverage/update/update-coverage-saga';
import { watchDeleteCoverage } from '../containers/media/coverage/delete/delete-coverage-saga';
import { watchGetImageGallery } from '../containers/media/image-gallery/list/image-gallery-saga';
import { watchGetImageGalleryById } from '../containers/media/image-gallery/list/get-image-gallery-saga';
import { watchCreateImageGallery } from '../containers/media/image-gallery/create/create-image-gallery-saga';
import { watchUpdateImageGallery } from '../containers/media/image-gallery/update/update-image-gallery-saga';
import { watchDeleteImageGallery } from '../containers/media/image-gallery/delete/delete-image-gallery-saga';
import { watchGetLaunches } from '../containers/media/image-gallery/list/get-launches-saga';
import { watchGetVideo } from '../containers/media/videos/list/video-saga';
import { watchGetVideoById } from '../containers/media/videos/list/get-video-saga';
import { watchCreateVideo } from '../containers/media/videos/create/create-video-saga';
import { watchUpdateVideo } from '../containers/media/videos/update/update-video-saga';
import { watchDeleteVideo } from '../containers/media/videos/delete/delete-video-saga';
import { watchGetMediakit } from '../containers/media/mediakit/list/mediakit-saga';
import { watchGetSectionHeading } from '../containers/media/mediakit/list/get-section-heading-saga';
import { watchGetMediakitById } from '../containers/media/mediakit/list/get-mediakit-saga';
import { watchCreateMediakit } from '../containers/media/mediakit/create/create-mediakit-saga';
import { watchUpdateMediakit } from '../containers/media/mediakit/update/update-mediakit-saga';
import { watchDeleteMediakit } from '../containers/media/mediakit/delete/delete-mediakit-saga';
import { watchGetDashboard } from '../containers/dashboard/dashboard-saga';

const sagas = function* sagas() {
  yield all([
    watchSignin(),
    watchGetNetwork(),
    watchGetNetworkById(),
    watchCreateNetwork(),
    watchUpdateNetwork(),
    watchDeleteNetwork(),
    watchGetNews(),
    watchGetNewsById(),
    watchAddNews(),
    watchUpdateNews(),
    watchDeleteNews(),
    watchGetMilestone(),
    watchGetMilestoneById(),
    watchCreateMilestone(),
    watchUpdateMilestone(),
    watchDeleteMilestone(),
    watchGetPartnerNews(),
    watchGetPartnerById(),
    watchGetPartnerNewsList(),
    watchAddPartnerNews(),
    watchAddPartnerWithNews(),
    watchAddPartner(),
    watchUpdatePartner(),
    watchUpdatePartnerNews(),
    watchDeletePartner(),
    watchDeletePartnerNews(),
    watchGetCategory(),
    watchCreateCategory(),
    watchUpdateCategory(),
    watchDeleteCategory(),
    watchGetCoverage(),
    watchGetCoverageById(),
    watchAddCoverage(),
    watchUpdateCoverage(),
    watchDeleteCoverage(),
    watchGetImageGallery(),
    watchGetImageGalleryById(),
    watchCreateImageGallery(),
    watchUpdateImageGallery(),
    watchDeleteImageGallery(),
    watchGetLaunches(),
    watchGetVideo(),
    watchGetVideoById(),
    watchCreateVideo(),
    watchUpdateVideo(),
    watchDeleteVideo(),
    watchGetMediakit(),
    watchGetSectionHeading(),
    watchGetMediakitById(),
    watchCreateMediakit(),
    watchUpdateMediakit(),
    watchDeleteMediakit(),
    watchGetDashboard()
  ]);
};

export default sagas;
