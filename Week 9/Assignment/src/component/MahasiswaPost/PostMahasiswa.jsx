import React from "react"

const MahasiswaPost = (props) => {
    return(
        <div className="mahasiswa">
            <div className="gambar-people">
                <img src="https://i.stack.imgur.com/XmWSx.png" alt="Gambar Tumbnail Polinema"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="nimnam-mahasiswa">{props.NIM} - {props.nama}</div>
                    <p className="isi-mahasiswa">{props.alamat}</p>
                    <p className="isi-mahasiswa">{props.hp}</p>
                    <p className="isi-mahasiswa">{props.angkatan}</p>
                    <p className="isi-mahasiswa">{props.status}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Delete</button>
            </div>
        </div>
    )
}

export default MahasiswaPost;