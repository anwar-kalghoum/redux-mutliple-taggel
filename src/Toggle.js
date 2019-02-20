import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage, toggleMessagetwo } from './actions';

const Toggle = ({ messageVisibility, messagetwoVisibility, toggleMessage, toggleMessagetwo }) => (
  <div>
    {messageVisibility &&
      <p>Message 1</p>
    }
    {messagetwoVisibility &&
      <p>Message 2</p>
    }
    <button onClick={toggleMessage}>
      Toggle Me
    </button>
    <button onClick={toggleMessagetwo}>
      Toggle Me two
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
  messagetwoVisibility: state.message.messagetwoVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
  toggleMessagetwo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
