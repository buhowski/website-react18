import React from 'react';
import GalleryData from './galleryData';
import GalleryModal from './GalleryModal';
import './Gallery.scss';

class Interests extends React.Component {
	state = {
		itemsToShow: 4,
		activeSlide: null,
		touchDistance: 0,
	};

	openModal = (e, i) => {
		this.setState({
			activeSlide: i,
		});
	};

	closeModal = () => {
		this.setState({
			activeSlide: null,
		});
	};

	next = () => {
		const slide =
			this.state.activeSlide + 1 < GalleryData.slice(0, this.state.itemsToShow).length
				? this.state.activeSlide + 1
				: 0;
		this.setState({
			activeSlide: slide,
		});
	};

	prev = () => {
		const slide =
			this.state.activeSlide - 1 < 0
				? GalleryData.slice(0, this.state.itemsToShow).length - 1
				: this.state.activeSlide - 1;
		this.setState({
			activeSlide: slide,
		});
	};

	showMore = () => {
		if (this.state.itemsToShow < GalleryData.length) {
			this.setState((state) => ({
				itemsToShow: state.itemsToShow + 4,
			}));
		} else {
			return GalleryData.length;
		}
	};

	render() {
		const { itemsToShow, activeSlide } = this.state;

		return (
			<div className='wrapper wrapper-container'>
				<h1 className='base-title base-title--main'>Images</h1>
				<h2 className='gallery-subtitle'>For inspiration and just for fun</h2>
				<div className='gallery-container'>
					<div className='gallery-grid'>
						{GalleryData.slice(0, itemsToShow).map(({ img }, i) => {
							return (
								<div className='d-flex' onClick={(e) => this.openModal(e, i)} key={i}>
									<img className='gallery-img' src={img} alt={'picture ' + i} />
								</div>
							);
						})}
					</div>
					<button
						className='a nav-link'
						style={{
							display: itemsToShow >= GalleryData.length ? 'none' : 'block',
						}}
						onClick={this.showMore}
					>
						See More
					</button>
					<GalleryModal
						modalData={GalleryData.slice(0, itemsToShow)}
						activeSlide={activeSlide}
						hasPrev={activeSlide > 0}
						hasNext={activeSlide + 1 < GalleryData.slice(0, itemsToShow).length}
						prev={this.prev}
						next={this.next}
						closeModal={this.closeModal}
					/>
				</div>
			</div>
		);
	}
}

export default Interests;
