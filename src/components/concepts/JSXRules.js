import React from 'react';

const JSXRules = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla js, but most people use JSX</dd>
                </dl>
                <h1>Differences to be aware of</h1>
                <dl>
                    <dt>'className' instead of class</dt>
                    <dd>Because 'class' is a reserved word in JavaScript, we can assign classes to our JSX elements with the 'className' attribute</dd>
                    <dt>Event handler differences</dt>
                    <dd>React camel cases all of its event handler names, unlike HTML. For instance, React gives us access to 'onChange' rather than 'onchange', or 'onClick' instead of 'onclick'. There are more event handlers out there, but React camel cases them.</dd>
                    <dt>JavaScript interpolation</dt>
                    <dd>JSX allows us to write JavaScript within braces, {}, and it interprets that JS in the context of the JSX. This allows us to use variables and function names directly inside our JSX code. We'll see later how this allows us to build more dynamic components.</dd>
                    <br />
                    <p>To see more about additional features of JSX, click <a href="https://codeburst.io/understanding-jsx-9bfcdc7fe01b" rel='noreferrer' target='_blank'>here</a></p>
                </dl>
            </div>
            <NormalComponent />
            <CreateElementComponent />
        </div>
    )
};

const NormalComponent = () => {
    return (
        <div style={{ border: '2px solid black' }}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" alt="" />
        </div>
    )
};

const CreateElementComponent = () => {
    return(
        React.createElement('div', {style: {border: '2px solid black'}},
            React.createElement('h1', null, 'Create Element Component'),
            React.createElement('p', null, 'This was constructed with JSX in the return'),
            React.createElement('img', {src: 'https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg', alt: ''})
            )
        );
};

export default JSXRules;