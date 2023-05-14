import React from "react";
import "./Theatre_gallery.css";
import kona_poster from "../assets/kona_kon.jpeg";
import { Link } from "react-router-dom";
import Theatre_poster from "../Theatre_poster/Theatre_poster";

function Theatre_gallery() {
  return (
    <div>
      <div className="contaner">
        <div className="row">
          <div className="col-lg-3">
            <Link to="/Event_details">
              <Theatre_poster 
              natak_poster={kona_poster} 
              play_name="Kona Kon Sanjate"/>
            </Link>
          </div>
          <div className="col-lg-3 snd_picc">
            <Link to="/Event_details">
              <Theatre_poster 
              natak_poster={kona_poster} 
              play_name="Kona Kon Sanjate"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theatre_gallery;
