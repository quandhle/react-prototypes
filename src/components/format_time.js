import React, {Component} from 'react';

class FormatTime extends Component {
    constructor(props) {
        super(props);

        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '295px'
        }
    }
    render() {
        return (
            <div style={this.timerStyle}>{this.props.elapsed}</div>
        )
    }

    millisecondsToTime() {
        const {elapsed} = this.props;
        const sec = elapsed/1000;
        const min = sec/60;

        return {
            hour: Math.floor(min/60),
            min: Math.floor(min%60),
            sec: Math.floor(sec%60),
            ms: Math.floor(elapsed%100)
        }
    }

    render() {
        const {hour, min, sec, ms} = this.millisecondsToTime();
        const {timerStyle, leadingZero, trailingZero} = this;

        return (
            <div className="text-center">{hour}:{min}:{sec}.{ms}</div>
        )
    }
}

export default FormatTime;

