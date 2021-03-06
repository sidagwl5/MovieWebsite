import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Link } from "react-router-dom"

class Content extends Component {
    render() {
        return (
            <div data-aos="fade-right" className="content-main1">

                <h1>About</h1>

                <p>Film, also called movie or motion picture, is a medium used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty or atmosphere by the means of recorded or programmed moving images along with other sensory stimulations.The word "cinema", short for cinematography, is often used to refer to filmmaking and the film industry, and to the art form that is the result of it.

                   The moving images of a film are created by photographing actual scenes with a motion-picture camera, by photographing drawings or miniature models using traditional animation techniques, by means of CGI and computer animation, or by a combination of some or all of these techniques, and other visual effects.

                   Traditionally, films were recorded onto celluloid film through a photochemical process and then shown through a movie projector onto a large screen. </p>

                <br />

                <Link to="/moviepage"><button>MoviePage</button></Link>

            </div>
        );
    }
}

export default observer(Content)