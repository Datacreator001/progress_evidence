import React, { Component } from 'react'

const initialState = {
	name: 'Manny',
	message: 'HOCs are cool',
	skin: 'black',
	eye: 'brown',
};
type State = Readonly<typeof initialState>;

const messageHoc=(WrappedComponent: any)=>{
    class HOC extends Component<{}, State> {
			readonly state: State = initialState;

            render(){
                return(
                    <WrappedComponent 
                    name={this.state.name} 
                    message={this.state.message} 
                    skin={this.state.skin} 
                    eye={this.state.eye}/>
                )
            }
		}
        return HOC;
}

export default messageHoc;