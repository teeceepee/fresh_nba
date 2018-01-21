import { Component, PropTypes } from 'labrador-immutable';
import immutable from 'seamless-immutable';
import wx from 'labrador-immutable'
//import { connect } from 'labrador-redux';

const { any } = PropTypes;

const url = 'https://nba.readmatters.com/d/nba_images/random'

class Random extends Component {
  static propTypes = {
    foo: any
  };

  static defaultProps = {
    foo: 'bar'
  };

  constructor(props) {
    super(props);
    this.state = immutable({
      imageUrl: '',
    });
  }

  children() {
    return {};
  }

  onLoad() {
    this.fetchImage()

    console.log(this.state.imageUrl)
  }

  // onReady() {
  // }

  // onUpdate() {
  // }

  // onShow() {
  // }

  // onHide() {
  // }

  // onUnload() {
  // }
  
  handleClick() {
    this.fetchImage()
  }

  async fetchImage() {
    const resp = await wx.request({url: url})
    const imageUrl = resp.data.data.image_url
    this.setState({imageUrl})
  }
}

export default Random;

// export default connect(
//   (state)=>({})
// )(Random);
