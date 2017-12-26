import React, { Component } from 'react';
import './App.css';
import './featureItem.css';
import FEATURES from './camp_features';
import FeatureItem from './FeatureItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      maxTreeDepth: 1,
      closeAll: true,
      openedFeature: null,
    };
    this.maxTreeDepth = this.maxTreeDepth.bind(this);
    this.closeAll = this.closeAll.bind(this);
  }

  componentDidMount() {
    this.maxTreeDepth();
    console.group('Camp Features');
    console.log('As in the given files, here are current features:');
    console.log(FEATURES);
    console.groupEnd();
  }

  maxTreeDepth() {
    // could be used later to calculate rendering properties when
    // using varying methods of displaying list, eg. radial list
    let maxDepth = 0;

    FEATURES.forEach(feature => {

      function dfs(feature, depth = 1) {
        let node_stack = [[feature, depth]];

        while (node_stack.length !== 0) {
          let [current_feature, current_depth] = node_stack.pop();

          if (current_depth > maxDepth) {
            maxDepth = current_depth;
          }

          current_feature.subfeatures.forEach(subfeature => {
            node_stack.push([subfeature, current_depth + 1]);
          });
        }
      };

      dfs(feature);
    });

    this.setState({ maxDepth: maxDepth });
  }

  closeAll(currentFeature) {
    this.setState({ closeAll: true, openedFeature: currentFeature });
  }

  maxWidth(feature) {
    // could be used later to calculate rendering properties when
    // using varying methods of displaying list, eg. radial list
    let maxWidth = 1;
    let node_queue = [feature];

    while (node_queue.length !== 0) {
      let current_feature = node_queue.shift();
      if (current_feature.subfeatures.length > maxWidth) {
        maxWidth = current_feature.subfeatures.length;
      }
      node_queue.push(...current_feature.subfeatures);
    }
    return maxWidth;
  }

  render() {
    const featuresList = FEATURES.sort((a,b) => b.presence - a.presence)
      .map(feature => (
        <FeatureItem
          closeAll={this.closeAll}
          collapse={
            this.state.openedFeature &&
            feature.title === this.state.openedFeature.title ?
            false : this.state.closeAll
          }
          mainFeatureCount={FEATURES.length}
          maxTreeDepth={this.state.maxTreeDepth}
          maxWidth={this.maxWidth(feature)}
          directionRow={false}
          key={feature.title}
          feature={feature}
        />
      )
    );

    return (
      <div className="feature-container">
        <ul className="feature-list">
          {featuresList}
        </ul>
      </div>
    );
  }
}

export default App;
