import React from 'react';
import './featureItem.css';
import './App.css';

class FeatureItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    if (this.props.isSubFeature) {
      // if feature is a child feature,
      // don't worry about collapsing others
      this.setState({ expanded: !this.state.expanded });
      return;
    } else if (this.state.expanded) {
      // if we're collapsing an expanded top level feature,
      // don't worry  about collapsing others either
      this.setState({ expanded: false });
      return;
    }

    // if expanding a top level feature, collapse all others
    let openLater = true;
    if (this.state.expanded) {
      openLater = false;
    }

    let p = new Promise((resolve, reject) => {
      this.props.closeAll(this.props.rootFeature || this.props.feature);
    });

    p.then(this.setState({ expanded: openLater }));
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ expanded: !nextProps.collapse });
  }

  render() {
    const {feature, mainFeatureCount, directionRow, closeAll} = this.props;

    const expandedFeatures = feature.subfeatures
    .sort( (a,b) => b.presence - a.presence) //present features first
    .map( subfeature => (
      <FeatureItem
        closeAll={closeAll}
        key={subfeature.title}
        feature={subfeature}
        mainFeatureCount={mainFeatureCount}
        directionRow={!directionRow}
        rootFeature={this.props.rootFeature || feature}
        isSubFeature
      />
    ));

    let margin = 100/this.props.mainFeatureCount;

    return (
        <li
          className={
            `list-item
            ${feature.presence ? "enabled" : "disabled"}`
          }
          style={{ width: `calc(${margin}% - 5px)` }}
        >

          <span
            onClick={this.toggleExpand}
            className={
              `list-item-span
               ${feature.subfeatures.length > 0 ? "clickable" : ""}`
            }
          >
            <p className="button-text">
              {`${feature.title}
              ${feature.subfeatures.length === 0 ? "" :
                (this.state.expanded ? "-" : "+")
              }`}
            </p>
          </span>

          <ul
            className={
              this.props.directionRow ?
              "subfeature-list-col" :
              "subfeature-list-row"
            }
          >
            {this.state.expanded ? expandedFeatures : ""}
          </ul>

        </li>
    )
  }
}

export default FeatureItem;
