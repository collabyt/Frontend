import React from 'react';
import PropTypes from 'prop-types';

class KeywordsList extends React.Component {
  render() {
    return (
      <div className="row d-inline-flex flex-row mx-0 p-2 mb-1 justify-content-center">
        {
			this.props.keywords
			  ? this.props.keywords.map((keyword) => (<div key={keyword.id} className="keyword mr-2 border border-primary">{keyword.keyword}</div>)) : <div />
		}
      </div>
    );
  }
}

KeywordsList.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default KeywordsList;
