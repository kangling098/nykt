import React,{Component} from 'react';
import './index.less'
class Mime extends Component {
    render(){
        return (
            <div>Mime</div>
        )
    }
}
class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} className='asd'  onMouseMove={this.handleMouseMove}>
  
          {/* ...but how do we render something other than a <p>? */}
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        </div>
      );
    }
  }
  
class MouseTracker extends React.Component {
render() {
    return (
    <div>
        <h1>Move the mouse around!</h1>
        <Mouse />
    </div>
    );
}
}
export default MouseTracker;