/* functional components have the following abilities/traits:
    -rendering of information with or without changing state
    -no 'this' keyword. Class components use this extensively.
    -often used as child components that will recieve props(properties) from a parent component
    *Functional components are just plain, standard JavaScript functions that return an React element
*/

const FunctionalComponentDemo = () =>{
    return(
        <div className='main'>
            <div className='mainDiv'>
                <div>
                    <h1>Functional Components</h1>
                    <p>Functional Components are the primary tool used in React to build a small, modular piece of your application.</p>
                </div>
                <div>
                    <dl>
                        <dt>Can access state</dt>
                        <dd>By passing props, Functional Components are capable of both rendering state variables for display, as well as updating the value of state variable(s).</dd>
                        <dt>No <i>this</i> keyword</dt>
                        <dd>Class Components in React will always require the use of <i>this</i> keyword when initializing an object using the constructor method. Functional components (or display components), however, are instanceless - meaning they have no access to the <i>this</i> keyword.</dd>
                        <dt><i>return()</i></dt>
                        <dd>Functional components (as well as class components) must return a single element - but the single element returned from the function may have children elements nested inside of it.</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
};

export default FunctionalComponentDemo;