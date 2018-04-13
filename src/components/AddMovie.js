import React, {Component} from 'react';

class AddMovie extends Component {

    addNewMovie(e){
        e.preventDefault();
        var movie = {
            title: this.title.value,
            year: this.year.value,
            description: this.description.value,
            poster: this.poster.value,
        };
        this.props.addMovie( movie );
    }
    render(){
        return (
            <form className="movie-form" onSubmit={(e)=>this.addNewMovie(e)}>
                <p>Добавление фильма</p>
                <input ref={(input)=> this.title = input} type="text" placeholder="Название"/>
                <input ref={(input)=> this.year = input} type="text" placeholder="Год"/>
                <input ref={(input)=> this.poster = input} type="text" placeholder="Постер"/>
                <textarea ref={(input)=> this.description = input} type="text" placeholder="Описание"></textarea>
                <button type="submit">Добавить</button>
            </form>
        )
    }
}

export default AddMovie;
