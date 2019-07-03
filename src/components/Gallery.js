import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Img from 'gatsby-image'

class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 4 } },
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>;

  galleryItems() {
    // console.log(Object.keys(this.props.items))
    // console.log(this.props.items[0].childImageSharp.originalName);
    // console.log(tags)
    const handleOnDragStart = e => e.preventDefault();
    return this.props.items.map(i => (
      <Img className="carousel-image"fluid={i.childImageSharp.fluid} key={i.childImageSharp.originalName} onDragStart={handleOnDragStart} />
    ));
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    
    return (
      <div>
        <AliceCarousel
          dotsDisabled={false}
          buttonsDisabled={false}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          mouseDragEnabled={true}
        />

        {/* <ul>{this.props.items.map(this.thumbItem)}</ul> */}
      </div>
    );
  }
}

export default Gallery;
