import { useState } from 'react';

const State = () => {
    return(
        <div className = 'main'>
            <div className='mainDiv'>
                <h1>useState</h1>
                <hr />
                <dl>
                    <dt>useState is unique to Functional Components</dt>
                    <dd>Class components have a separate means of using and changing state</dd>
                    <dt>useState uses array destructuring</dt>
                    <dd>useState provides a state variable and a setState function</dd>
                    <dt>use State is a Hook</dt>
                    <dd>useState is a hook baked into react</dd>
                    <dt>Triggers re-renders</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component</dd>
                    <dt>Planning</dt>
                    <dd>Thinking about state first is a good way to organization your application. When we think about what data we need to store, use, and change, we can think about what we want to put in our state to allow us to do that.</dd>
                </dl>
            </div>
            <StateExample />
        </div>
    );
};

export default State;

function StateExample(){
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <br />
            <br />
            <img 
                style={{width: '50px', height: '50px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" alt=""
                onClick={() => setLikeNum(likeNum + 1)}/>
                <span>{likeNum}</span>
        </div>
    )
}