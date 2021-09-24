import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoutes from './private-routes';
import SignIn from '../containers/signin';
import ListNetwork from '../containers/home/network/list';
import CreateNetwork from '../containers/home/network/create/create-network';
import UpdateNetwork from '../containers/home/network/update/update-network';
import ListNews from '../containers/home/news/list';
import CreateNews from '../containers/home/news/create/create-news';
import UpdateNews from '../containers/home/news/update/update-news';
import ListMilestone from '../containers/about-us/milestone/list';
import CreateMilestone from '../containers/about-us/milestone/create/create-milestone';
import UpdateMilestone from '../containers/about-us/milestone/update/update-milestone';

import ListPartnership from '../containers/about-us/partnership/list';
import CreatePartnership from '../containers/about-us/partnership/create/create-partner';
import UpdatePartnership from '../containers/about-us/partnership/update/update-partner';

import ListCoverage from '../containers/media/coverage/list';
import CreateCoverage from '../containers/media/coverage/create/create-coverage';
import UpdateCoverage from '../containers/media/coverage/update/update-coverage';
import ListImageGallery from '../containers/media/image-gallery/list';
import CreateImageGallery from '../containers/media/image-gallery/create/create-image-gallery';
import UpdateImageGallery from '../containers/media/image-gallery/update/update-image-gallery';
import ListVideo from '../containers/media/videos/list';
import CreateVideo from '../containers/media/videos/create/create-video';
import UpdateVideo from '../containers/media/videos/update/update-video';
import ListMediakit from '../containers/media/mediakit/list';
import CreateMediakit from '../containers/media/mediakit/create/create-mediakit';
import UpdateMediakit from '../containers/media/mediakit/update/update-mediakit';
import Dashboard from '../containers/dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/signin"
        component={(props) => <SignIn {...props} />}
      />
      <PrivateRoutes
        exact
        path="/"
        component={(props) => <Dashboard {...props} />}
      />
      <PrivateRoutes
        exact
        path="/networks"
        component={(props) => <ListNetwork {...props} />}
      />
      <PrivateRoutes
        exact
        path="/networks/create"
        component={(props) => <CreateNetwork {...props} />}
      />
      <PrivateRoutes
        exact
        path="/networks/:id/edit"
        component={(props) => <UpdateNetwork {...props} />}
      />
      <PrivateRoutes
        exact
        path="/news"
        component={(props) => <ListNews {...props} />}
      />
      <PrivateRoutes
        exact
        path="/news/create"
        component={(props) => <CreateNews {...props} />}
      />
      <PrivateRoutes
        exact
        path="/news/:id/edit"
        component={(props) => <UpdateNews {...props} />}
      />

      <PrivateRoutes
        exact
        path="/milestones"
        component={(props) => <ListMilestone {...props} />}
      />
      <PrivateRoutes
        exact
        path="/milestones/create"
        component={(props) => <CreateMilestone {...props} />}
      />
      <PrivateRoutes
        exact
        path="/milestones/:id/edit"
        component={(props) => <UpdateMilestone {...props} />}
      />
      <PrivateRoutes
        exact
        path="/partnership"
        component={(props) => <ListPartnership {...props} />}
      />
      <PrivateRoutes
        exact
        path="/partnership/create"
        component={(props) => <CreatePartnership {...props} />}
      />
      <PrivateRoutes
        exact
        path="/partnership/:id/edit"
        component={(props) => <UpdatePartnership {...props} />}
      />

      <PrivateRoutes
        exact
        path="/coverages"
        component={(props) => <ListCoverage {...props} />}
      />
      <PrivateRoutes
        exact
        path="/coverages/create/:category"
        component={(props) => <CreateCoverage {...props} />}
      />
      <PrivateRoutes
        exact
        path="/coverages/:id/edit/:category"
        component={(props) => <UpdateCoverage {...props} />}
      />
      <PrivateRoutes
        exact
        path="/imagegalleries"
        component={(props) => <ListImageGallery {...props} />}
      />
      <PrivateRoutes
        exact
        path="/imagegalleries/create/:category"
        component={(props) => <CreateImageGallery {...props} />}
      />
      <PrivateRoutes
        exact
        path="/imagegalleries/:id/edit/:category"
        component={(props) => <UpdateImageGallery {...props} />}
      />
      <PrivateRoutes
        exact
        path="/videos"
        component={(props) => <ListVideo {...props} />}
      />
      <PrivateRoutes
        exact
        path="/videos/create/:category"
        component={(props) => <CreateVideo {...props} />}
      />
      <PrivateRoutes
        exact
        path="/videos/:id/edit/:category"
        component={(props) => <UpdateVideo {...props} />}
      />
      <PrivateRoutes
        exact
        path="/mediakits"
        component={(props) => <ListMediakit {...props} />}
      />
      <PrivateRoutes
        exact
        path="/mediakits/create/:category"
        component={(props) => <CreateMediakit {...props} />}
      />
      <PrivateRoutes
        exact
        path="/mediakits/:id/edit/:category"
        component={(props) => <UpdateMediakit {...props} />}
      />
    </Switch>
  </Router>
);

export default Routes;
