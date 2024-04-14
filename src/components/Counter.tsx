import { Component } from "react";

interface Props {}
interface State {
    /**[0] */
    yesCount: number;
    noCount: number;
}
export default class Counter extends Component<Props, State> {
    state = {
        yesCount: 0,
        noCount: 0,
    };

    buttonA_clickHandler = () => {
        this.setState(
            (prevState): State => {
                /**[0] */
                return {
                    ...prevState,
                    yesCount: prevState.yesCount + 1,
                };
            }
        );
    };
    buttonB_clickHandler = () => {
        this.setState(
            (prevState): State => {
                /**[1] */
                return {
                    ...prevState,
                    noCount: prevState.noCount + 1,
                };
            }
        );
    };

    render() {
        return (
            <div>
                <p>Yes: {this.state.yesCount}</p>
                <p>No: {this.state.noCount}</p>
                <button onClick={this.buttonA_clickHandler}>
                    yes++
                </button>
                <button onClick={this.buttonB_clickHandler}>
                    no++
                </button>
            </div>
        );
    }
}