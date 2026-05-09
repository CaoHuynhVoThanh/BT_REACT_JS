import "./Poster.css";

function Poster(){

    return(
        <section className="poster">
            <div className="featured-card">
                <div className="btn-top">Recipe of the day</div>
                <div className="text-title">Salad Caprese</div>
                <div className="text-detail">Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.</div>
                <img className="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80" alt="Chef avatar"></img>
                <div className="name" >Salad Caprese</div>
                <button className="btn-view">View now <span aria-hidden="true">&gt;</span></button>
            </div>
        </section>
    );
}

export default Poster;
