import {Component} from 'react'

import './index.css'

const SongsList = props => {
  const {eachSong, filteredDeletedSongs} = props
  const {imageUrl, name, duration, id, genre} = eachSong

  const onDelete = () => {
    filteredDeletedSongs(id)
  }

  return (
    <li className="song-list">
      <div className="img-cont">
        <img src={imageUrl} alt="track" className="song-img" />
        <div className="song-name-cont">
          <h2>{name}</h2>
          <p className="song-para">{genre}</p>
        </div>
      </div>
      <div className="duration-cont">
        <p className="duration">{duration}</p>
        <button type="button" className="dlt-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

class SongsPlayList extends Component {
  state = {userInput: '', playList: this.props}

  onUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  deletedSong = id => {
    console.log(id)

    const {playList} = this.state
    const {trackList} = playList
    const deleteSong = trackList.filter(
      eachTrackSong => eachTrackSong.id !== id,
    )
    console.log(deleteSong)
    this.setState({playList: deleteSong})
  }

  render() {
    const {playList} = this.state
    const {trackList} = playList
    console.log(playList)
    const {userInput} = this.state
    const filteredSongs = trackList.filter(eachTrack =>
      eachTrack.name.includes(userInput),
    )
    return (
      <div className="songs-cont">
        <div className="card-cont">
          <div className="singer-cont">
            <h1>Ed Sheeran</h1>
            <p>Singer</p>
          </div>
        </div>
        <div className="songs-cont">
          <div className="input-cont">
            <p className="playlist-style">Songs Playlist</p>
            <input
              type="search"
              onChange={this.onUserInput}
              className="input-style"
              placeholder="Search"
              value={userInput}
            />
          </div>
          <ul>
            {filteredSongs.map(eachSong => (
              <SongsList
                eachSong={eachSong}
                key={eachSong.id}
                filteredDeletedSongs={this.deletedSong}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SongsPlayList
