import React from 'react';
import './Business.css';


class Business extends React.Component {
  getGoogleUrl(address) {
    return `https://www.google.com/maps/search/?api=1&query=${address}`
  }
  getWebsiteUrl() {
    return `${this.props.business.url}`
  }
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a href={this.getWebsiteUrl()} ><img src={this.props.business.imageSrc} alt=''/></a>
        </div>
        
        <a href={this.getGoogleUrl(this.props.business.address)}><h2>{this.props.business.name}</h2></a>
        <div className="Business-information">
          <div className="Business-address">
            <a href={this.getGoogleUrl(this.props.business.address)}><p>{this.props.business.address}</p></a>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;