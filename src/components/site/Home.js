import {Link} from 'react-router-dom';

const Home = () =>{
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>This app is intented to be a starter/tutorial app for your upcoming project and a learning sandbox for you in months and years to come should you continue to develop software with React. In this application, we will work through some of the basic React concepts, build out some small applications, and then unleash you to build your own applications.</p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, you can move on to the next module.</li>
                    <li>The styling is intentionally left bland in some spots. Just a sandbox.</li>
                    <li>At this phase, the site is not yet responsive.</li>
                    <li>Refactor the text on this pake and make this your own project.</li>
                    <li>This app simply scratches the surface on what is possible with React.</li>
                    <li>We have tried to collect the very best resources for this app, and we have cited those <Link to='/resources'>here</Link>.</li>
                    <li>The set up for this app might be the most confusing part. Hang in there!</li>
                    <li>
                        <Link to='/resources'>React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;