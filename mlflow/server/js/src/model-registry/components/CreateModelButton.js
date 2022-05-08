import React from 'react';
import { Button } from 'antd';
import { CreateModelModal } from './CreateModelModal';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export class CreateModelButton extends React.Component {
  static propTypes = {
    buttonType: PropTypes.string,
    buttonText: PropTypes.node,
  };

  state = {
    modalVisible: false,
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  render() {
    const { modalVisible } = this.state;
    const buttonType = this.props.buttonType || 'primary';
    const buttonText = this.props.buttonText || (
      <FormattedMessage
        defaultMessage='Create Model'
        description='Create button to register a new model'
      />
    );
    const buttonSize = buttonType === 'primary' ? `${classNames.buttonSize}` : ``;
    return (
      <div>
        <Button
          className={`create-model-btn ${buttonSize}`}
          type={buttonType}
          onClick={this.showModal}
        >
          {buttonText}
        </Button>
        <CreateModelModal modalVisible={modalVisible} hideModal={this.hideModal} />
      </div>
    );
  }
}

const classNames = {
  buttonSize: css({
    height: '40px',
    width: 'fit-content',
  }),
};
