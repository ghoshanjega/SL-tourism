import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 3 } },
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
    console.log(this.props.items);
    // console.log(tags)
    return this.props.items.map(i => (
      <PreviewCompatibleImage
        imageInfo={{
          image: __dirname + `/static/` + {i}
        }}
      />
    ));
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    const handleOnDragStart = e => e.preventDefault();
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          mouseDragEnabled={true}
        />

        <ul>{this.props.items.map(this.thumbItem)}</ul>
        <button onClick={() => this.slidePrev()}>Prev button</button>
        <button onClick={() => this.slideNext()}>Next button</button>
      </div>
    );
  }
}

export default Gallery;
