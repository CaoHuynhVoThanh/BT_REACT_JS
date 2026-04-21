import "./Poster.css";

function Poster(){

    return(
        <div className="poster-container">
            <img className='poster-image' src='./main-bg.jpg'></img>
            <div className="container2">
                <button className="btn-top">Recipe of the day</button>
                <div className="text-title">Salad Caprese</div>
                <div className="text-detail">Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.</div>
                <img className="avatar" src="./G1.jpg"></img>
                <div className="name" >Salad Caprese</div>
                <button className="btn-view">View now</button>
            </div>
        </div>
    );
}

export default Poster;