import React from 'react';
import Counter from "./components/Counter";

import { Component } from "react";

interface Param {
    id: number;
    name: string;
    type: `string`;
}
interface ParamValue {
    paramId: number;
    value: string;
}
interface Model {
    paramValues: ParamValue[];
}
interface Props {
    params: Param[];
    model: Model;
}
interface State {
    params: Param[];
    model: Model;
}
class ParamEditor extends Component<Props, State> {

    // state = {
    //     params: Props.params
    // }

    // public getModel(): Model {
    //     return this.State.model
    // }
}

function App() {

    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

export default App;
