import music from '../Services/data'

function MusicList () {
    return (
       <div>
           {music.map(song => {
               return (
                <div>
                    <h3>{song.id}</h3>
                    <h3>{song.name}</h3>
                    <h3>{song.singer}</h3>
                    <img src={song.image} alt={song.name} />
                </div>
            )
           })}
       </div>
       )
}

export default MusicList