import React, { PureComponent } from "react";
import { SaProps, SaState } from "./types";

export class Sa extends PureComponent<SaProps, SaState> {
  state = {
    dsl: '',
    components: {},
    state: {}
  };

  constructor(props) {
    super(props);

    Object.assign(this.state, {
      dsl: props.dsl,
      components: props.components,
      state: props.state
    });
  };

  render() {
    return <div>23423423423</div>
  };
};