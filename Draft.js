import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import getRNDraftJSBlocks from 'react-native-draftjs-render';
import contentState from 'DraftJs/contentState';

const MyApp = () => {
  const blocks = getRNDraftJSBlocks({ contentState });
  return (
    <View style={{ flex: 1 }}>{blocks}</View>
  );
};

AppRegistry.registerComponent('MyApp', () => MyApp);