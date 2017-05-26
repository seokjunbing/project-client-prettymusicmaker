import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { deleteMusic } from '../actions';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255,0)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    border: '2px solid #0c1e1f',
    borderRadius: '6px',
    outline: 'none',
  },
};

class MusicTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
  }
  // delete a Song
  onDeleteClicked() {
    this.props.deleteMusic(this.props.id, this.props.history);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
      // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
    this.subitle.style.color = 'black';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  renderModal() {
    if (this.state.modalIsOpen) {
      console.log('hello');
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Cancel"
        >
          <div className="modalContent">
            <div><p>prettymusicmaker.surge.sh/editor/{this.props.id}</p></div>
            <div className="modalButtons">
              <button onClick={this.closeModal}>close</button>
            </div>
          </div>
        </Modal>
      );
    } else {
      return (
        <span />
      );
    }
  }

  render() {
    const id = this.props.id;

    return (
      <div className="songinfo">
        {this.renderModal()}
        <div className="songtitle">{this.props.title}</div>
        <NavLink to={`editor/${id}`}><button>edit</button></NavLink>
        <button onClick={this.openModal}>share</button>
        <button onClick={this.onDeleteClicked}>delete</button>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
  }
);

export default withRouter(connect(mapStateToProps, { deleteMusic })(MusicTile));
