import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambat Thumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                <div clas="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
            </div>
        </div>
    )
}

export default Post;